# Dan Portfolio

Live site: [https://danichese.github.io](https://danichese.github.io)

This is Dan's personal portfolio site and a case study in structured, AI-assisted frontend development. It shows how a project can move from planning notes and design artefacts into a tested, deployed Next.js site.

The README is written for two audiences:

- **Hiring managers:** what changed, which technologies were used, and what this demonstrates about Dan's working style.
- **Non-technical readers:** what the site does and why the implementation choices matter in plain English.

## Plain-English Summary

This project takes a portfolio that started as static assets and turns it into a maintainable web application.

In simple terms:

- The site is easier to update because content is split into reusable sections.
- The CV can be shown from Markdown instead of only relying on PDFs.
- The design has a consistent theme system with light, dark, and system modes.
- The site has automated checks so changes can be tested before being published.
- The planning process is visible through specs, plans, design files, tests, and deployment workflow.

## Hiring-Manager Summary

This repository demonstrates:

- **Frontend delivery:** Next.js, React, TypeScript, Tailwind CSS, responsive layout, metadata, and static deployment.
- **Structured planning:** Conductor specs/plans, design handoff files, project artefacts, and verification steps.
- **AI-assisted workflow:** AI tools were used for planning, design exploration, coding support, and review, with Dan making the implementation and product decisions.
- **Quality controls:** Jest, React Testing Library, ESLint, TypeScript checks, browser review, and GitHub Actions deployment.
- **Design judgement:** a custom visual system was implemented without losing readability, mobile support, or maintainability.

## Technology Stack

| Layer | Technology | Plain-English Meaning | Hiring Signal |
| :--- | :--- | :--- | :--- |
| Framework | Next.js 16 App Router | The main structure of the website | Can work with modern React application architecture |
| UI | React 19 | Builds the page from reusable components | Understands component-based frontend development |
| Language | TypeScript 5 | Adds type checks before code ships | Reduces bugs and improves maintainability |
| Styling | Tailwind CSS 4 and CSS variables | Utility styling plus a central design system | Can combine speed with custom design control |
| Content | React Markdown | Shows Markdown content inside the app | Can separate content from presentation |
| Icons | Lucide React | Consistent icon set | Uses established libraries instead of hand-rolling UI assets |
| Motion | Framer Motion | Adds small interaction polish | Knows when animation helps and when it should be restrained |
| Testing | Jest and React Testing Library | Checks components render correctly | Builds with verification, not guesswork |
| Quality | ESLint and TypeScript build | Catches issues before publishing | Uses standard engineering guardrails |
| Deployment | GitHub Actions and GitHub Pages | Publishes the site automatically | Understands CI/CD basics |

## Planning To Execution

The important part of this build is not just the final UI. It is the trace from planning artefact to implementation.

| Planning Artefact | What It Decided | Execution Result | Why It Matters |
| :--- | :--- | :--- | :--- |
| `Initial Spec.txt` | Reposition the portfolio, highlight modern tooling, and generate a Markdown CV | Next.js app with project sections and Markdown CV renderer | Shows requirements were captured before implementation |
| `conductor/product.md` | Audience is technical recruiters and hiring managers | README and site copy focus on capability, evidence, and selected work | Keeps the project aligned to the reader |
| `conductor/tech-stack.md` | Next.js, React, Tailwind, TypeScript, React Markdown, Lucide, Framer Motion | Stack implemented in `package.json`, `src/app`, and `src/components` | Shows tool choices were intentional |
| `conductor/archive/migrate_nextjs_20260125/spec.md` | Move from static portfolio to Next.js/Tailwind | App Router structure, reusable components, static export | Shows migration planning |
| `conductor/archive/migrate_nextjs_20260125/plan.md` | Break work into foundation, layout, content, and deployment | Sections, assets, CV, and GitHub Pages workflow | Shows phased execution |
| `conductor/archive/refactor_docs_polish_20260125/spec.md` | Improve code quality, documentation, UI polish, accessibility, and SEO | Refactored sections, tests, metadata, README, and interaction polish | Shows quality work after first build |
| `conductor/archive/refactor_docs_polish_20260125/plan.md` | Track audit, refactor, docs, animation, verification, and deployment | Passing tests, lint, production build, and deployment readiness | Shows verification discipline |
| `conductor/tracks/portfolio_refresh_20260519/plan.md` | Capture the latest design/content refresh | Theme system, selected-work section, cursor treatment, README rewrite | Connects the latest changes to a plan |
| `Project Artefacts/` | Provide source assets such as CV PDFs, project logos, and profile image | Assets migrated into `public/assets` and used in components | Shows practical asset handling |
| Local Project Detail handoff pack | Provide later content and visual direction | Informed positioning, structure, and high-level selected-work content | Shows handoff-driven iteration |
| Local Claude Design Files pack | Explore Liquid Glass visual direction and palette options | Glass panels, RGB theme tokens, theme toggle, and cursor treatment | Shows design exploration was translated into production code |

## Artefact Refactor Decisions

These are the planning and execution areas that needed tightening so the story works for hiring managers and non-technical readers.

| Area | What Was Refactored | Plain-English Reason | Result |
| :--- | :--- | :--- | :--- |
| Project focus | Replaced the old DexSpine emphasis with ADE as the current flagship | The reader should quickly understand the project Dan is actively building now | Site sections and tests now refer to ADE |
| README scope | Removed product-roadmap-heavy explanation from the public repo README | Hiring managers need evidence of judgement, tools, and delivery, not internal product detail | README now focuses on stack, process, design decisions, and verification |
| Design handoff | Treated the Claude design files as direction rather than a direct copy | A prototype can be expressive, but the production site still needs clarity and responsiveness | Liquid Glass, RGB palette, and cursor treatment were adapted into the existing app |
| Theme model | Made Chaos Emeralds (RGB) Light the default, with Dark and System options | Users get a readable default while still respecting personal or OS preferences | Theme provider, toggle, and CSS variables handle the modes |
| Planning trail | Added a new Conductor refresh plan instead of rewriting archived plans | Old plans remain historically accurate, while the latest work gets its own record | `conductor/tracks/portfolio_refresh_20260519/plan.md` documents the latest refresh |
| Name consistency | Updated visible copy to use "Dan" | The site should match the preferred public identity | Metadata, navigation, hero, footer, CV heading, and tests now use first-name display |
| Verification | Updated tests after copy and theme changes | If words and sections change, checks should change with them | Jest coverage now reflects the current site content |

## Tooling And Workflow

| Tool / Method | Role | Plain-English Explanation |
| :--- | :--- | :--- |
| Conductor | Planning and task tracking | Turned the work into phases, specs, plans, and verification checkpoints |
| Gemini CLI | AI-assisted build support in earlier artefacts | Helped with scaffolding, implementation, and refactoring tasks during the migration story |
| Claude design artefacts | Visual exploration | Provided a prototype and style direction that could be adapted into the real site |
| Codex | Current implementation support | Helped review artefacts, edit code, run checks, and prepare local changes for review |
| VS Code | Human review environment | Lets Dan inspect the code, edit files, and review changes directly |
| Browser review | Visual QA | Used to check the actual site experience, not just the code |
| Git and GitHub | Version control | Keeps a reviewable history of what changed and when |
| GitHub Actions | Deployment automation | Builds and publishes the site from `main` |
| Jest / React Testing Library | Automated component checks | Confirms visible sections and interactions still render as expected |
| ESLint / TypeScript | Static checks | Catches code quality and type issues before deployment |

## Design Decisions

### 1. Keep The Existing Next.js App

The project already had a working Next.js codebase and tests. Instead of replacing it with a static prototype, selected visual ideas were ported into the existing app.

Plain English: keep the reliable foundation, then improve the design.

Implemented in:

- `src/app/page.tsx`
- `src/components/sections/*`
- `src/components/ProjectCard.tsx`
- existing Jest tests

### 2. Build A Central Theme System

The theme is controlled by CSS variables and a React provider. The site supports Light, Dark, and System modes.

Plain English: the colour scheme is managed in one place, and users can choose how the site looks. The default is Chaos Emeralds (RGB) on a light surface. Dark mode keeps the same RGB identity on darker surfaces. System mode follows the visitor's own device setting.

Implemented in:

- `src/app/globals.css`
- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle.tsx`
- `tailwind.config.ts`

### 3. Use Liquid Glass Carefully

The Claude design files explored a more expressive Liquid Glass style. The production implementation uses that idea in a controlled way: glass panels, subtle highlights, and a cursor trail.

Plain English: the site has visual personality, but it still stays readable and professional.

Implemented in:

- `src/app/globals.css`
- `src/components/LiquidGlassCursor.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ADESection.tsx`

### 4. Keep The Content Review-Friendly

The latest README avoids over-sharing product scope. It focuses on technologies, artefacts, design decisions, and verification.

Plain English: a hiring manager can understand the work without needing inside knowledge of every project.

Implemented in:

- `README.md`
- `public/assets/cv.md`
- visible site copy using "Dan" as the displayed name

### 5. Remove Fragile Page-Load Animation

The previous route template used a page-level fade. It looked nice after JavaScript loaded, but it could make screenshots or pre-hydration states look blank. The template was simplified.

Plain English: the page now appears reliably as soon as it loads.

Implemented in:

- `src/app/template.tsx`

### 6. Verify Desktop And Mobile

The site was checked in a local browser preview. A mobile viewport issue was fixed with explicit viewport metadata and responsive width guards.

Plain English: the page should be usable on both a laptop and a phone.

Implemented in:

- `src/app/layout.tsx`
- `src/app/globals.css`

## Before And After

| Area | Before | After |
| :--- | :--- | :--- |
| Site structure | Static portfolio assets and an earlier migration state | Typed Next.js App Router application |
| Content model | PDF-heavy CV and project descriptions | Markdown CV plus reusable portfolio sections |
| Styling | Dark tech palette with cyan/orange accents | Central RGB design tokens with light, dark, and system modes |
| Interaction | Basic hover states and page transition | Tactile hover states plus a reduced-motion-aware liquid cursor |
| Planning | Artefacts existed, but the latest refresh was not documented as its own track | Latest refresh now has a Conductor planning artefact |
| README | Product-scope-heavy explanation | Hiring-manager-friendly case study |
| Testing | Existing component tests | Updated tests covering new copy, theme, and render expectations |
| Deployment | GitHub Pages workflow | Same workflow retained, reducing deployment risk |

## Final Change Map

This section summarises the current local changes by purpose.

| File | Type | What Changed | Why It Matters |
| :--- | :--- | :--- | :--- |
| `README.md` | Documentation | Rewritten for hiring managers and non-technical readers | Explains the project clearly without over-sharing scope |
| `conductor/tracks.md` | Planning | Added the latest refresh track to the registry | Makes the planning trail visible |
| `conductor/tracks/portfolio_refresh_20260519/plan.md` | Planning | Added a plan for the latest portfolio refresh | Connects decisions to execution and verification |
| `public/assets/cv.md` | Content | Updated the displayed CV heading to "Dan" | Keeps visible naming consistent |
| `src/app/layout.tsx` | Function / SEO | Updated metadata, viewport, providers, navbar, and cursor wiring | Improves search/social metadata, mobile behavior, and global app setup |
| `src/app/page.tsx` | Structure | Added the selected-work section into the page flow | Makes the portfolio content more complete |
| `src/app/template.tsx` | Reliability | Removed fragile page-level fade | Prevents blank pre-hydration rendering |
| `src/app/globals.css` | Design | Added RGB theme tokens, glass styles, responsive guards, cursor styling, and print styles | Centralises the design system |
| `tailwind.config.ts` | Design system | Exposed theme colours to Tailwind | Keeps utility classes aligned with the custom theme |
| `src/components/ThemeProvider.tsx` | Function | Added Light/Dark/System state and persistence | Gives users theme control |
| `src/components/ThemeToggle.tsx` | Function / UI | Added accessible theme switch | Makes the theme system visible and usable |
| `src/components/LiquidGlassCursor.tsx` | Interaction | Added pointer lens and trail behavior | Provides distinctive interaction polish |
| `src/components/Navbar.tsx` | Design / Function | Updated brand display and theme controls | Improves navigation and visible identity |
| `src/components/sections/HeroSection.tsx` | Design / Content | Updated hero copy, CTA layout, and visual panel | Clarifies the first impression |
| `src/components/sections/ADESection.tsx` | Content / Design | Added selected-work section with concise project framing | Presents current work without overloading the reader |
| `src/components/sections/AboutSection.tsx` | Content | Reworked builder profile messaging | Shows working style and strengths |
| `src/components/sections/ProjectsSection.tsx` | Content | Reworked selected project cards | Shows relevant work more clearly |
| `src/components/ProjectCard.tsx` | Function / Design | Added status, stack, narrative, optional visual handling | Makes cards more reusable and informative |
| `src/components/MarkdownCV.tsx` | Function / Content | Updated CV panel styling and download filename | Improves CV presentation |
| `src/components/sections/CVSection.tsx` | Content / Layout | Updated section heading and layout width | Keeps the CV section consistent with the new design |
| `src/components/sections/ContactSection.tsx` | Content / Layout | Updated contact layout and GitHub link | Makes follow/contact options easier to scan |
| `src/components/sections/Footer.tsx` | Content | Updated footer to refer to Dan by first name | Keeps visible naming consistent |
| `*.test.tsx`, `src/app/theme.test.ts`, `jest.setup.ts`, `jest.config.js` | Verification | Updated tests and test setup for new copy/theme behavior | Keeps the implementation covered by checks |

## Verification

Latest local checks:

```powershell
npm test -- --runInBand
npm run lint
npm run build
```

Current result:

- 12 Jest test suites passed.
- 24 tests passed.
- ESLint passed.
- Next.js production build passed.
- Browser review checked desktop, mobile, theme toggle behavior, cursor rendering, and mobile overflow.

## Local Review

Install dependencies:

```powershell
npm ci
```

Run the local dev server:

```powershell
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open:

```text
http://127.0.0.1:3000/
```

## Deployment

The repository deploys through GitHub Actions to GitHub Pages:

1. Push to `main`.
2. GitHub Actions installs dependencies with npm.
3. Next.js builds the static site.
4. The generated `out/` directory is published to GitHub Pages.

No further push should happen until Dan has reviewed these local changes.
