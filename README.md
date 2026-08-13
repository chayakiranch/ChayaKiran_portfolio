<div align="center">

# 🌐 Chaya Kiran — Developer Portfolio

**A modern, animated personal portfolio built with React, Vite, and Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/Live_Demo-4FD1C5?style=for-the-badge&logo=vercel&logoColor=0b1220)](https://chaya-kiran-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

<br/>

## ✨ Overview

This is the source code for my personal developer portfolio — a fast, fully responsive single-page application showcasing my experience, projects, education, skills, and certifications. It's built as a static React SPA (no backend) and deployed on Vercel.

The site features an animated node-network background, glassmorphism cards with hover-glow effects, and smooth page transitions throughout, all built with a consistent design system defined in Tailwind and CSS custom properties.

<br/>

## 🚀 Live Demo

**[chaya-kiran-portfolio.vercel.app →](https://chaya-kiran-portfolio.vercel.app/)**

<br/>

## 🧩 Features

- **Home** — animated hero, quick stats, skills grid, and featured experience/project highlights
- **About** — background summary and extracurricular activities
- **Experience** — timeline of internships with dedicated detail pages, including a sticky "On This Page" table of contents
- **Education** — academic history
- **Projects** — project grid with dedicated detail pages for tech stack, highlights, and links
- **Certifications & Achievements** — grouped certificate gallery with a full-size lightbox viewer (zoom + download)
- **Resume** — inline preview + download, with an animated network-pattern card background
- **Contact** — contact form
- Fully responsive across desktop, tablet, and mobile
- Client-side routing via React Router, with scroll-restoration on navigation
- Reusable data-driven architecture — content lives in `src/data/*.js`, so adding a project, certification, or experience entry never requires touching a component

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

## 📦 Deployment

This project is deployed on **Vercel** with SPA routing configured via `vercel.json`, so client-side routes resolve correctly on direct load and refresh.

<br/>

## 📬 Contact

**Chintakula Chaya Kiran**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chaya-kiran-chintakula/)
[![Email](https://img.shields.io/badge/Email-4FD1C5?style=flat-square&logo=gmail&logoColor=0b1220)](mailto:chayakiranch@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-0b1220?style=flat-square&logo=vercel&logoColor=4FD1C5)](https://chaya-kiran-portfolio.vercel.app/)

<br/>

<div align="center">

⭐ If you found this project's structure useful, consider giving it a star.

</div>
