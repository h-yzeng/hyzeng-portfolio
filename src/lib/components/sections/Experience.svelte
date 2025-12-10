<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let experienceSection: HTMLElement;
	let ctx: gsap.Context;

	// [CUSTOMIZATION] - Update your experience and education here
	const experiences = [
		{
			type: 'experience',
			title: '[Job Title]',
			organization: '[Company Name]',
			location: '[City, State]',
			period: '[Start Date] - [End Date]',
			description: [
				'[Responsibility or achievement 1]',
				'[Responsibility or achievement 2]',
				'[Responsibility or achievement 3]'
			]
		},
		{
			type: 'experience',
			title: '[Job Title]',
			organization: '[Company Name]',
			location: '[City, State]',
			period: '[Start Date] - [End Date]',
			description: ['[Responsibility or achievement 1]', '[Responsibility or achievement 2]']
		}
		// [ADD MORE EXPERIENCES HERE]
	];

	const education = [
		{
			type: 'education',
			title: '[Degree Name]',
			organization: '[University Name]',
			location: '[City, State]',
			period: '[Start Year] - [End Year]',
			description: ['[Relevant coursework, achievements, or activities]', '[GPA if noteworthy]']
		}
		// [ADD MORE EDUCATION HERE]
	];

	// Combine and sort by date (most recent first)
	const timeline = [...experiences, ...education];

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(experienceSection, () => {
			// Section title animation
			gsap.fromTo(
				'.experience-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.experience-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Timeline line animation
			gsap.fromTo(
				'.timeline-line',
				{ scaleY: 0 },
				{
					scaleY: 1,
					ease: 'none',
					scrollTrigger: {
						trigger: '.timeline-container',
						start: 'top 70%',
						end: 'bottom 30%',
						scrub: 1
					}
				}
			);

			// Timeline items stagger animation
			gsap.fromTo(
				'.timeline-item',
				{ opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					stagger: 0.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.timeline-container',
						start: 'top 75%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Timeline dots animation
			gsap.fromTo(
				'.timeline-dot',
				{ scale: 0 },
				{
					scale: 1,
					duration: 0.4,
					stagger: 0.15,
					ease: 'back.out(1.7)',
					scrollTrigger: {
						trigger: '.timeline-container',
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
	bind:this={experienceSection}
	id="experience"
	class="section-padding"
	aria-labelledby="experience-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2
				id="experience-heading"
				class="experience-title text-4xl md:text-5xl font-display font-bold mb-4"
			>
				Experience & <span class="gradient-text">Education</span>
			</h2>
			<div class="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				My professional journey and academic background
			</p>
		</div>

		<!-- Timeline -->
		<div class="timeline-container relative max-w-4xl mx-auto">
			<!-- Vertical Line -->
			<div
				class="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary-500 via-accent-500 to-primary-500 origin-top"
				aria-hidden="true"
			></div>

			<!-- Timeline Items -->
			<div class="space-y-12">
				{#each timeline as item, index}
					<div
						class="timeline-item relative flex flex-col md:flex-row gap-8 {index % 2 === 0
							? 'md:flex-row'
							: 'md:flex-row-reverse'}"
					>
						<!-- Timeline Dot -->
						<div
							class="timeline-dot absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full gradient-bg ring-4 ring-(--bg-primary) z-10"
							aria-hidden="true"
						></div>

						<!-- Content Card -->
						<div
							class="ml-12 md:ml-0 md:w-[calc(50%-2rem)] {index % 2 === 0
								? 'md:pr-8 md:text-right'
								: 'md:pl-8 md:text-left'}"
						>
							<div
								class="bg-(--bg-secondary) rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<!-- Type Badge -->
								<span
									class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 {item.type ===
									'experience'
										? 'bg-primary-500/10 text-primary-500'
										: 'bg-accent-500/10 text-accent-500'}"
								>
									{item.type === 'experience' ? '💼 Experience' : '🎓 Education'}
								</span>

								<!-- Title -->
								<h3 class="text-xl font-display font-semibold text-(--text-primary) mb-1">
									{item.title}
								</h3>

								<!-- Organization -->
								<p class="text-primary-500 font-medium mb-1">
									{item.organization}
								</p>

								<!-- Location & Period -->
								<div
									class="flex flex-wrap gap-4 text-sm text-(--text-tertiary) mb-4 {index % 2 === 0
										? 'md:justify-end'
										: 'md:justify-start'}"
								>
									<span class="flex items-center gap-1">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										{item.location}
									</span>
									<span class="flex items-center gap-1">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										{item.period}
									</span>
								</div>

								<!-- Description -->
								<ul
									class="space-y-2 text-sm text-(--text-secondary) {index % 2 === 0
										? 'md:text-right'
										: 'md:text-left'}"
								>
									{#each item.description as point}
										<li
											class="flex items-start gap-2 {index % 2 === 0 ? 'md:flex-row-reverse' : ''}"
										>
											<span class="text-primary-500 mt-1 shrink-0">•</span>
											<span>{point}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<!-- Spacer for alternating layout -->
						<div class="hidden md:block md:w-[calc(50%-2rem)]"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
