<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let skillsSection: HTMLElement;
	let ctx: gsap.Context;

	// [CUSTOMIZATION] - Add or modify skills in each category
	const skillCategories = [
		{
			title: 'Languages',
			skills: [
				{ name: 'TypeScript', level: 90 },
				{ name: 'JavaScript', level: 95 },
				{ name: 'HTML', level: 95 },
				{ name: 'CSS', level: 90 }
				// [ADD MORE LANGUAGES HERE]
			]
		},
		{
			title: 'Frameworks',
			skills: [
				{ name: 'Svelte', level: 85 },
				{ name: 'React', level: 90 },
				{ name: 'Vue.js', level: 75 }
				// [ADD MORE FRAMEWORKS HERE]
			]
		},
		{
			title: 'Tools',
			skills: [
				{ name: 'Git', level: 90 },
				{ name: 'Figma', level: 80 },
				{ name: 'Vite', level: 85 },
				{ name: 'GSAP', level: 80 }
				// [ADD MORE TOOLS HERE]
			]
		}
	];

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(skillsSection, () => {
			// Section title animation
			gsap.fromTo(
				'.skills-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.skills-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Skill categories stagger animation
			gsap.fromTo(
				'.skill-category',
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					stagger: 0.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.skills-grid',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Skill bars animation
			gsap.fromTo(
				'.skill-bar-fill',
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1,
					stagger: 0.05,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.skills-grid',
						start: 'top 70%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Skill items stagger
			gsap.fromTo(
				'.skill-item',
				{ opacity: 0, x: -20 },
				{
					opacity: 1,
					x: 0,
					duration: 0.4,
					stagger: 0.05,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.skills-grid',
						start: 'top 75%',
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
	bind:this={skillsSection}
	id="skills"
	class="section-padding"
	aria-labelledby="skills-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2 id="skills-heading" class="skills-title text-4xl md:text-5xl font-display font-bold mb-4">
				My <span class="gradient-text">Skills</span>
			</h2>
			<div class="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				Technologies and tools I work with to bring ideas to life
			</p>
		</div>

		<!-- Skills Grid -->
		<div class="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each skillCategories as category}
				<div
					class="skill-category bg-(--bg-secondary) rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
				>
					<!-- Category Header -->
					<div class="flex items-center gap-3 mb-6">
						<div class="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
							{#if category.title === 'Languages'}
								<svg
									class="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							{:else if category.title === 'Frameworks'}
								<svg
									class="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									/>
								</svg>
							{:else}
								<svg
									class="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							{/if}
						</div>
						<h3 class="text-xl font-display font-semibold text-(--text-primary)">
							{category.title}
						</h3>
					</div>
					<!-- Skills List -->
					<div class="space-y-4">
						{#each category.skills as skill}
							<div class="skill-item">
								<div class="flex justify-between items-center mb-2">
									<span class="text-(--text-primary) font-medium">{skill.name}</span>
									<span class="text-sm text-(--text-tertiary)">{skill.level}%</span>
								</div>
								<div class="h-2 bg-(--bg-tertiary) rounded-full overflow-hidden">
									<div
										class="skill-bar-fill h-full gradient-bg rounded-full origin-left"
										style="width: {skill.level}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Skills Tags -->
		<div class="mt-16 text-center">
			<h3 class="text-xl font-display font-semibold text-(--text-primary) mb-6">
				Also experienced with
			</h3>
			<div class="flex flex-wrap justify-center gap-3">
				{#each ['REST APIs', 'GraphQL', 'Firebase', 'PostgreSQL', 'Docker', 'CI/CD', 'Responsive Design', 'Accessibility', 'Performance Optimization', 'SEO'] as tag}
					<span
						class="px-4 py-2 bg-(--bg-secondary) text-(--text-secondary) rounded-full text-sm font-medium hover:bg-primary-500/10 hover:text-primary-500 transition-colors duration-300"
					>
						{tag}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
