# Markese Sweet — Hardware Engineering Portfolio

React single-page portfolio (Create React App / `react-scripts`).

## Run

```bash
npm install
npm start          # dev server at http://localhost:3000
npm run build      # static site in build/ (deploy to Netlify, Vercel, GitHub Pages…)
```

## Edit content

| What | Where |
| --- | --- |
| Name, links, stats, About text, quick facts, toolchain stages & tools | `src/data/profile.js` |
| Projects, captions, spec sheets | `src/data/projects.js` |
| Your photo | `public/profile.jpg` (portrait, ~1000×1250 px) |

Until `public/profile.jpg` exists, the hero shows a monogram placeholder.

### Adding or changing project images

1. Put the raw images in `../projects/<Project folder>/`.
2. Reference them in `src/data/projects.js` (`file: '<Project folder>/<file>'`).
3. Run `npm run images`. This writes optimised WebP files to `public/img/` and their sizes to `src/data/image-meta.json`.


Albums can be deep-linked: `https://your-site/#project/eeg-64ch/2` opens the EEG album at photo 3.
