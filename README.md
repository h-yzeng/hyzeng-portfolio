<div align="center">

# Henry Zeng - Portfolio

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-93CF2B?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

Modern, animated portfolio showcasing web development projects and skills. Built with SvelteKit 5, TailwindCSS v4, and GSAP animations.

**[Live Demo](https://hzeng.tech)**

</div>

---

## Features

- **Modern Tech Stack** - SvelteKit 5 (Svelte 5 Runes), TypeScript, TailwindCSS v4
- **Smooth Animations** - GSAP ScrollTrigger effects and magnetic button interactions
- **Dark/Light Theme** - Persistent theme toggle with system preference detection
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Contact Form** - FormSpree integration for message submissions
- **Skills Showcase** - Filterable skill categories with proficiency levels
- **Project Gallery** - Featured projects with live demos and GitHub links

---

## Tech Stack

### Frontend

- SvelteKit 5 with Svelte 5 Runes
- TypeScript
- TailwindCSS v4 with custom design tokens
- GSAP 3 (ScrollTrigger, animations)

### Development

- Vite 7 build tool
- ESLint + Prettier
- Git version control

### Deployment

- Vercel (auto-deploy from GitHub)
- FormSpree for contact form

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/h-yzeng/hyzeng-portfolio.git
cd hyzeng-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5174](http://localhost:5174)

### Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_FORMSPREE_ID=your_formspree_id
PUBLIC_GA_MEASUREMENT_ID=your_google_analytics_id
```

**For Vercel deployment**, add these environment variables in your project settings.

### Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run check      # TypeScript type checking
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

---

## Project Structure

```
src/
├── lib/
│   ├── animations.ts              # GSAP utilities
│   ├── components/
│   │   ├── sections/              # Page sections
│   │   │   ├── Hero.svelte
│   │   │   ├── About.svelte
│   │   │   ├── Skills.svelte
│   │   │   ├── CurrentlyLearning.svelte
│   │   │   ├── Projects.svelte
│   │   │   ├── Education.svelte
│   │   │   └── Contact.svelte
│   │   ├── layout/                # Layout components
│   │   └── ui/                    # Reusable components
│   └── config/                    # Configuration files
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   └── layout.css                 # Global styles & theme
└── app.d.ts                       # TypeScript declarations
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in project settings:
   - `PUBLIC_FORMSPREE_ID` - FormSpree form ID for contact form
   - `PUBLIC_GA_MEASUREMENT_ID` - Google Analytics measurement ID (optional)
4. Deploy automatically

---

## Contact

**Henry Zeng**

[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thyzeng@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/henry-zeng)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/h-yzeng)

---

## License

MIT License - see [LICENSE](LICENSE) file for details.
