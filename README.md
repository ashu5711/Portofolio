# Ashutosh Shankar — AI/ML Portfolio

A professional portfolio website built with React and Vite, showcasing 15+ years of experience in Data Science, AI/ML, and GenAI engineering.

## Live Sections

- **Hero** — Title, summary, and call-to-action
- **About** — Core expertise highlights and personal interests
- **Experience** — Professional timeline (JCPenney, Blue Yonder, Capgemini)
- **Education** — Degrees and 20+ certifications
- **Skills** — NLP/GenAI, ML, Backend, Databases, Frontend
- **Projects** — Featured AI/ML projects (Sty-Lyst, Propensity Models, RASA Chatbot)
- **Contact** — Contact form and direct contact info

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Custom CSS (glass morphism, dark theme) |
| Icons | Lucide React |
| Linting | ESLint 10 |

No external CSS framework — pure custom CSS with CSS variables.

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
Portfolio/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles & CSS variables
│   └── components/
│       ├── Navbar.jsx/css    # Sticky nav with mobile hamburger
│       ├── Hero.jsx/css      # Full-viewport hero section
│       ├── About.jsx/css     # Expertise cards & interests
│       ├── Experience.jsx/css# Timeline of work history
│       ├── Education.jsx/css # Degrees & certifications
│       ├── Skills.jsx/css    # Skill categories
│       ├── Projects.jsx/css  # Project showcase
│       └── Contact.jsx/css   # Contact form
├── public/
│   └── favicon.svg
└── index.html
```

## Design System

**Color palette (CSS variables):**

| Variable | Value | Use |
|----------|-------|-----|
| `--bg-primary` | `#0a0f1c` | Page background |
| `--bg-secondary` | `#131b2f` | Card backgrounds |
| `--accent` | `#8b5cf6` | Primary accent (purple) |
| `--accent-secondary` | `#06b6d4` | Secondary accent (cyan) |
| `--text-primary` | `#f8fafc` | Body text |
| `--text-secondary` | `#94a3b8` | Muted text |

Key effects: glass morphism (backdrop blur), gradient text headings, animated glow orbs, smooth scroll.

## Responsive Breakpoints

- `480px` — small mobile
- `1024px` — tablet / desktop transition

## Deployment

This is a fully static site. After `npm run build`, deploy the `dist/` folder to any static host:

- **Vercel:** `vercel --prod`
- **Netlify:** drag-and-drop `dist/` or connect the repo
- **GitHub Pages:** push `dist/` to the `gh-pages` branch
- **AWS S3:** sync `dist/` to an S3 bucket with static website hosting enabled

No environment variables are required.

## Contact

- **Email:** ashutosh.shankar.a@gmail.com
- **GitHub:** [ashu5711](https://github.com/ashu5711)
- **Location:** Bangalore, India — 560037
