<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f5d050d7-8f47-4eb6-affe-159fb7ef9841

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Install dependencies (if not already): `npm install`
2. Build the static bundle: `npm run build`
3. Publish the build to the `gh-pages` branch: `npm run deploy`
4. In GitHub > Settings > Pages, set the source to the `gh-pages` branch (root).

The build step already outputs `dist/`, and `gh-pages` pushes that folder automatically. You can rerun `npm run deploy` each time you update the site.

### Cache behavior

GitHub Pages now serves the `index.html` document with `no-cache` headers via the meta tags in `index.html`, so browsers revalidate the bundle whenever you reload. The hashed asset names (`assets/index-*.js/css`) also change after each `npm run build`, ensuring GitHub’s CDN delivers fresh files without manual cache clearing.

### Continuous deployment

Every push to `main` now runs `npm ci` → `npm run build` → `npm run deploy` via `.github/workflows/deploy.yml`, so the `gh-pages` branch and the live site will refresh automatically. You still only need to commit your code; the workflow handles the rest and pushes the rebuilt `dist/` to GitHub Pages.
