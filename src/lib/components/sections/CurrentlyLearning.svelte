<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let learningSection: HTMLElement;
	let ctx: gsap.Context;

	// [CUSTOMIZATION] - Update what you're currently learning
	const learningItems = [
		{
			name: 'Advanced TypeScript',
			description: 'Deep diving into advanced type patterns and generics',
			progress: 75,
			icon: '📘'
		},
		{
			name: 'System Design',
			description: 'Learning scalable architecture patterns',
			progress: 60,
			icon: '🏗️'
		},
		{
			name: 'Next.js 15',
			description: 'Exploring the latest features and App Router',
			progress: 85,
			icon: '⚡'
		}
	];

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(learningSection, () => {
			// Title animation
			gsap.fromTo(
				'.learning-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.learning-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Cards stagger
			gsap.fromTo(
				'.learning-card',
				{ opacity: 0, y: 40, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.6,
					stagger: 0.15,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.learning-grid',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Progress bars
			gsap.fromTo(
				'.learning-progress-fill',
				{ scaleX: 0 },
				{
					scaleX: 1,
					duration: 1.2,
					stagger: 0.1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.learning-grid',
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
	bind:this={learningSection}
	id="currently-learning"
	class="section-padding bg-(--bg-secondary)"
	aria-labelledby="learning-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2
				id="learning-heading"
				class="learning-title text-4xl md:text-5xl font-display font-bold mb-4"
			>
				Currently <span class="gradient-text">Learning</span>
			</h2>
			<div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				Always growing and expanding my skillset
			</p>
		</div>

		<!-- Learning Grid -->
		<div class="learning-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
			{#each learningItems as item}
				<div
					class="learning-card bg-(--bg-primary) rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-(--border-color)"
				>
					<!-- Icon -->
					<div class="text-5xl mb-4">{item.icon}</div>

					<!-- Content -->
					<h3 class="text-xl font-display font-semibold text-(--text-primary) mb-2">
						{item.name}
					</h3>
					<p class="text-sm text-(--text-secondary) mb-4">
						{item.description}
					</p>

					<!-- Progress Bar -->
					<div class="space-y-2">
						<div class="flex justify-between items-center text-sm">
							<span class="text-(--text-tertiary)">Progress</span>
							<span class="text-primary-500 font-semibold">{item.progress}%</span>
						</div>
						<div class="h-2 bg-(--bg-tertiary) rounded-full overflow-hidden">
							<div
								class="learning-progress-fill h-full bg-primary-500 rounded-full origin-left"
								style="width: {item.progress}%"
							></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
