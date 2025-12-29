<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import './layout.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Analytics from '$lib/components/Analytics.svelte';

	let { children } = $props();
	let isLoading = $state(false);
	let showContent = $state(false);

	// Handle navigation loading state
	$effect(() => {
		isLoading = !!$navigating;
	});

	// Page load animation
	onMount(() => {
		setTimeout(() => {
			showContent = true;
		}, 100);
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Henry Zeng | Full-Stack Web Developer</title>
	<meta name="title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		name="description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>
	<meta name="author" content="Henry Zeng" />
	<meta
		name="keywords"
		content="Full-Stack Developer, Web Developer, React, TypeScript, SvelteKit, Next.js, Chicago, Software Engineer"
	/>
	<link rel="canonical" href="https://hyzeng-portfolio.vercel.app" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://hyzeng-portfolio.vercel.app" />
	<meta property="og:title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		property="og:description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>
	<meta property="og:image" content="https://hyzeng-portfolio.vercel.app/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:alt" content="Henry Zeng - Full-Stack Web Developer Portfolio" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://hyzeng-portfolio.vercel.app" />
	<meta property="twitter:title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		property="twitter:description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>
	<meta property="twitter:image" content="https://hyzeng-portfolio.vercel.app/og-image.jpg" />
	<meta property="twitter:image:alt" content="Henry Zeng - Full-Stack Web Developer Portfolio" />

	<!-- Structured Data (JSON-LD) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Henry Zeng",
			"url": "https://hyzeng-portfolio.vercel.app",
			"jobTitle": "Full-Stack Web Developer",
			"description": "Full-Stack Web Developer based in Chicago, Illinois, specializing in React, TypeScript, and modern web technologies.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Chicago",
				"addressRegion": "IL",
				"addressCountry": "US"
			},
			"sameAs": ["https://github.com/h-yzeng", "https://www.linkedin.com/in/henry-zeng-/"],
			"alumniOf": {
				"@type": "EducationalOrganization",
				"name": "Illinois Institute of Technology"
			},
			"knowsAbout": [
				"React",
				"TypeScript",
				"JavaScript",
				"SvelteKit",
				"Next.js",
				"TailwindCSS",
				"Full-Stack Development",
				"Web Development"
			],
			"contactPoint": {
				"@type": "ContactPoint",
				"contactType": "Professional",
				"email": "thyzeng@gmail.com"
			}
		}
	</script>

	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<!-- Skip to main content link for accessibility -->
<a href="#main-content" class="sr-only"> Skip to main content </a>

<!-- Loading Bar -->
{#if isLoading}
	<div
		class="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50"
		role="progressbar"
		aria-label="Loading"
		aria-busy="true"
	>
		<div class="h-full w-1/3 bg-primary-400 animate-pulse"></div>
	</div>
{/if}

<div
	class="min-h-screen flex flex-col {showContent
		? 'opacity-100'
		: 'opacity-0'} transition-opacity duration-500"
>
	<Header />
	<main id="main-content" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

<!-- Google Analytics -->
<Analytics />
