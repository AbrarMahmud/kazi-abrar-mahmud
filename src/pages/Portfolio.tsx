import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Github, Linkedin, Mail, Youtube, BookOpen, ArrowUpRight, Notebook as Robot, Cpu, FlaskRound as Flask, Briefcase, Youtube as YoutubeIcon, ExternalLink, GraduationCap } from 'lucide-react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import GlassCard from '../components/GlassCard';
import { portfolio } from '../config/portfolio';

const INITIAL_RESEARCH_COUNT = 3;
const INITIAL_PROJECT_COUNT = 4;
const INITIAL_VIDEO_COUNT = 3;

const INITIAL_ARTICLES_COUNT = 3;

interface Publication {
  title: string;
  link: string;
  venue: string;
  year: string;
  citations: number | null;
  authors: string;
  hoverText: string;
}

// publications.json is generated daily by .github/workflows/update-publications.yml
// (scripts/fetch-scholar.mjs). Optional: set this to the raw GitHub URL so the site
// always reads the newest committed file without needing a redeploy, e.g.
// 'https://raw.githubusercontent.com/<user>/<repo>/main/public/publications.json'
const PUBLICATIONS_REMOTE_URL ='https://raw.githubusercontent.com/abrarmahmud/kazi-abrar-mahmud/main/public/publications.json';

