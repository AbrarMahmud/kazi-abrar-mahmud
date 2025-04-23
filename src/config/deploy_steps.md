## 1. Create a GitHub Repository

- Go to [github.com](https://github.com) and create a new repository named **`kazi-abrar-mahmud`**.
- Make it **public**.

---
# Extra step(MUST): change the (vite.config.ts)
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/kazi-abrar-mahmud/', // <<----------Update this to match your repository name

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```


## 2. Initialize Git in Your Project

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## 3. Create GitHub Actions Workflow

Create a new file at:<pre>
.github/workflows/deploy.yml
</pre>

Paste the following content into it:
```yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist


```
## 4. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click on Settings → Pages.
3. Under Source, select the gh-pages branch.
4. Click Save.



## 5. Push Changes
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git pull --rebase
git push

```
# For local Deployment and Development
```bash
npm install vite --save-dev
npx vite build
npm run dev  
```