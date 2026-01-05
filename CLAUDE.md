---
description: Use Bun as the runtime/package manager for this Next.js app.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## Project setup (Next.js + Bun)

- Framework: Next.js (App Router) with Bun runtime/package manager.
- Use `bunx create-next-app@latest .` (already applied) or in a subdir if needed.
- Package manager/runtime: Bun only (no npm/yarn/pnpm).
- Scripts: `bun dev`, `bun run lint`, `bun run build`, `bun start` (adjust to Next defaults).
- Env: manage `.env.local`; commit `.env.example` only.
- Supabase: add client init helper and `.env.example` for anon/service keys in a dedicated setup branch; keep keys out of repo.
- Tests: prefer `bun test` (or `next test` when configured); avoid Jest/Vitest unless required.

## Branching rules

- Main branches: `main` (stable), optional `develop` (integration).
- Work in feature branches named by scope:
  - Setup: `feature/setup`
  - Header UI: `feature/ui-header`
  - Book list UI: `feature/ui-book-list`
  - State/model logic: `feature/state-model`
  - Theme toggle: `feature/theme-toggle`
  - Supabase bootstrap: `feature/supabase-init`
  - Auth/DB sync later: `feature/auth`, `feature/db-sync`
- Prefer feature (functional) scopes over tiny component-only branches; one feature per PR, keep changesets focused.
- Never commit secrets; add `.env.example` updates with new config keys.

## Testing

- Use `bun test` when tests are added (or `next test` if configured).
- Keep tests colocated with components/pages where practical.

## Frontend (project-specific notes)

- App Router only; avoid `pages/`.
- Styling: Tailwind CSS (v4) preferred; co-locate component styles if needed.
- Theming: dark/light toggle should rely on CSS variables or Tailwind color scheme.
- UI scope (MVP):
  - Header 3-row: row1 logo + search + theme toggle; row2 stats (read / in-progress / completion%); row3 progress bar.
  - Book list: status states `to-read` (empty checkbox), `in-progress` (dash), `done` (check).
- State: start with client-side state/hooks; later hydrate from Supabase.

## Supabase (planned)

- Keep keys in `.env.local`; commit `.env.example`.
- Provide a Supabase client factory; avoid inlining keys.
- Add data fetching in dedicated feature branches; don't mix with UI-only branches.
