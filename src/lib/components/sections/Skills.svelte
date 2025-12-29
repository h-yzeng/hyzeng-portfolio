<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let skillsSection: HTMLElement;
	let ctx: gsap.Context;
	let selectedCategory = $state<string>('All');

	// Skill categories based on resume and GitHub activity
	const skillCategories = [
		{
			title: 'Languages',
			icon: 'code',
			skills: [
				{ name: 'HTML/CSS', level: 90 }, // Frontend development
				{ name: 'TypeScript', level: 90 }, // 5 GitHub projects, main language
				{ name: 'JavaScript', level: 50 }, // Used across projects
				{ name: 'Python', level: 15 }, // Listed in resume
				{ name: 'Java', level: 15 }, // Retro-Minigames project
				{ name: 'SQL', level: 5 } // Multiple databases
			]
		},
		{
			title: 'Frameworks & Libraries',
			icon: 'framework',
			skills: [
				{ name: 'React', level: 90 }, // Campus Market, resume projects
				{ name: 'TailwindCSS', level: 85 }, // Used in multiple projects
				{ name: 'Svelte/SvelteKit', level: 25 }, // Current portfolio
				{ name: 'Next.js', level: 20 }, // TaskFlow project
				{ name: 'Vue.js', level: 15 }, // Recipe Explorer
				{ name: 'Express.js', level: 10 } // Backend framework
			]
		},
		{
			title: 'Databases & Cloud',
			icon: 'database',
			skills: [
				{ name: 'Git/GitHub', level: 100 }, // Version control (all projects)
				{ name: 'Firebase', level: 80 }, // Campus Market project
				{ name: 'PostgreSQL', level: 25 }, // TaskFlow project
				{ name: 'MongoDB', level: 10 }, // NoSQL experience
				{ name: 'MySQL', level: 10 }, // Listed in resume
			]
		},
		{
			title: 'Tools & DevOps',
			icon: 'tools',
			skills: [
				{ name: 'GitHub Actions', level: 85 }, // CI/CD in resume
				{ name: 'Docker', level: 30 }, // Resume: Cloud and DevOps
				{ name: 'AWS', level: 5 }, // Cloud platforms
				{ name: 'Linux', level: 10 }, // DevOps in resume
			]
		}
	];

	// Filter categories
	const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Databases & Cloud', 'Tools & DevOps'];

	// Filtered skill categories
	let filteredCategories = $derived(
		selectedCategory === 'All'
			? skillCategories
			: skillCategories.filter((cat) => cat.title === selectedCategory)
	);

	// Additional skills from resume (not in main categories)
	const additionalSkills = [
		'Dart',
		'Go',
		'GSAP',
		'Flutter',
		'FastAPI',
		'Azure',
		'Framer Motion',
		'Drizzle ORM',
		'NextAuth',
		'TanStack Query',
		'Zustand'
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

			// Filter buttons animation
			gsap.fromTo(
				'.filter-button',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.05,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.filter-container',
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
			<div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				Technologies and tools I work with to bring ideas to life
			</p>
		</div>

		<!-- Category Filters -->
		<div class="filter-container flex flex-wrap justify-center gap-3 mb-12">
			{#each categories as category}
				<button
					class="filter-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 {selectedCategory ===
					category
						? 'bg-primary-500 text-white shadow-lg'
						: 'bg-(--bg-secondary) text-(--text-secondary) hover:bg-primary-500/10 hover:text-primary-500'}"
					onclick={() => (selectedCategory = category)}
					aria-pressed={selectedCategory === category}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Skills Grid -->
		<div class="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredCategories as category}
				<div
					class="skill-category bg-(--bg-secondary) rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
				>
					<!-- Category Header -->
					<div class="flex items-center gap-3 mb-6">
						<div class="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
							{#if category.icon === 'code'}
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
							{:else if category.icon === 'framework'}
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
							{:else if category.icon === 'database'}
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
										d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
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
										class="skill-bar-fill h-full bg-primary-500 rounded-full origin-left"
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
				{#each additionalSkills as tag}
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
