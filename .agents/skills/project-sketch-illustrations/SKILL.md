---
name: project-sketch-illustrations
description: Generate small restrained hand-drawn SVG project illustrations for lesterong.com, matching the cursor-hover sketches in ProjectHoverSketch. Use when adding a new project hoverSketch, designing a similar inline SVG, or converting project concepts/logos into the site's minimal sketch style.
---

# Project Sketch Illustrations

Use this skill when the user asks for a new illustration, hover sketch, project SVG, logo sketch, or a design similar to the current project hover illustrations on `lesterong.com`.

The goal is to produce quiet, minimal, sketch-like SVGs that feel editorial and restrained, not polished brand icons or product illustrations.

## Design Direction

Match the existing illustrations in `src/components/ProjectHoverSketch.astro`:

- Small monochrome line drawings.
- Hand-drawn but tidy.
- Sparse, functional, and project-specific.
- No fills except when explicitly necessary; prefer outlines.
- No gradients, glows, shadows, background shapes, heavy borders, or decorative effects.
- No large hero-style illustration treatments.
- Use simple geometric metaphors when an exact logo would be too complex.
- If adapting a university/company/logo mark, make it an inspired sketch rather than an exact trademark copy unless the user provides/requests exact paths.

## SVG Style Rules

Use this baseline shape language:

```astro
<svg viewBox="0 0 96 96" aria-hidden="true" class="size-full">
  <path class={pathClass} d="..."></path>
</svg>
```

Where `pathClass` should usually be the existing constant:

```ts
const pathClass =
  'fill-none stroke-current stroke-[1.5] stroke-linecap-round stroke-linejoin-round';
```

Guidelines:

- Use `viewBox="0 0 96 96"` for consistency.
- Use `stroke="currentColor"` through `pathClass`, not hardcoded colors.
- Use `stroke-width` around `1.5`; avoid thick strokes.
- Use `stroke-linecap="round"` and `stroke-linejoin="round"`.
- Prefer 3–6 `<path>` elements.
- Keep path coordinates simple and readable.
- Prefer open, slightly imperfect lines over perfectly dense icons.
- Keep important geometry inside roughly `16..80` on both axes.
- Leave generous whitespace.
- Avoid text inside SVGs.
- Avoid raster images and external assets.

## Motion / Interaction Context

These sketches are rendered inside the hover preview from `src/components/ProjectItem.astro` and moved by the inline script in `src/pages/index.astro`.

Do not add per-SVG animation unless the user specifically asks. If animation is added:

- Keep it subtle and snappy.
- Include reduced-motion fallback.
- Avoid transform conflicts by using nested elements for separate transform responsibilities.

## Adding a New Sketch

When adding a sketch for a project:

1. Read these files first:
   - `src/components/ProjectHoverSketch.astro`
   - `src/components/ProjectItem.astro`
   - `src/content.config.ts`
   - relevant JSON file under `src/projects/`
2. Choose a concise kebab-case sketch name, e.g. `yonsei-logo`, `calendar-grid`, `farm-sprout`.
3. Add that name to the `SketchName` union in `ProjectHoverSketch.astro`.
4. Add that name to the `hoverSketch` enum in `src/content.config.ts`.
5. Add a conditional SVG block in `ProjectHoverSketch.astro`:

```astro
{
  name === 'new-sketch-name' && (
    <svg viewBox="0 0 96 96" aria-hidden="true" class="size-full">
      <path class={pathClass} d="..." />
      <path class={pathClass} d="..." />
    </svg>
  )
}
```

6. Configure the project JSON:

```json
{
  "name": "Project Name",
  "type": "Web",
  "tech": ["Astro"],
  "hoverSketch": "new-sketch-name"
}
```

7. Run validation:

```sh
pnpm exec prettier --write <changed-files>
pnpm build
```

Only report validation as passing if both commands actually pass.

## Concept Mapping

When the user gives a project name or topic, translate it into a simple visual metaphor:

- Campus / university: shield, gate, path, map line, dome, or landmark silhouette.
- Digital twin / maps: contour lines, route lines, buildings, orbit/grid, layered rectangles.
- iOS / mobile: rounded device outline, app-like panel, small interaction glyph.
- Game: playful object from the game, simplified character, peg, tile, board, path.
- Data / analytics: sparse bars, trend line, table grid, magnifying glass.
- Scheduling: calendar grid, clock arc, timeline.
- Chat / AI: speech bubble, small bot face, cursor, prompt window.
- Climate / environment: wave lines, leaf, sun arc, cloud, simple horizon.
- Architecture / civic: column, pavilion, building outline, plan grid.
- Design / Figma: frames, cursor, nodes, component boxes.

Avoid literal complexity. Choose one strong idea and draw it simply.

## Quality Checklist

Before finalizing a sketch, check:

- Does it still read at `size-24`?
- Does it feel like a sketch rather than a filled icon?
- Is it unique enough compared with the other project sketches?
- Does it preserve the site's quiet, minimal tone?
- Are there no hidden mobile-only issues or missing JSON schema entries?
- Did you avoid hardcoded colors and decorative effects?

## Example Sketches

Yonsei-inspired shield sketch:

```astro
<svg viewBox="0 0 96 96" aria-hidden="true" class="size-full">
  <path
    class={pathClass}
    d="M48 11c16 4 28 6 34 7-.8 29-10 51-34 67-24-16-33-38-34-67 6-1 18-3 34-7Z"
  ></path>
  <path class={pathClass} d="M25 25c13 8 24 20 23 36"></path>
  <path class={pathClass} d="M71 25c-13 8-24 20-23 36"></path>
  <path class={pathClass} d="M33 27c8 5 14 12 15 21"></path>
  <path class={pathClass} d="M63 27c-8 5-14 12-15 21"></path>
  <path class={pathClass} d="M35 67c8 5 18 5 26 0"></path>
</svg>
```

Calendar sketch:

```astro
<svg viewBox="0 0 96 96" aria-hidden="true" class="size-full">
  <path class={pathClass} d="M22 25h52v50H22zM22 39h52M35 18v14M61 18v14"
  ></path>
  <path class={pathClass} d="M34 50h8M48 50h8M62 50h8M34 62h8M48 62h8M62 62h8"
  ></path>
</svg>
```

Sprout sketch:

```astro
<svg viewBox="0 0 96 96" aria-hidden="true" class="size-full">
  <path class={pathClass} d="M48 78V35"></path>
  <path class={pathClass} d="M47 42c-13-15-28-12-34 0 12 8 25 8 34 0Z"></path>
  <path class={pathClass} d="M50 34c8-17 23-20 34-10-7 14-20 19-34 10Z"></path>
  <path class={pathClass} d="M21 79c16-7 38-7 54 0"></path>
  <path class={pathClass} d="M28 67c12-4 28-4 40 0"></path>
</svg>
```

## Response Style

When generating an illustration for the user:

- Briefly explain the visual metaphor.
- Provide the SVG block or apply it directly to `ProjectHoverSketch.astro` if editing the project.
- If editing the project, mention the `hoverSketch` key to use in JSON.
- Keep the response concise.
