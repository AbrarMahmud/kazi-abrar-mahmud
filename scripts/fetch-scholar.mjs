// Fetches a Google Scholar profile and writes public/publications.json
// Usage: SCHOLAR_USER_ID=xxxx node scripts/fetch-scholar.mjs
import * as cheerio from 'cheerio';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const PAGE_SIZE = 100;
const OUT_PATH = process.env.OUTPUT_PATH || 'public/publications.json';
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

export function parseScholarHtml(html) {
  const $ = cheerio.load(html);
  const pubs = [];

  $('tr.gsc_a_tr').each((_, el) => {
    const row = $(el);
    const titleEl = row.find('a.gsc_a_at').first();
    const grays = row.find('div.gs_gray');
    const href = titleEl.attr('href') || '';
    const authors = $(grays[0]).text().trim();
    const venue = $(grays[1]).text().trim();
    const citations = parseInt(row.find('.gsc_a_c a').first().text().trim(), 10);

    pubs.push({
      title: titleEl.text().trim() || 'Untitled',
      link: href.startsWith('http') ? href : `https://scholar.google.com${href}`,
      venue,
      year: row.find('.gsc_a_y span').first().text().trim(),
      citations: Number.isNaN(citations) ? 0 : citations,
      authors,
      hoverText: [authors && `Authors: ${authors}`, venue && `Published in: ${venue}`]
        .filter(Boolean)
        .join('\n'),
    });
  });

  return pubs;
}

async function fetchPage(userId, cstart, attempt = 1) {
  const url = `https://scholar.google.com/citations?user=${userId}&hl=en&cstart=${cstart}&pagesize=${PAGE_SIZE}&sortby=pubdate`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
    });
    if (!res.ok) throw new Error(`Scholar responded with HTTP ${res.status}`);
    const html = await res.text();
    if (/unusual traffic|captcha/i.test(html) && !html.includes('gsc_a_tr')) {
      throw new Error('Scholar returned a captcha / unusual-traffic page');
    }
    return html;
  } catch (err) {
    if (attempt >= 3) throw err;
    const wait = attempt * 15000;
    console.warn(`Attempt ${attempt} failed (${err.message}); retrying in ${wait / 1000}s...`);
    await new Promise((r) => setTimeout(r, wait));
    return fetchPage(userId, cstart, attempt + 1);
  }
}

async function main() {
  const userId = process.env.SCHOLAR_USER_ID;
  if (!userId) {
    console.error('Missing SCHOLAR_USER_ID environment variable.');
    process.exit(1);
  }

  const all = [];
  for (let cstart = 0; ; cstart += PAGE_SIZE) {
    const pubs = parseScholarHtml(await fetchPage(userId, cstart));
    all.push(...pubs);
    if (pubs.length < PAGE_SIZE) break;
    await new Promise((r) => setTimeout(r, 3000));
  }

  if (all.length === 0) {
    console.error('No publications found (wrong user ID, or Scholar blocked the request). Keeping existing file.');
    process.exit(1);
  }

  // Skip writing if nothing changed, so we don't create empty daily commits
  try {
    const existing = JSON.parse(await readFile(OUT_PATH, 'utf8'));
    if (JSON.stringify(existing.publications) === JSON.stringify(all)) {
      console.log(`No changes (${all.length} publications).`);
      return;
    }
  } catch {
    /* no existing file yet */
  }

  await mkdir(path.dirname(OUT_PATH), { recursive: true });
  await writeFile(
    OUT_PATH,
    JSON.stringify({ updatedAt: new Date().toISOString(), publications: all }, null, 2) + '\n'
  );
  console.log(`Wrote ${all.length} publications to ${OUT_PATH}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error('Failed to update publications:', err.message);
    process.exit(1);
  });
}
