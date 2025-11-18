# shoe-box

[![Live](https://img.shields.io/badge/live-demo-1d4ed8)](https://radicazz.github.io/shoe-box/)
[![Node](https://img.shields.io/badge/node-20.19.5-026e00)](./.nvmrc)
[![CI](https://github.com/radicazz/shoe-box/actions/workflows/ci.yml/badge.svg)](https://github.com/radicazz/shoe-box/actions/workflows/ci.yml)

Minimal, theme‑aware personal landing page powered by Astro.

## Stack

- Astro + TypeScript
- Tailwind CSS + custom theme tokens
- Static export, no backend required

## Quickstart

```bash
git clone https://github.com/radicazz/shoe-box.git
cd shoe-box

nvm install   # once, uses .nvmrc (Node 20.19.5)
nvm use
npm install
npm run dev   # http://localhost:4321
```

## Key files

- `src/pages/index.astro` – home page wiring
- `src/layouts/Base.astro` – global shell, theme and background
- `src/components/ProfileSection.astro` – profile window and content
- `public/profile.json` – profile copy + metadata
- `docs/` – stack, features, and implementation notes

## License

MIT – see `LICENSE`.
