# Souzana Hamza — Portfolio

Personal portfolio site for **Souzana Hamza**, AI Engineer & Data Scientist. A single-page site with experience, education, projects, certifications, skills, and contact sections, with light/dark theme support.

**Live site:** [souzana-hamza.vercel.app](https://souzana-hamza.vercel.app)

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [React Router](https://reactrouter.com/) for routing
- [TanStack Query](https://tanstack.com/query), [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (npm included)

## Local development

```sh
git clone <YOUR_GIT_URL>
cd souzana-website
npm install
npm run dev
```

The dev server runs at [http://localhost:8080](http://localhost:8080) (see `vite.config.ts`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── components/       # Page sections (Hero, Experience, Projects, etc.)
│   └── ui/           # shadcn/ui components
├── pages/            # Route pages (Index, NotFound)
├── providers/        # ThemeProvider (next-themes)
├── hooks/            # Shared hooks
├── lib/              # Utilities (e.g. cn)
└── assets/           # Images and static assets
```

Content for each section lives in the corresponding component under `src/components/`. Update those files to change copy, links, or portfolio items.

## Deployment

Build the static site:

```sh
npm run build
```

Deploy the `dist/` folder to any static host (e.g. [Vercel](https://vercel.com/), Netlify, GitHub Pages). The project is configured for Vercel in production metadata (`index.html` Open Graph URLs).

## License

Private portfolio project. All rights reserved unless otherwise noted.
