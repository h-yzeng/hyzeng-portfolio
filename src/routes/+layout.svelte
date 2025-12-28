<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import './layout.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

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

<div class="min-h-screen flex flex-col {showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