function Portfolio() {
  const navigate = useNavigate();
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  // {/* My additiont */}
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Live Google Scholar publications
  const [publications, setPublications] = useState<Publication[]>([]);
  const [pubStatus, setPubStatus] = useState<'loading' | 'live' | 'fallback'>('loading');
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const sources = [
      PUBLICATIONS_REMOTE_URL,
      `${import.meta.env.BASE_URL}publications.json`,
    ].filter(Boolean);

    const loadFallback = () => {
      setPublications(
        portfolio.research.map((r) => ({
          title: r.title,
          link: r.link,
          venue: r.journal,
          year: String(r.year),
          citations: null,
          authors: r.description,
          hoverText: r.abstract,
        }))
      );
      setPubStatus('fallback');
    };

    (async () => {
      for (const url of sources) {
        try {
          const res = await fetch(url, { signal: controller.signal, cache: 'no-cache' });
          if (!res.ok) continue;
          const data = await res.json();
          if (Array.isArray(data.publications) && data.publications.length > 0) {
            setPublications(data.publications);
            setUpdatedAt(data.updatedAt ?? null);
            setPubStatus('live');
            return;
          }
        } catch (err) {
          if ((err as Error)?.name === 'AbortError') return;
        }
      }
      loadFallback();
    })();

    return () => controller.abort();
  }, []);

  const displayedPublications = showAllPublications
    ? publications
    : publications.slice(0, INITIAL_RESEARCH_COUNT);
  const hasMorePublications = publications.length > INITIAL_RESEARCH_COUNT;
  
  const handleDownloadCV = () => {
    window.open(portfolio.cv, "_blank");
  };

  const displayedResearch = showAllResearch ? portfolio.research : portfolio.research.slice(0, INITIAL_RESEARCH_COUNT);
  const displayedProjects = showAllProjects ? portfolio.projects : portfolio.projects.slice(0, INITIAL_PROJECT_COUNT);
  const displayedVideos = showAllVideos ? portfolio.blogs : portfolio.blogs.slice(0, INITIAL_VIDEO_COUNT);
  // {/* My additiont */}
  const displayedArticles = showAllArticles ? portfolio.articles : portfolio.articles.slice(0, INITIAL_ARTICLES_COUNT);


  const hasMoreResearch = portfolio.research.length > INITIAL_RESEARCH_COUNT;
  const hasMoreProjects = portfolio.projects.length > INITIAL_PROJECT_COUNT;
  const hasMoreVideos = portfolio.blogs.length > INITIAL_VIDEO_COUNT;
  
  // {/* My additiont */}
  const hasMoreArticles = portfolio.articles.length > INITIAL_ARTICLES_COUNT;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-16">
      <BackgroundAnimation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <GlassCard className="mb-12 text-center p-8 animate-fade-in animate-bounce-slow">
          <img
            src={portfolio.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2 text-gray-800">{portfolio.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{portfolio.title}</p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">{portfolio.bio}</p>
          
          <button
            onClick={handleDownloadCV}
            className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg 
            flex items-center gap-2 hover:bg-black/10 transition-all duration-300 mx-auto mb-6
            text-gray-700 hover:scale-105 transform"
          >
            <Download size={20} />
            Download CV
          </button>

          <div className="flex justify-center gap-4">
            <a href={portfolio.social.github} className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href={portfolio.social.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href={portfolio.social.youtube} className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Youtube size={24} />
            </a>
            <a href={`mailto:${portfolio.social.email}`} className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </GlassCard>



        {/* Skills Section */}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Technical Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {portfolio.skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm text-gray-700 hover:scale-105 transform transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Research Publication Section — synced daily from Google Scholar via GitHub Actions */}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <Flask className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Research Publications</h2>
          </div>

          {pubStatus === 'loading' && (
            <div className="space-y-6" aria-busy="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="p-4 rounded-lg animate-pulse">
                  <div className="h-6 bg-black/10 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-black/5 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-black/5 rounded w-2/3" />
                </div>
              ))}
            </div>
          )}

          {pubStatus === 'fallback' && (
            <p className="text-sm text-amber-700 mb-4">
              Publication list hasn't been synced from Google Scholar yet — showing the saved list.
            </p>
          )}

          {pubStatus !== 'loading' && (
            <div className="space-y-6">
              {displayedPublications.map((paper) => (
                <div
                  key={paper.link + paper.title}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(paper.link, "_blank")}
                >
                  <div className="p-4 rounded-lg transition-all duration-500 group-hover:opacity-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                      {paper.venue && <span>{paper.venue}</span>}
                      {paper.venue && paper.year && <span>•</span>}
                      {paper.year && <span>{paper.year}</span>}
                      {paper.citations !== null && (
                        <>
                          <span>•</span>
                          <span>{paper.citations} citations</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600">{paper.authors}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/5 backdrop-blur-md rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 min-h-fit">
                    <p className="text-gray-700 whitespace-pre-wrap">{paper.hoverText}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {pubStatus === 'live' && updatedAt && (
            <p className="text-xs text-gray-400 mt-6 text-center">
              Synced from Google Scholar on {new Date(updatedAt).toLocaleDateString()}
            </p>
          )}

          {pubStatus !== 'loading' && (
            <div className="mt-8 flex justify-center gap-4">
              {hasMorePublications && (
                <button
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
                >
                  {showAllPublications ? 'Show Less' : 'Show More'}
                  <ArrowUpRight size={16} />
                </button>
              )}
              <a
                href={portfolio.social.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                Google Scholar
                <GraduationCap size={16} />
              </a>
            </div>
          )}
        </GlassCard>

        {/* Blog Section */}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <YoutubeIcon className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Research Videos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedVideos.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.summary}</p>
                <p className="text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
          {hasMoreVideos && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowAllVideos(!showAllVideos)}
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                {showAllVideos ? 'Show Less' : 'Show More'}
                <ArrowUpRight size={16} />
              </button>
              <a
                href={portfolio.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                YouTube Channel
                <Youtube size={16} />
              </a>
            </div>
          )}
        </GlassCard>

        {/* Projects Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up mb-12" style={{ animationDelay: '400ms' }}>
          <div className="col-span-full mb-6 flex items-center gap-2">
            <Robot className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">GitHub Projects</h2>
          </div>
          {displayedProjects.map((project, index) => (
            <GlassCard 
              key={project.title} 
              className="group relative overflow-hidden h-[400px] transition-all duration-500 animate-bounce-slow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-none" />
              
              <div className="relative h-full p-6 flex flex-col justify-end transform transition-all duration-500">
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg transform transition-all duration-500 group-hover:-translate-y-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
                
                <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg absolute bottom-0 left-0 right-0 transform translate-y-full transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-sm text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-200">
                      {project.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-white hover:text-indigo-200 transition-colors"
                  >
                    View Project
                    <ArrowUpRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
          {hasMoreProjects && (
            <div className="col-span-full mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                {showAllProjects ? 'Show Less' : 'Show More'}
                <ArrowUpRight size={16} />
              </button>
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                GitHub Profile
                <Github size={16} />
              </a>
            </div>
          )}
        </div>
























        {/* Research Experience Section */}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <Flask className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Research Experience</h2>
          </div>
          <div className="space-y-6">
            {displayedResearch.map((paper) => (
              <div 
                key={paper.title} 
                // className="group relative"
                className="group relative cursor-pointer"
                onClick={() => window.open(paper.link, "_blank")}
              >
                <div className="p-4 rounded-lg transition-all duration-500 group-hover:opacity-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
                    {/* <a 
                      href={paper.link}
                      className="text-indigo-600 hover:text-indigo-500 transition-colors flex items-center gap-1"
                    >
                      View Paper
                      <ArrowUpRight size={16} />
                    </a> */}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <span>{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                    <span>•</span>
                    <span>{paper.additional_info}</span>
                  </div>
                  <p className="text-gray-600">{paper.description}</p>
                </div>
                <div className="absolute inset-0 bg-black/5 backdrop-blur-md rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 min-h-fit">
                  <p className="text-gray-700 whitespace-pre-wrap">{paper.abstract}</p>
                </div>
              </div>
            ))}
          </div>
          {hasMoreResearch && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowAllResearch(!showAllResearch)}
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                {showAllResearch ? 'Show Less' : 'Show More'}
                <ArrowUpRight size={16} />
              </button>
              <a
                href={portfolio.social.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                Google Scholar
                <GraduationCap size={16} />
              </a>
            </div>
          )}
        </GlassCard>

        {/* Experience Section */}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '50ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-8">
            {portfolio.experience.map((exp) => (
              <div key={exp.title} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute w-4 h-4 bg-white border-2 border-gray-400 rounded-full -left-[9px] top-0"></div>
                <div className="mb-1">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.period}</p>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>
        {/* My additiont */}
        {/* Article Section (Such as medium and instructible)*/}
        <GlassCard className="mb-12 p-8 animate-slide-up animate-bounce-slow">
          <div className="flex items-center gap-2 mb-6">
            <Flask className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Articles</h2>
          </div>
          <div className="space-y-6">
            {displayedArticles.map((article) => (
              // ... content structure
              // <<<<<<<<<<<<<< I HAVE  To Design it (For now just copy Research)
              <div 
              key={article.title} 
              // className="group relative"
              className="group relative cursor-pointer"
              onClick={() => window.open(article.link, "_blank")}
            >
              <div className="p-4 rounded-lg transition-all duration-500 group-hover:opacity-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                  {/* <a 
                    href={article.link}
                    className="text-indigo-600 hover:text-indigo-500 transition-colors flex items-center gap-1"
                  >
                    View Paper
                    <ArrowUpRight size={16} />
                  </a> */}
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span>{article.journal}</span>
                  <span>•</span>
                  <span>{article.year}</span>
                  {/* <span>•</span>
                  <span>{article.citations} citations</span> */}
                </div>
                <p className="text-gray-600">{article.description}</p>
              </div>
              <div className="absolute inset-0 bg-black/5 backdrop-blur-md rounded-lg p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 min-h-fit">
                <p className="text-gray-700 whitespace-pre-wrap">{article.abstract}</p>
              </div>
            </div>
            ))}
          </div>
          {hasMoreArticles && (
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => setShowAllArticles(!showAllArticles)}
                className="bg-black/5 backdrop-blur-lg px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-black/10 transition-all duration-300 text-gray-700"
              >
                {showAllArticles ? 'Show Less' : 'Show More'}
                <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </GlassCard>


        {/* Contact Section */}
        <GlassCard className="p-8 animate-slide-up animate-bounce-slow" style={{ animationDelay: '450ms' }}>
          <div className="flex items-center gap-2 mb-6">
            <Mail className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in collaborating on innovative robotics projects 
                and research opportunities. Feel free to reach out through any of the 
                following channels:
              </p>
              <div className="space-y-4">
                <a href={`mailto:${portfolio.social.email}`} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail size={20} />
                  <span>{portfolio.social.email}</span>
                </a>
                <a href={portfolio.social.linkedin} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={portfolio.social.youtube} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                  <Youtube size={20} />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Inquiries</h3>
              <p className="text-gray-600 mb-4">
                For research collaborations, speaking engagements, or academic inquiries, 
                please contact me at:
              </p>
              <div className="bg-black/5 backdrop-blur-sm rounded-lg p-4">
                <p className="text-gray-700">Electrical and Computer Engineering Building</p>
                <p className="text-gray-700"> West Palashi, BUET, Dhaka-1205</p>
                {/* <p className="text-gray-700">Cambridge, MA 02139</p> */}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default Portfolio;