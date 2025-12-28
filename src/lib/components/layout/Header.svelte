<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { prefersReducedMotion } from '$lib/animations';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let headerElement: HTMLElement;

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#contact', label: 'Contact' },
		{ href: '/resume/Henry_Zeng_2025Resume.pdf', label: 'Resume', isDownload: true }
	];

	function handleScroll() {
		isScrolled = window.scrollY > 50;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		// Header animation on load
		if (!prefersReducedMotion()) {
			gsap.fromTo(
				headerElement,
				{ y: -100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
			);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<header
	bind:this={headerElement}
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-(--bg-primary)/80 backdrop-blur-lg shadow-lg'
		: 'bg-transparent'}"
>
	<nav class="container-custom" aria-label="Main navigation">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a
				href="#hero"
				class="text-2xl font-display font-bold gradient-text hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
				aria-label="Henry Zeng - Home"
			>
				HZ
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						download={link.isDownload || undefined}
						class="text-sm font-medium text-(--text-secondary) hover:text-primary-500 transition-colors relative group focus:outline-none focus:text-primary-500"
					>
						{link.label}
						<span
							class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"
						></span>
					</a>
				{/each}

				<!-- Theme Toggle -->
				<ThemeToggle />

				<!-- CTA Button -->
				<a
					href="#contact"
					class="px-5 py-2.5 rounded-full gradient-bg text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				>
					Contact
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center gap-4 md:hidden">
				<ThemeToggle />
				<button
					onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					class="p-2 rounded-lg text-(--text-primary) hover:bg-(--bg-secondary) transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
					aria-label="{isMobileMenuOpen ? 'Close' : 'Open'} menu"
					aria-expanded={isMobileMenuOpen}
				>
					{#if isMobileMenuOpen}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div
				class="md:hidden absolute top-full left-0 right-0 bg-(--bg-primary)/95 backdrop-blur-lg border-t border-(--border-color) shadow-xl"
			>
				<div class="container-custom py-6 space-y-4">
					{#each navLinks as link}
						<a
							href={link.href}
							download={link.isDownload || undefined}
							onclick={closeMobileMenu}
							class="block py-3 text-lg font-medium text-(--text-secondary) hover:text-primary-500 transition-colors focus:outline-none focus:text-primary-500"
						>
							{link.label}
						</a>
					{/each}
					<a
						href="#contact"
						onclick={closeMobileMenu}
						class="block w-full py-3 mt-4 rounded-xl gradient-bg text-white text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
					>
						Contact
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>
