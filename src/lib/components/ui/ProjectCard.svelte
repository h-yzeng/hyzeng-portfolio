<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { prefersReducedMotion } from '$lib/animations';

	interface Project {
		name: string;
		description: string;
		tech: string[];
		github: string;
		live: string;
		image: string;
	}

	let { project }: { project: Project } = $props();

	let cardElement: HTMLElement;
	let isHovered = $state(false);

	function handleMouseEnter() {
		if (prefersReducedMotion()) return;
		isHovered = true;
		gsap.to(cardElement, {
			scale: 1.02,
			y: -8,
			boxShadow: '0 25px 50px -12px var(--shadow-color)',
			duration: 0.3,
			ease: 'power2.out'
		});
	}

	function handleMouseLeave() {
		if (prefersReducedMotion()) return;
		isHovered = false;
		gsap.to(cardElement, {
			scale: 1,
			y: 0,
			boxShadow: '0 10px 15px -3px var(--shadow-color)',
			duration: 0.3,
			ease: 'power2.out'
		});
	}
</script>

<article
	bind:this={cardElement}
	class="project-card group relative bg-(--bg-primary) rounded-2xl overflow-hidden shadow-lg transition-colors duration-300"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	<!-- Project Image/Placeholder -->
	<div
		class="relative aspect-video overflow-hidden bg-linear-to-br from-primary-500/20 to-accent-500/20"
	>
		{#if project.image}
			<img
				src={project.image}
				alt="{project.name} project screenshot showing the application interface"
				width="800"
				height="450"
				loading="lazy"
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
			/>
		{:else}
			<!-- Gradient Placeholder -->
			<div class="absolute inset-0 flex items-center justify-center">
				<div class="text-center">
					<div
						class="w-16 h-16 mx-auto mb-3 rounded-xl gradient-bg flex items-center justify-center"
					>
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<span class="text-sm text-(--text-tertiary)">Project Preview</span>
				</div>
			</div>

			<!-- Decorative Pattern -->
			<div
				class="absolute inset-0 opacity-10"
				style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 20px 20px;"
				aria-hidden="true"
			></div>
		{/if}

		<!-- Hover Overlay -->
		<div
			class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
		></div>

		<!-- Quick Links on Hover -->
		<div
			class="absolute bottom-4 left-4 right-4 flex gap-3 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300"
		>
			{#if project.live}
				<a
					href={project.live}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/90 text-gray-900 rounded-lg font-medium text-sm hover:bg-white transition-colors"
					aria-label="View {project.name} live demo"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
					Live Demo
				</a>
			{/if}
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-900/90 text-white rounded-lg font-medium text-sm hover:bg-gray-900 transition-colors"
					aria-label="View {project.name} source code on GitHub"
				>
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
			{/if}
		</div>
	</div>

	<!-- Project Info -->
	<div class="p-6">
		<h3
			class="text-xl font-display font-semibold text-(--text-primary) mb-3 group-hover:text-primary-500 transition-colors"
		>
			{project.name}
		</h3>
		<p class="text-(--text-secondary) text-sm leading-relaxed mb-4">
			{project.description}
		</p>

		<!-- Tech Stack Badges -->
		<div class="flex flex-wrap gap-2">
			{#each project.tech as tech}
				<span
					class="px-3 py-1 text-xs font-medium rounded-full bg-(--bg-secondary) text-(--text-tertiary) hover:text-primary-500 transition-colors"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>

	<!-- Gradient Border on Hover -->
	<div
		class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border"
	></div>
</article>
