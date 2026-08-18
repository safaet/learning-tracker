# AI ফাউন্ডেশন ট্র্যাকার (Learning Tracker)

A chalkboard-themed progress tracker for the AI Foundations curriculum — math, CS fundamentals, classical ML, deep learning, NLP/Transformers, LLM-specific topics, infrastructure, and research skills. Built with React + Vite.

## Features

- Checkbox tracking at the sub-topic level, with per-section progress bars and an overall learning-curve chart
- Expand/collapse sections individually or all at once
- Progress auto-saves to `window.storage` (when running inside a Claude artifact environment) or `localStorage` otherwise
- Optional device sync: connect an API URL + sync code to push/pull progress across devices

## Project structure

```
src/
  data.js                  curriculum data (sections, topics, sub-topics)
  progress.js               progress calculation helpers
  storage.js                 storage (window.storage/localStorage) + sync API calls
  App.jsx / App.css          root component + chalkboard styling
  components/
    TrackerBoard.jsx          state management, layout
    LearningCurve.jsx          SVG progress curve
    Section.jsx                collapsible section with progress bar
    Topic.jsx                   topic group with checkable sub-topics
    SyncPanel.jsx                device sync UI
```

## Getting started

```bash
npm install       # install dependencies
npm run dev         # start the dev server at http://localhost:5173/learning-tracker/
npm run build         # production build → dist/
npm run preview        # preview the production build locally
```

## Device sync

The sync panel lets you connect to a small backend (any server implementing the two endpoints below) to keep progress in sync across devices:

- `GET  /api/progress/:code` → `{ state: {...} }`
- `POST /api/progress/:code` with body `{ state: {...} }`

Enter your API URL and a sync code (or generate one), then connect. The same URL + code on another device will pull the same progress.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages.

One-time setup: in the repo's **Settings → Pages → Build and deployment → Source**, select **"GitHub Actions"**.

The app is served from `/learning-tracker/` (see `base` in `vite.config.js`), matching this repo's GitHub Pages URL: `https://safaet.github.io/learning-tracker/`.
