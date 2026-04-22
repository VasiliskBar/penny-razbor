# AGENTS.md

## Project Summary

- Project type: static single-page landing page
- Build tool: Vite 8
- Runtime: vanilla JavaScript in the browser
- Styling: plain CSS in a single stylesheet
- Deployment target: GitHub Pages
- GitHub Pages base path: `/penny-razbor/`
- Published output: the site is built into `dist/`, then copied into `docs/` for GitHub Pages hosting

## Stack

- HTML entry: `index.html`
- Main app script: `src/main.js`
- Main styles: `src/style.css`
- Static assets: `public/`
- Build config: `vite.config.js`

## Current Site Features

- Branded landing page for "Пенный Разбор"
- Custom hero and content sections rendered from `src/main.js`
- Pixel-art animated header scene rendered on canvas
- Snake mini-game rendered on canvas
- Keyboard controls for the game on desktop
- Touch swipe controls for the game on mobile
- Promo popup inside the snake game

## Commands

Install dependencies:

```bash
npm install
```

Start local dev server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Update GitHub Pages publish folder after build:

```powershell
npm run build
Remove-Item .\docs\* -Recurse -Force
Copy-Item .\dist\* .\docs -Recurse -Force
```

## Code Rules

- Keep the project dependency-free unless a new dependency is clearly justified.
- Prefer vanilla JavaScript and CSS over introducing frameworks or abstractions.
- Preserve the current architecture: one main rendered page in `src/main.js` and one main stylesheet in `src/style.css`.
- Keep text content and UI labels in Russian unless the task explicitly requires another language.
- Use semantic HTML inside template strings where possible.
- Preserve accessibility attributes already present in the project, especially `aria-label`, `role`, button labels, and focus behavior.
- Keep canvas-based features lightweight and browser-safe.
- When changing controls for the snake game, do not break existing keyboard behavior.
- When changing mobile behavior, preserve swipe support for the snake game.
- Do not change `vite.config.js` base path unless the deployment path really changes.
- Do not edit files in `dist/` manually. Treat `dist/` as generated output.
- If GitHub Pages is still configured to publish `docs/`, copy fresh build artifacts from `dist/` to `docs/` before final deployment.

## Editing Guidance

- When writing complex features or significant refactors, use an ExecPlan (as described in `PLANS.md`) from design to implementation.
- `src/main.js` owns the page markup, interaction logic, header canvas animation, and snake game logic.
- `src/style.css` owns all visual styling, responsive layout, and decorative pseudo-elements.
- Prefer extending existing sections and CSS tokens instead of creating disconnected patterns.
- Reuse the existing color palette and visual language: warm beer tones, amber highlights, dark brown backgrounds, rounded cards, and pixel-art accents.
- Preserve the current responsive behavior for header, hero, snake section, and footer.

## Self-Check Before Finishing

- Run:

```bash
npm run build
```

- Confirm the build succeeds without errors.
- If the change affects deployment output, refresh `docs/` from `dist/`.
- Manually verify the page still loads correctly.
- Manually verify the header pixel animation still renders.
- Manually verify the snake game still works:
  - keyboard arrows on desktop
  - swipe gestures on mobile
  - pause toggle
  - promo popup open and close flow
  - reset on collision
- Manually verify responsive layout at desktop and mobile widths.
- Manually verify that any new text is readable against the existing background and matches the current tone.

## Deployment Reminder

- GitHub Pages currently expects files from `docs/`.
- A normal release flow is:

```powershell
npm run build
Remove-Item .\docs\* -Recurse -Force
Copy-Item .\dist\* .\docs -Recurse -Force
git add .
git commit -m "Update site"
git push origin main
```
