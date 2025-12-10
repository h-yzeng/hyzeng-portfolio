<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<!--
  ================================================
  HENRY ZENG - PORTFOLIO WEBSITE
  ================================================
  
  This is the main page of your portfolio. Each section
  is a separate component that can be customized.
  
  CUSTOMIZATION GUIDE:
  
  1. HERO SECTION (Hero.svelte)
     - Update name, title, and tagline
     - Modify social links
  
  2. ABOUT SECTION (About.svelte)
     - Replace placeholder bio text with your story
     - Update tech icons
  
  3. SKILLS SECTION (Skills.svelte)
     - Modify skill categories and proficiency levels
     - Add/remove skills as needed
  
  4. PROJECTS SECTION (Projects.svelte + ProjectCard.svelte)
     - Update project details (name, description, tech stack)
     - Add project screenshots
     - Add live demo links
  
  5. EXPERIENCE SECTION (Experience.svelte)
     - Add your work experience
     - Add your education history
  
  6. CONTACT SECTION (Contact.svelte)
     - Update contact info
     - Connect form to your preferred service
  
  THEMING:
  - Colors are defined in layout.css as CSS custom properties
  - Dark/light mode toggle is handled by ThemeToggle.svelte
  
  ANIMATIONS:
  - GSAP animations are defined in $lib/animations.ts
  - Each component handles its own animations
  - All animations respect prefers-reduced-motion
  
  ================================================
-->

<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
