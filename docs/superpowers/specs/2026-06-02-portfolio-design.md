# Portfolio Design Spec

## Purpose

Build a professional landing-page portfolio for Daiki, also shown as Adrian Melgar for recruiter clarity. The page should present Adrian as a Junior Full-Stack Developer and provide a polished foundation before real projects are available.

The portfolio should feel dark, minimal, animated, and developer-focused, inspired by the reference portfolio at `thegr8binil.me` without copying it directly.

## Audience

- Recruiters evaluating junior full-stack candidates.
- Clients or collaborators looking for a clear contact path.
- Visitors from GitHub or LinkedIn who need a quick overview of skills and availability.

## Positioning

- Compact brand name: `Daiki`.
- Full name: `Adrian Melgar`.
- Primary title: `Junior Full-Stack Developer`.
- Location label: `Based in Peru`.
- Availability label: `Available remotely`.
- Tone: clean, confident, straightforward.

## Contact And Links

- Email: `adrian.melgar.t@gmail.com`.
- GitHub: `https://github.com/DaikiMT`.
- LinkedIn: `https://www.linkedin.com/in/adrianmelgart/`.
- Primary CTA: email contact via `mailto:adrian.melgar.t@gmail.com`.
- Secondary links: GitHub and LinkedIn.

## Visual Direction

- Near-black background.
- Large cream or white headline typography.
- Accent colors: purple, cyan, and warm yellow.
- Rounded pill navigation and CTA buttons.
- Section dividers with thin low-contrast borders.
- Floating labels around the hero section.
- Smooth scrolling and subtle motion.
- Hover effects for buttons, cards, social links, and project rows.
- Responsive layout for desktop and mobile.

## Page Structure

### Home

Hero section with oversized text:

```text
JUNIOR FULL-STACK DEVELOPER
```

Supporting labels:

- `// Based in Peru`.
- `Available remotely`.
- `Building web apps with Vue, Python, FastAPI, and databases`.

The hero should include a primary contact CTA and secondary social links.

### About

Short recruiter-friendly introduction for Adrian Melgar. It should explain that he is a junior full-stack developer building practical web applications and growing through hands-on projects.

The copy should avoid overclaiming senior-level expertise.

### What I Do

Four service-style cards:

- `Frontend Interfaces`.
- `Backend APIs`.
- `Databases`.
- `Deployment & Tools`.

Each card should include a short sentence that describes what Adrian can build or support.

### Projects

Show 2-3 polished placeholder or future case-study rows. These must be labeled honestly as `Coming Soon` or `In Progress`.

Initial project rows:

- `Portfolio Website` - `In Progress`.
- `Full-Stack Dashboard` - `Coming Soon`.
- `Automation Tool` - `Coming Soon`.

The section should look complete without pretending finished projects exist.

### Tech Stack

Use a curated but honest presentation. Frame this as the stack Adrian is currently building with.

Stack items:

- Vue.
- Vite+.
- JavaScript.
- TypeScript.
- Python.
- FastAPI.
- PostgreSQL.
- Oracle DB.
- Git.
- GitHub.
- AWS.

### Contact/Footer

Large branded footer using `Daiki`. Include:

- Email CTA.
- GitHub link.
- LinkedIn link.
- Compact navigation links.
- Location/availability note.

## Implementation Shape

- Project root: `/home/daiki/dev/portfolio`.
- Toolchain: Vite+ using `vp`.
- Framework: Vue + TypeScript.
- UI: shadcn-style Vue components where practical.
- Styling: shadcn/Tailwind theme tokens plus custom layout and typography for the reference-inspired visual identity.
- Data source for v1: local TypeScript portfolio data file.
- Backend for v1: none.
- Database for v1: none.
- Contact form for v1: none.
- Contact behavior: use `mailto:`.

## Component Plan

- `Navbar`.
- `HeroSection`.
- `AboutSection`.
- `WhatIDoSection`.
- `ProjectsSection`.
- `TechStackSection`.
- `FooterSection`.
- Reusable shadcn-based primitives such as `Button`, `Card`, and `Badge`.

## Data Model

Portfolio content should live in a local TypeScript data module so it can later be replaced by a database-backed API without rewriting the UI.

Suggested data groups:

- `profile`: name, brand, title, location, availability, summary.
- `links`: email, GitHub, LinkedIn.
- `services`: cards for the What I Do section.
- `projects`: placeholder project rows with status, year, type, summary, and technologies.
- `stack`: grouped tech stack labels.

## Future Database Path

The first version will not connect to a database. Later, the `projects` data can move from the local TypeScript file to an API/database source.

The UI should consume project objects through a simple shape so the source can change later with minimal component changes.

## Out Of Scope For V1

- Backend API.
- Database connection.
- Authentication.
- Admin panel.
- Contact form.
- Real project case studies.
- Blog.
- CMS.

## Success Criteria

- The page clearly presents Adrian Melgar / Daiki as a Junior Full-Stack Developer.
- The design feels dark, polished, modern, and reference-inspired.
- The page is honest about projects being in progress or coming soon.
- Contact paths are easy to find.
- The site works well on desktop and mobile.
- The content can be updated easily from local data.
- The project structure leaves a clear future path for database-backed projects.
