<div align="center">

# 🚀 Henry Zeng - Portfolio

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-93CF2B?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

**A modern, animated portfolio website showcasing web development projects and skills**

[🌐 Live Site](https://hyzeng-portfolio.vercel.app) • [Report Bug](https://github.com/h-yzeng/hyzeng-portfolio/issues) • [Request Feature](https://github.com/h-yzeng/hyzeng-portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

A production-ready portfolio website built with **SvelteKit 5**, **TailwindCSS v4**, and **GSAP** animations. This project showcases a modern approach to building performant, accessible, and visually stunning web applications.

### ✨ Highlights

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌓 **Dark/Light Mode** - Theme toggle with system preference detection
- ♿ **Accessible** - WCAG compliant with semantic HTML
- ⚡ **Fast Performance** - Optimized with Vite and SvelteKit
- 🎭 **Smooth Animations** - GSAP-powered scroll effects and transitions

---

## 🚀 Features

### 🎪 Sections

- **Hero** - Animated introduction with gradient background
- **About** - Personal bio with floating tech icons
- **Skills** - Interactive skill bars with proficiency levels
- **Projects** - Portfolio showcase with hover effects
- **Experience** - Timeline layout for work history and education
- **Contact** - Form with validation and social links

### 🎨 Design Features

- Custom gradient backgrounds
- Glassmorphism effects
- Smooth scroll indicators
- Animated section reveals
- Hover interactions
- Responsive navigation

### 🔧 Technical Features

- TypeScript for type safety
- Component-based architecture
- SEO optimized
- CSS custom properties for theming
- Reduced motion support
- Google Fonts integration

---

## 🛠️ Tech Stack

### Core

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

### Styling

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Animation

![GSAP](https://img.shields.io/badge/GSAP-93CF2B?style=for-the-badge&logo=greensock&logoColor=white)

### Tools & Platforms

![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** v18+ and npm
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/h-yzeng/hyzeng-portfolio.git
cd hyzeng-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:5174](http://localhost:5174)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run Svelte type checking
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 📁 Project Structure

```
hyzeng-portfolio/
├── src/
│   ├── lib/
│   │   ├── animations.ts              # GSAP animation utilities
│   │   ├── components/
│   │   │   ├── sections/              # Page sections
│   │   │   │   ├── Hero.svelte
│   │   │   │   ├── About.svelte
│   │   │   │   ├── Skills.svelte
│   │   │   │   ├── Projects.svelte
│   │   │   │   ├── Experience.svelte
│   │   │   │   └── Contact.svelte
│   │   │   ├── layout/                # Layout components
│   │   │   │   ├── Header.svelte
│   │   │   │   └── Footer.svelte
│   │   │   └── ui/                    # Reusable UI components
│   │   │       ├── ThemeToggle.svelte
│   │   │       └── ProjectCard.svelte
│   │   └── index.ts                   # Component exports
│   ├── routes/
│   │   ├── +layout.svelte             # Root layout
│   │   ├── +page.svelte               # Homepage
│   │   └── layout.css                 # Global styles & theme
│   └── app.html                       # HTML template
├── static/                            # Static assets
├── package.json
├── svelte.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Customization

### 1. **Personal Information**

Edit the content in each section component:

- `src/lib/components/sections/Hero.svelte` - Name, title, tagline
- `src/lib/components/sections/About.svelte` - Bio and tech stack
- `src/lib/components/sections/Skills.svelte` - Skills and proficiency levels
- `src/lib/components/sections/Projects.svelte` - Project portfolio
- `src/lib/components/sections/Experience.svelte` - Work history and education
- `src/lib/components/sections/Contact.svelte` - Contact information

### 2. **Project Images**

Add screenshots of your projects:

1. Save project images as `.jpg` or `.png` files
2. Place them in `static/images/projects/`
3. Update image paths in `src/lib/components/sections/Projects.svelte`
4. Recommended size: 1200x800px for best quality
5. Example filenames: `campus-night-market.jpg`, `moodboard.jpg`, `task-manager.jpg`

### 3. **Resume Setup**

Add your resume PDF to enable the download button:

1. Save your resume as `Henry_Zeng_Resume.pdf`
2. Place it in the `static/resume/` directory
3. Keep file size under 2MB for optimal loading

### 4. **Contact Form Setup**

Connect the contact form to FormSpree:

1. Sign up at [https://formspree.io/](https://formspree.io/) (free tier available)
2. Create a new form and get your form ID
3. Open `src/lib/components/sections/Contact.svelte`
4. Replace `YOUR_FORM_ID` with your actual FormSpree form ID
5. Test the form to ensure emails are being sent

### 5. **Google Analytics Setup**

Track your portfolio visitors:

1. Create a Google Analytics 4 property at [https://analytics.google.com/](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `src/app.html`
4. Replace both instances of `GA_MEASUREMENT_ID` with your actual Measurement ID

### 6. **SEO Image Setup**

Create an Open Graph image for social media sharing:

1. Design a 1200x630px image showcasing your brand
2. Save it as `og-image.jpg` in the `static/` directory
3. This image appears when your portfolio is shared on social media

### 7. **Theme Colors**

Modify CSS custom properties in `src/routes/layout.css`:

```css
@theme {
  --color-primary-500: oklch(0.62 0.23 270); /* Primary brand color */
  --color-accent-500: oklch(0.75 0.19 195); /* Accent color */
  /* ... more colors */
}
```

### 8. **Fonts**

Change Google Fonts in `src/routes/+layout.svelte`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font" />
```

### 9. **Animations**

Adjust animation settings in `src/lib/animations.ts`:

```typescript
export const heroTextReveal = (element: HTMLElement) => {
  // Customize animation parameters
  gsap.to(element, { duration: 1.5, opacity: 1, ... });
};
```

---

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Install adapter: `npm i -D @sveltejs/adapter-netlify`
2. Update `svelte.config.js`:
   ```js
   import adapter from '@sveltejs/adapter-netlify';
   ```
3. Deploy to Netlify

### Static Build

```bash
npm run build
```

The `build` folder contains your static site ready for deployment.

---

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 100KB (gzipped)

### Optimizations

- ✅ Code splitting with SvelteKit
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Minified CSS and JS
- ✅ Reduced motion support

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Henry Zeng**

[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thyzeng@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/henry-zeng)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/h-yzeng)

---

<div align="center">

**[⬆ Back to Top](#-henry-zeng---portfolio)**

Made with ❤️ using SvelteKit & TailwindCSS

</div>
