# Dan Cheeseman Portfolio

Live site: [https://danichese.github.io](https://danichese.github.io)

This repository contains Dan Cheeseman's personal portfolio site, built with Next.js and deployed through GitHub Pages.

The latest version repositions the site around DexRoboKnix and the Agent Desktop Environment (ADE): a native Windows workspace where AI agents can operate under human supervision, with visible permissions, live observability, and audit trails.

## Current Direction

The portfolio now presents Dan as a founder-builder working on trustworthy agent workspaces.

Core positioning:

> Building trustworthy desktops for AI agents, with humans in the loop.

The site is intended to feel calm, technical, and high-trust. It avoids hype, fake metrics, and novelty widgets. The main goal is to make ADE understandable in one pass:

- What Dan is building.
- Why ADE matters.
- What exists now.
- What is next.
- How to follow or contact him.

## Before And After

| Area | Before | After |
| :--- | :--- | :--- |
| Primary positioning | AI-assisted full stack developer portfolio | DexRoboKnix founder-builder profile focused on ADE |
| Flagship project | Portfolio migration and general project cards | Agent Desktop Environment as the lead proof of work |
| Project emphasis | Next.js migration, PSP-Lab, Security Service Decomposition | ADE, portfolio migration, PSP-Lab |
| Visual language | Dark cyber/tech portfolio with cyan and orange accents | Chaos Emeralds RGB with light surface by default and glass materials |
| Theme behavior | Static dark theme | Light, Dark, and System theme modes |
| Interaction layer | Standard cursor and hover states | Persistent liquid-glass cursor trail |
| Hero message | "AI-Assisted Full Stack Developer" | "Building trustworthy desktops for AI agents, with humans in the loop" |
| Build narrative | General AI tooling workflow | Supervised agent workspace, permission gates, observable state, audit trail |
| Mobile behavior | Existing responsive layout | Rechecked narrow viewport with no horizontal overflow |

## Key Decisions

### Keep The Existing Next App

The handover assets included a static React/Babel Liquid Glass prototype and partial design files. Rather than replacing the live app wholesale, this update keeps the existing Next.js structure and ports the strongest ideas into it.

Reasoning:

- Lower risk for the GitHub Pages deployment.
- Existing tests and components remain useful.
- Easier to review before pushing.
- ADE positioning can land now without a full redesign rewrite.

### Make ADE The Flagship

ADE is now the central project on the page. It has its own flagship section with:

- Trust, observability, and auditability pillars.
- A concise technical stack.
- A foundation-phase build ledger.
- A small interface preview that suggests the supervised desktop concept.

This replaces the previous emphasis on older project framing. Any DEXSPINE references were removed from the site source.

### Use Chaos Emeralds RGB As The Theme System

The new palette is built around three RGB accents:

- Red: action, warning, priority.
- Green: trust, approvals, progress.
- Blue: workspace, systems, observability.

The default mode is the light surface version. The navbar switch also supports:

- Light
- Dark
- System

System mode reads the visitor's `prefers-color-scheme` setting and resolves to light or dark automatically.

### Use Liquid Glass, But Keep It Useful

The visual system uses glass panels, subtle borders, backdrop blur, and refractive highlights. The aim is to suggest a serious agent workspace rather than a decorative landing page.

Cards are kept tight and rectangular. The layout avoids nested card stacks and oversized marketing sections.

### Add A Persistent Liquid-Glass Cursor Trail

A client component now renders a cursor lens and short-lived trail points that follow pointer movement. It is disabled for coarse pointer devices and respects reduced-motion preferences by hiding the trail.

This makes the site feel more distinctive without blocking normal navigation.

### Remove Fragile Page Fade

The previous route template used a page-level Framer Motion fade. During static or pre-hydration rendering this could leave the page visually blank. The template now returns children directly so the portfolio content is visible immediately.

## What Changed

Major content and UI updates:

- Rewrote the hero around Dan, DexRoboKnix, and ADE.
- Added the ADE flagship section.
- Reworked the builder profile section.
- Replaced project cards so ADE leads the selected work.
- Updated contact and footer copy.
- Added theme provider, theme toggle, and persisted theme mode.
- Added the liquid-glass cursor component.
- Rebuilt global CSS around Chaos Emeralds RGB tokens.
- Added viewport metadata for mobile behavior.
- Updated tests to match the new content and theme expectations.

## Important Files

| File | Purpose |
| :--- | :--- |
| `src/app/layout.tsx` | Metadata, viewport, providers, navbar, cursor |
| `src/app/globals.css` | Chaos Emeralds theme tokens, glass styling, cursor styling, responsive guards |
| `src/app/template.tsx` | Simplified route template so content renders immediately |
| `src/components/ThemeProvider.tsx` | Light, dark, and system mode state |
| `src/components/ThemeToggle.tsx` | Navbar theme switch |
| `src/components/LiquidGlassCursor.tsx` | Persistent liquid-glass cursor trail |
| `src/components/sections/ADESection.tsx` | Flagship ADE section |
| `src/components/sections/HeroSection.tsx` | New ADE-focused hero |
| `src/components/sections/ProjectsSection.tsx` | Selected work with ADE first |
| `src/components/ProjectCard.tsx` | Updated project card with ADE visual support |

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

## Verification

The update was checked with:

```powershell
npm test -- --runInBand
npm run lint
npm run build
```

Latest verification result:

- 12 test suites passed.
- 24 tests passed.
- ESLint passed.
- Production build passed.

The local preview was also checked in browser automation for:

- ADE content present.
- Light, Dark, and System theme controls present.
- Theme switching updates the document theme state.
- Liquid cursor lens and trail render on pointer movement.
- Mobile viewport has no horizontal overflow at 390px.

## Deployment

The site is designed to deploy as a static GitHub Pages build from the Next.js app.

Before pushing, review locally in Chrome or another browser, then run:

```powershell
npm test -- --runInBand
npm run lint
npm run build
```

## Notes

- The public ADE repository URL still needs to be confirmed. Current links point to Dan's GitHub profile where a specific ADE repo is not yet wired in.
- The copy avoids claiming a public release, user numbers, revenue, or enterprise adoption.
- The design is intentionally a focused refresh, not a full port of the Claude static prototype.
