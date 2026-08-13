<div align="center">

<!-- TODO: Add a hero banner image here, ~1200x400px, dark background matching site theme (#0b1220), teal accent (#4FD1C5). Save as public/banner.png and reference below. -->
<!-- <img src="./public/banner.png" alt="Chaya Kiran — Developer Portfolio banner" width="100%" /> -->

# 🌐 Chaya Kiran — Developer Portfolio

**A modern, animated personal portfolio built with React, Vite, and Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/Live_Demo-4FD1C5?style=for-the-badge&logo=vercel&logoColor=0b1220)](https://chaya-kiran-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Last Commit](https://img.shields.io/github/last-commit/chayakiranch/ChayaKiran_portfolio?style=for-the-badge&color=4FD1C5&labelColor=0b1220)](https://github.com/chayakiranch/ChayaKiran_portfolio/commits/main)

</div>

<br/>

## ✨ Overview

This is the source code for my personal developer portfolio — a fast, fully responsive single-page application showcasing my experience, projects, education, skills, and certifications. It's built as a static React SPA (no backend) and deployed on Vercel.

The site features an animated node-network background, glassmorphism cards with hover-glow effects, and smooth page transitions throughout, all built with a consistent design system defined in Tailwind and CSS custom properties. Every piece of content — projects, experience, certifications — lives in plain data files, so the site can grow without touching component code.

<br/>

## 💡 Why This Portfolio?

- **Animated node-network background** — a custom canvas/CSS effect running behind every page, not a static image
- **Glassmorphism UI** — translucent, blurred cards with hover-glow throughout
- **Fully data-driven** — projects, experience, education, skills, and certifications are all plain JS objects in `src/data/`, so new content never requires touching a component
- **Dedicated detail pages** — Experience and Projects each get their own routed detail view instead of cramming everything onto one page
- **Certificate lightbox viewer** — zoom + download on the Certifications gallery, not just static thumbnails
- **Built for recruiters** — resume inline preview + download, sticky in-page navigation on long content, scroll-restoration between routes

<br/>

## 🖼️ Screenshots

<!-- TODO: Replace with real screenshots. Suggested size: 1280x800px (or 2x for retina), saved under public/screenshots/. Capture via browser devtools "Capture full size screenshot" on each route. -->

| Home | About |
|---|---|
| ![Home](./public/screenshots/home.png) | ![About](./public/screenshots/about.png) |

| Projects | Resume |
|---|---|
| ![Projects](./public/screenshots/projects.png) | ![Resume](./public/screenshots/resume.png) |

| Contact |
|---|
| ![Contact](./public/screenshots/contact.png) |

<br/>

## 🎬 Demo

<!-- TODO: Record a 15–30s screen capture (ScreenToGif, Kap, or Loom → export as GIF) showing navigation, smooth scrolling, hover effects, and the resume preview. Keep under ~8MB for GitHub rendering. Save as public/demo.gif. -->

![Demo](./public/demo.gif)

<br/>

## 🧩 Features

**UI & Design**
- Animated node-network background with glassmorphism cards and hover-glow effects
- Smooth page transitions and scroll-restoration via React Router
- Fully responsive across desktop, tablet, and mobile

**Navigation**
- Client-side routing with dedicated detail pages for Experience and Projects
- Sticky "On This Page" table of contents on long content

**Projects & Experience**
- Project grid with detail pages for tech stack, highlights, and links
- Experience timeline with per-role detail pages

**Certifications**
- Grouped certificate gallery with a full-size lightbox viewer (zoom + download)

**Resume**
- Inline preview + download, with an animated network-pattern card background

**Architecture & Performance**
- Reusable, data-driven architecture — content lives in `src/data/*.js`
- Static SPA (no backend), deployed on Vercel

<br/>

## 🚀 Live Demo

**[chaya-kiran-portfolio.vercel.app →](https://chaya-kiran-portfolio.vercel.app/)**

<br/>

## 📌 Featured Projects

**Online Book Store** — Full-stack e-commerce platform with RESTful APIs, MongoDB, and JWT-based auth, focused on load efficiency and responsiveness.
`React.js · Node.js · Express.js · MongoDB`

**Online Blogging System** — Full-featured blogging platform with user registration, post creation, and commenting, built on Django with an MVC architecture.
`Django · PostgreSQL · Bootstrap`

**AWS Cloud Billing & Resource Dashboard** — Full-stack cost-management platform connecting to a user's AWS account, turning Cost Explorer, CloudWatch, and resource-inventory data into an interactive dashboard with forecasting and automated savings recommendations.
`React · Node.js · Express · AWS SDK v3 · Chart.js` · [Repo →](https://github.com/chayakiranch/aws-billing-dashboard)

<br/>

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

<br/>

## 📁 Project Structure

```text
src/
├── components/           # Reusable UI: Navbar, Footer, Hero, SkillCard, NetworkBackground...
│   └── certifications/   # Components scoped to the Certifications page
├── data/                 # All content — profile, projects, experience, education, skills, certifications
├── pages/                # One component per route (see Routes below)
├── App.jsx                # Route definitions + shared layout
├── main.jsx                # Entry point
└── index.css               # Design tokens (colors, fonts) + global styles
```

<br/>

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/experience` | Experience list |
| `/experience/:id` | Experience detail |
| `/education` | Education |
| `/projects` | Projects list |
| `/projects/:id` | Project detail |
| `/certifications` | Certifications & Achievements |
| `/resume` | Resume |
| `/contact` | Contact |

<br/>

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/chayakiranch/ChayaKiran_portfolio.git
cd ChayaKiran_portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

<br/>

## ✏️ Updating Content

All personal content is centralized in `src/data/`, so the site can be updated without touching any component:

| File | Controls |
|---|---|
| `profileData.js` | Name, role, contact info, resume file, social links |
| `experienceData.js` | Work experience entries and their detail-page content |
| `educationData.js` | Education history |
| `projectsData.js` | Project cards and their detail-page content |
| `skillsData.js` | Skills grid categories |
| `certificationsData.js` | Certification cards, categories, and verification links |

To add a new project, certification, or experience entry, add a new object to the relevant data file — the UI renders it automatically.

<br/>

## ⚡ Performance Highlights

- **Static SPA, no backend** — near-instant loads, hosted entirely on Vercel's edge network
- **Data-driven rendering** — new content ships as data changes, not new components
- **Optimized assets** — favicons and images served at appropriately sized variants
- **Responsive by default** — Tailwind's utility-first approach keeps layout consistent across breakpoints
- **Smooth, GPU-friendly animation** — Framer Motion transitions and a lightweight canvas/CSS network background

<br/>

## 📦 Deployment

This project is deployed on **Vercel** with SPA routing configured via `vercel.json`, so client-side routes resolve correctly on direct load and refresh.

<br/>

## 🔭 Future Improvements

- [ ] Theme switcher (light/dark)
- [ ] Project filtering by tech stack
- [ ] Visitor analytics
- [ ] Search across projects and experience
- [ ] Internationalization
- [ ] Further performance optimizations (image lazy-loading, route-based code-splitting)

<br/>

## 📬 Contact

**Chintakula Chaya Kiran**

Feel free to connect with me for collaboration, opportunities, or feedback.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chaya-kiran-chintakula/)
[![Email](https://img.shields.io/badge/Email-4FD1C5?style=flat-square&logo=gmail&logoColor=0b1220)](mailto:chayakiranch@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-0b1220?style=flat-square&logo=vercel&logoColor=4FD1C5)](https://chaya-kiran-portfolio.vercel.app/)

<br/>

<div align="center">

⭐ If you found this project's structure useful, consider giving it a star.

</div>
