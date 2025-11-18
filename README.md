# Minimalist Portfolio Website

A simple portfolio site built with Next.js + TypeScript and Tailwind CSS.

## Overview
This project is a minimal personal portfolio showcasing projects and skills. It includes a global layout, a home page, and a small UI component set (including a toast system).

## Features
- Dark / light theme toggle
- Reusable UI components in components/ui
- Toast notifications via a provider and hook
- Clean, minimal layout and responsive design

## Quick start

Prerequisites:
- Node.js 16+ and npm (or yarn)

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
# Open http://localhost:3000
```

Build for production:
```bash
npm run build
npm start
```

Notes:
- Add a .env file if the project requires environment variables.
- If using a package manager other than npm, replace commands accordingly.

## Where to edit
- Home page content: app/page.tsx
- Global layout & metadata: app/layout.tsx
- Global styles: app/globals.css
- UI components: components/ui
- Toast hook: hooks/use-toast.ts
- Helpers/utils: lib/utils.ts
- Next config: next.config.mjs

## Recommended additions
- Add CONTRIBUTING.md for contribution rules
- Add LICENSE if you want to specify reuse terms
- Include screenshots or demo link for better presentation

## Author
GitHub: [github.com/alfirda0us](https://github.com/alfirda0us)  
LinkedIn: [linkedin.com/in/alfirdaous](https://www.linkedin.com/in/alfirda0us)

## License
All projects in this repository are for educational and portfolio purposes.  