# Portfolio Refresh Plan - 2026-05-19

## Goal

Refresh the portfolio so it works as a hiring-manager-friendly case study while keeping the project detail high-level and easy for non-technical readers to follow.

The refresh should show:

- A modern frontend stack.
- A structured planning process.
- Clear design decisions.
- Evidence of implementation and verification.
- A portfolio voice that refers to Dan by first name.

## Inputs Reviewed

| Input | Use |
| :--- | :--- |
| `Initial Spec.txt` | Original repositioning brief and CV requirement |
| `conductor/product.md` | Audience and portfolio goals |
| `conductor/tech-stack.md` | Frameworks, libraries, tools, and deployment target |
| `conductor/archive/migrate_nextjs_20260125/` | Migration spec and phased plan |
| `conductor/archive/refactor_docs_polish_20260125/` | Refactor, documentation, polish, and verification plan |
| `Project Artefacts/` | CVs, profile image, project images, and source assets |
| `Assets/Project detail files/` | Later profile handoff, structured content, and visual direction |
| `Assets/Claude Design FIles/` | Static prototype and Liquid Glass design references |

## Decisions

### Keep The Existing Next.js App

Use the working Next.js codebase as the production foundation instead of replacing it with a static prototype.

Reason:

- Lower deployment risk.
- Existing tests remain useful.
- The code stays easier to review in VS Code.

### Use A Central Theme System

Implement Light, Dark, and System modes through CSS variables and a React theme provider.

Reason:

- Keeps design tokens centralised.
- Makes the UI more flexible.
- Demonstrates practical frontend state management.

### Translate Liquid Glass Into Production UI

Use the Claude prototype as visual inspiration, not as a direct replacement.

Reason:

- Keeps the design distinctive.
- Avoids over-decorating the interface.
- Preserves readability and responsive behavior.

### Keep README Audience-Focused

Write the README for hiring managers and non-technical readers.

Reason:

- The repository should explain capability, process, and decisions.
- Product or roadmap detail should stay high-level.

### Use "Dan" As The Display Name

Visible copy should refer to Dan by first name.

Reason:

- Matches the preferred personal brand.
- Keeps the tone more direct and approachable.

## Execution Checklist

- [x] Review existing README and identify over-scoped product language.
- [x] Rewrite README as a hiring-manager and layman-friendly case study.
- [x] Add traceability from planning artefacts to implementation.
- [x] Add tooling table based on artefacts and workflow.
- [x] Add design decision explanations in plain English.
- [x] Add artefact refactor decisions for hiring-manager and layman readability.
- [x] Add before/after table focused on implementation outcomes.
- [x] Add final change map covering design and function.
- [x] Update visible naming to use "Dan".
- [x] Update related tests for display-name changes.
- [x] Run the Jest test suite after local copy changes.

## Verification

Latest local commands run:

```powershell
npm test -- --runInBand
npm run lint
npm run build
```

Result:

- 12 test suites passed.
- 24 tests passed.
- ESLint passed.
- Next.js production build passed.

## Known Follow-Ups

- Decide whether to rename the PDF asset file currently named `Dan-Cheeseman-CV-INC-2024.pdf`.
- Review the local site in Chrome before pushing.
- Push only after Dan approves the final wording and visual direction.
