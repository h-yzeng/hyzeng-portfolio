<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import {
		createAnimationContext,
		scrollIndicatorBounce,
		prefersReducedMotion
	} from '$lib/animations';

	let heroSection: HTMLElement;
	let ctx: gsap.Context;

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(heroSection, () => {
			// Hero text reveal animation
			const tl = gsap.timeline({ delay: 0.5 });

			tl.fromTo(
				'.hero-greeting',
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
			)
				.fromTo(
					'.hero-name',
					{ opacity: 0, y: 50, clipPath: 'inset(100% 0% 0% 0%)' },
					{
						opacity: 1,
						y: 0,
						clipPath: 'inset(0% 0% 0% 0%)',
						duration: 1,
						ease: 'power4.out'
					},
					'-=0.3'
				)
				.fromTo(
					'.hero-title',
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
					'-=0.5'
				)
				.fromTo(
					'.hero-tagline',
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
					'-=0.3'
				)
				.fromTo(
					'.hero-cta',
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
					'-=0.3'
				)
				.fromTo(
					'.hero-social-link',
					{ opacity: 0, scale: 0 },
					{ opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
					'-=0.3'
				);

			// Note: Scroll indicator and floating shapes use CSS animations for better performance
			// See layout.css for @keyframes bounce-slow and float
		});
	});

	onDestroy(() => {
		if (ctx) ctx.revert();
	});
</script>

<section
	bind:this={heroSection}
	id="hero"
	class="relative min-h-screen flex items-center justify-center overflow-hidden"
	aria-label="Hero section"
>
	<!-- Decorative Floating Shapes -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
		<div
			class="floating-shape absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/8 blur-3xl"
			style="animation: float 6s ease-in-out infinite;"
		></div>
		<div
			class="floating-shape absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-400/8 blur-3xl"
			style="animation: float 8s ease-in-out infinite 1s;"
		></div>
		<div
			class="floating-shape absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-primary-300/8 blur-2xl"
			style="animation: float 7s ease-in-out infinite 0.5s;"
		></div>
	</div>

	<!-- Grid Pattern Overlay -->
	<div
		class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
		style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;"
		aria-hidden="true"
	></div>

	<!-- Main Content -->
	<div class="container-custom relative z-10 text-center">
		<div class="max-w-4xl mx-auto">
			<!-- Greeting -->
			<p class="hero-greeting text-lg md:text-xl text-(--text-secondary) mb-4 opacity-0">
				👋 Hello, I'm
			</p>

		<!-- Name -->
		<h1
			class="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 leading-tight py-2"
		>
			<span class="gradient-text">Henry Zeng</span>
		</h1>			<!-- Title -->
			<h2
				class="hero-title text-2xl sm:text-3xl md:text-4xl font-display font-medium text-(--text-primary) mb-6 opacity-0"
			>
				Full-Stack Web Developer and IT Help Desk Specialist
			</h2>

			<!-- Tagline -->
			<p
				class="hero-tagline text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto mb-10 opacity-0"
			>
				I study Information Technology and Management in Chicago, Illinois.
				Currently finishing my Bachelor's and Master's Degree with a specialization in Web Development and Minor in Software Engineering.
			</p>

			<!-- CTA Buttons -->
			<div class="hero-cta flex flex-wrap justify-center gap-4 mb-12 opacity-0">
				<a
					href="#projects"
					class="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				>
					View My Work
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
				<a
					href="/resume/Henry_Zeng_2025Resume.pdf"
					download
					class="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-(--border-color) text-(--text-primary) font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					Download Resume
				</a>
				<a
					href="#contact"
					class="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-(--border-color) text-(--text-primary) font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				>
					Get In Touch
				</a>
			</div>

			<!-- Social Links -->
			<div class="flex justify-center gap-6">
				<a
					href="https://github.com/h-yzeng"
					target="_blank"
					rel="noopener noreferrer"
					class="hero-social-link opacity-0 p-3 rounded-full bg-(--bg-secondary) hover:bg-(--bg-tertiary) text-(--text-secondary) hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
					aria-label="GitHub Profile"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/henry-zeng-/"
					target="_blank"
					rel="noopener noreferrer"
					class="hero-social-link opacity-0 p-3 rounded-full bg-(--bg-secondary) hover:bg-(--bg-tertiary) text-(--text-secondary) hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
					aria-label="LinkedIn Profile"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
				</a>
				<a
					href="mailto:thyzeng@gmail.com"
					class="hero-social-link opacity-0 p-3 rounded-full bg-(--bg-secondary) hover:bg-(--bg-tertiary) text-(--text-secondary) hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
					aria-label="Email"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
		<a
			href="#about"
			class="scroll-indicator flex flex-col items-center gap-2 text-(--text-tertiary) hover:text-primary-500 transition-colors"
			style="animation: bounce-slow 2s ease-in-out infinite;"
			aria-label="Scroll to About section"
		>
			<span class="text-sm font-medium">Scroll</span>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</a>
	</div>
</section>
