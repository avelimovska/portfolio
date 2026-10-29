# Anna Velimovska · Portfolio

Astro site: a home page (business card, selected work, about) and one page per case study.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, headline, links (email, LinkedIn, Behance, CV), facts, about, experience | `src/data/profile.ts` |
| Photo | `src/assets/anna.jpg` (then set `hasPhoto: true` in `profile.ts`) |
| CV PDF | `public/` (then set `links.cv` to `/your-file.pdf`) |
| Project cards on the home page | `src/data/projects.ts` |
| Goler case study | `src/pages/work/goler.astro`, images in `src/assets/goler-shots/` |
| Colors, fonts, light/dark theme | `src/styles/global.css` |

Empty links in `profile.ts` are hidden on the page, so nothing broken shows while they are blank.

## Adding a project

1. Put its images in `src/assets/<slug>/`.
2. Add an entry to `src/data/projects.ts` with a cover image and the project's brand color as `accent`.
3. Copy `src/pages/work/goler.astro` to `src/pages/work/<slug>.astro` and replace the sections.

The first project in the list is the large featured card; the rest go into a two-column grid below it.

The case study page is built from three blocks in `src/components/case/`: `Section` (eyebrow, title, lead), `Notes` (Problem/Decision or Before/After cards; lines starting with `+` or `−` become a pro/con list) and `Shots` (a row of phone screens that turns into a swipeable strip on phones). `Wide` is for big browser screenshots.

## Images

The Goler images were exported from the Figma file "Goler: Product Design" (page Case study) at 2x. Astro converts them to WebP in several sizes at build time.
