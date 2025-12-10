<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Henry Zeng | Full-Stack Web Developer</title>
	<meta name="title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		name="description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		property="og:description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Henry Zeng | Full-Stack Web Developer" />
	<meta
		property="twitter:description"
		content="Full-Stack Web Developer based in Chicago, Illinois. Building elegant, performant, and accessible web experiences."
	/>

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

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
