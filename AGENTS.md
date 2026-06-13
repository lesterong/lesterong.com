# AGENTS.md

Guidance for AI agents working on `lesterong.com`.

## Project overview

This is a personal portfolio website built with Astro and Tailwind CSS. The intended direction is a quiet, minimal, text-led website.

The site should feel restrained, calm, and editorial rather than like a typical portfolio landing page.

## Design principles

- Keep the site minimal and text-first.
- Prefer simple one-column layouts.
- Avoid large hero treatments, cards, gradients, glows, heavy borders, or decorative backgrounds.
- Avoid making the page feel like a SaaS/product landing page.
- Use whitespace, typography, and clear hierarchy instead of visual decoration.
- If adding visual details, make them small and subtle.
- Sketch-like graphics are acceptable, but they should be sparse and functional, not ornamental.
- The current selected-project marker is an intentionally small hand-drawn SVG sparkle.

## Content principles

- Write plainly and clearly.
- Keep copy concise.
- Preserve the core message:
  - Lester is a software engineer and designer based in Singapore.
  - Focus areas include web, iOS, front-end engineering, animation, and human-computer interaction.
  - The work sits between engineering and design.
- Do not over-market the site. Avoid inflated claims or startup-style copy.
- Prefer sections like `Now`, `Previously`, `Work`, and `Connect`.

## Tailwind usage

- This project uses Tailwind CSS. Prefer Tailwind utilities for layout, spacing, typography, color, responsive behavior, transitions, and animation application.
- Keep `src/styles/global.css` small.
- Use global CSS mainly for:
  - Tailwind imports/theme tokens
  - light/dark color variables
  - body defaults
  - shared base link styling
  - custom `@keyframes` when Tailwind arbitrary animation utilities need them
- Do not move most component/page styling into custom CSS unless there is a strong reason.
- In Astro files, prefer `class:list` when composing shared class constants with local utility classes instead of template-string class concatenation.
- For motion, keep animations subtle and snappy, and include `motion-reduce:animate-none` or an equivalent reduced-motion fallback.
- When animating transforms, avoid putting unrelated transform responsibilities on the same element. For example, use separate nested elements for scroll movement, positioning/centering, and scale/opacity animation so one transform does not override another.

## Responsive behavior

- Always verify small viewports.
- Tables must not hide important information on mobile.
- The work table should behave as:
  - mobile: stacked/grid-like rows with project metadata visible below the title
  - `sm` and up: table rows with metadata right-aligned
- Do not use `hidden sm:*` for content unless that content appears somewhere else on mobile.

## Work/project table

- Keep all projects in one `Work` table.
- Selected projects are differentiated with the small sketch-like SVG marker, not a separate section.
- Preserve alignment by keeping the marker in its own narrow column.
- Keep metadata visible:
  - desktop: right-aligned column
  - mobile: below project title

## Implementation notes

Important files:

- `src/pages/index.astro` — main page content and layout
- `src/components/ProjectItem.astro` — work table row rendering
- `src/styles/global.css` — Tailwind theme tokens and base styles
- `src/layouts/Layout.astro` — document shell and metadata
- `src/projects/projects.json` — engineering project data
- `src/projects/design.json` — design project data

Before editing a file, read it first. Keep changes focused and avoid broad rewrites unless explicitly requested.

## Validation

After changes, run:

```sh
pnpm exec prettier --write <changed-files>
pnpm build
```

Only report validation as passing if the commands were actually run successfully.
