<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let projectsSection: HTMLElement;
	let ctx: gsap.Context;

	// [CUSTOMIZATION] - Update project details here
	const projects = [
		{
			name: 'Campus Night Market',
			description:
				'A modern web application for campus late-night food exchange, built specifically for IIT students.',
			tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Firebase'],
			github: 'https://github.com/h-yzeng/campus-nightmarket',
			live: '', // [ADD LIVE DEMO LINK IF AVAILABLE]
			image: '' // [ADD PROJECT SCREENSHOT PATH]
		},
		{
			name: 'MoodBoard',
			description:
				'A web-based mood tracking app that helps users log daily emotions, reflect on experiences, and visualize mood trends.',
			tech: ['React', 'JavaScript', 'TailwindCSS', 'Vite'],
			github: 'https://github.com/h-yzeng/Moodboard',
			live: '', // [ADD LIVE DEMO LINK IF AVAILABLE]
			image: '' // [ADD PROJECT SCREENSHOT PATH]
		},
		{
			name: 'Task Manager',
			description:
				'Task Manager lets you quickly organize, track, and update your to-do items from any device.',
			tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vercel Postgres'],
			github: 'https://github.com/h-yzeng/task-manager',
			live: '', // [ADD LIVE DEMO LINK IF AVAILABLE]
			image: '' // [ADD PROJECT SCREENSHOT PATH]
		}
		// [ADD MORE PROJECTS HERE]
	];

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(projectsSection, () => {
			// Section title animation
			gsap.fromTo(
				'.projects-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.projects-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Project cards stagger animation
			gsap.fromTo(
				'.project-card',
				{ opacity: 0, y: 60 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.projects-grid',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);
		});
	});

	onDestroy(() => {
		if (ctx) ctx.revert();
	});
</script>

<section
	bind:this={projectsSection}
	id="projects"
	class="section-padding bg-(--bg-secondary)"
	aria-labelledby="projects-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2
				id="projects-heading"
				class="projects-title text-4xl md:text-5xl font-display font-bold mb-4"
			>
				Featured <span class="gradient-text">Projects</span>
			</h2>
			<div class="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				A selection of projects I've built to solve real problems and explore new technologies
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<!-- View More Button -->
		<div class="text-center mt-12">
			<a
				href="https://github.com/h-yzeng"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-(--border-color) text-(--text-primary) font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
			>
				View More on GitHub
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
