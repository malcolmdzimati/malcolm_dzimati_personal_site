[![CodeQL Advanced](https://github.com/malcolmdzimati/malcolm_dzimati_personal_site/actions/workflows/codeql.yml/badge.svg)](https://github.com/malcolmdzimati/malcolm_dzimati_personal_site/actions/workflows/codeql.yml)
[![Deploy personal website](https://github.com/malcolmdzimati/malcolm_dzimati_personal_site/actions/workflows/deploy.yml/badge.svg)](https://github.com/malcolmdzimati/malcolm_dzimati_personal_site/actions/workflows/deploy.yml)

# Malcolm Dzimati - Personal Website

Welcome to the source code for my personal website!
This project is built with **Next.js** and serves as a platform to showcase my professional profile, projects, and work as a software engineer.

🔗 **Live site:** [malcolmdzimati.com](https://malcolmdzimati.com/)

## ✨ Features

- Built with [Next.js](https://nextjs.org/) (App Router) and exported as a static site
- Animated, responsive UI with [Framer Motion](https://www.framer.com/motion/) and [Tailwind CSS](https://tailwindcss.com/)
- Component library powered by [HeroUI](https://www.heroui.com/)
- Pages for Home, About, Portfolio (Projects), Digital CV, and Contact
- CI/CD pipeline via GitHub Actions, with CodeQL static analysis on every push
- Deployed automatically to GitHub Pages behind a custom domain (malcolmdzimati.com)
- Content-driven project cards sourced from a simple JSON data file for easy updates

## 🧱 Tech Stack

- **Framework:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS, tailwind-variants
- **UI Components:** HeroUI (button, input, navbar, listbox, switch, etc.)
- **Animation:** Framer Motion, Lenis (smooth scrolling)
- **Tooling:** ESLint, Prettier, pnpm

## 📁 Project Structure

```
app/            # Next.js App Router pages (home, about, projects, cv, contact)
components/     # Reusable UI components
config/         # Site metadata, fonts, and nav config
data/           # Project data (data/projectData.json)
public/         # Static assets (CV, images)
styles/         # Global styles
```

## 🚀 Getting Started

This project uses [pnpm](https://pnpm.io/) as its package manager.

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # build the static export
pnpm start     # serve the production build
pnpm lint      # lint the codebase
```

## 📦 Deployment

Pushes to the main branch trigger a GitHub Actions workflow that builds the static export and deploys it to GitHub Pages.
