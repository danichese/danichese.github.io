# Implementation Plan: Portfolio Migration

## Phase 1: Foundation & Scaffolding [checkpoint: 65adf80]
- [x] Task: Initialize Next.js Project (be61a98)
    - [ ] Run `npx create-next-app@latest` with TS, Tailwind, and App Router.
    - [ ] Configure `next.config.js` for static export (GitHub Pages compatibility).
- [x] Task: Asset Migration (a92f62e)
    - [ ] Move existing assets from `danichese.github.io/assets` to `public/assets`.
- [x] Task: Global Styles & Theme (5d4b08d)
    - [ ] Configure Tailwind with custom colors for "Futuristic/Human" aesthetic.
- [ ] Task: Conductor - User Manual Verification 'Foundation & Scaffolding' (Protocol in workflow.md)

## Phase 2: Core Layout & Navigation
- [x] Task: Implement Responsive Navigation (9dd9e26)
    - [ ] Create Desktop and Mobile (Hamburger) nav components.
- [x] Task: Implement Hero Section (9ca80f5)
    - [ ] Update messaging to "AI Full Stack Developer."
- [ ] Task: Conductor - User Manual Verification 'Core Layout & Navigation' (Protocol in workflow.md)

## Phase 3: Project Showcase & Content
- [ ] Task: Hero Project Integration
    - [ ] Implement cards/sections for `PSP-Lab` and `Security-Service-Decomposition`.
    - [ ] Add narrative sections explaining the AI-assisted workflow for these projects.
- [ ] Task: Markdown CV Implementation
    - [ ] Create a Markdown parser/component to render the new CV.
    - [ ] Implement a download link for the generated CV.
- [ ] Task: Conductor - User Manual Verification 'Project Showcase & Content' (Protocol in workflow.md)

## Phase 4: Final Polish & Deployment
- [ ] Task: SEO & Metadata Optimization.
- [ ] Task: Final Responsive Audit.
- [ ] Task: Deploy to GitHub Pages.
- [ ] Task: Conductor - User Manual Verification 'Final Polish & Deployment' (Protocol in workflow.md)
