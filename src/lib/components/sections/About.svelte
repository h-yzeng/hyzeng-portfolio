<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let aboutSection: HTMLElement;
	let ctx: gsap.Context;

	onMount(() => {
		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(aboutSection, () => {
			// Section title animation
			gsap.fromTo(
				'.about-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.about-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Content animation
			gsap.fromTo(
				'.about-content',
				{ opacity: 0, x: -50 },
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.about-content',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Image/graphic animation
			gsap.fromTo(
				'.about-graphic',
				{ opacity: 0, x: 50, scale: 0.9 },
				{
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.about-graphic',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Tech icons floating animation
			gsap.to('.tech-icon', {
				y: 'random(-15, 15)',
				rotation: 'random(-5, 5)',
				duration: 'random(3, 5)',
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				stagger: {
					each: 0.3,
					from: 'random'
				}
			});
		});
	});

	onDestroy(() => {
		if (ctx) ctx.revert();
	});

	// [CUSTOMIZATION] - Add or modify these tech icons as needed
	const techIcons = [
		{ name: 'TypeScript', color: '#3178c6' },
		{ name: 'React', color: '#61dafb' },
		{ name: 'Svelte', color: '#ff3e00' },
		{ name: 'Node.js', color: '#339933' },
		{ name: 'TailwindCSS', color: '#06b6d4' }
	];
</script>

<section
	bind:this={aboutSection}
	id="about"
	class="section-padding bg-(--bg-secondary)"
	aria-labelledby="about-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2 id="about-heading" class="about-title text-4xl md:text-5xl font-display font-bold mb-4">
				About <span class="gradient-text">Me</span>
			</h2>
			<div class="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
		</div>

		<!-- Content Grid -->
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text Content -->
			<div class="about-content space-y-6">
				<p class="text-xl md:text-2xl font-display text-(--text-primary) leading-relaxed">
					Hi! I'm <span class="gradient-text font-semibold">Henry Zeng</span>, a Full-Stack Web
					Developer based in Chicago, Illinois.
				</p>

				<!-- [PLACEHOLDER] - Replace this bio with your own story -->
				<p class="text-lg text-(--text-secondary) leading-relaxed">
					I enjoy creating beautiful and functional web applications that solve
					real-world problems. With a creative eye for design and a love for clean code, I connect the
					gap between aesthetics and functionality.
				</p>

				<p class="text-lg text-(--text-secondary) leading-relaxed">
					When I'm not coding, you can find me exploring new technologies, thinking about new
					projects ideas, or sharing my knowledge with other developers. I believe in
					continuous learning and pushing the boundaries of what's possible to design.
				</p>

				<p class="text-lg text-(--text-secondary) leading-relaxed">
					What drives me is the ability to turn complex problems into stylish solutions. I'm always
					excited to take on new challenges and collaborate with other creatives who share
					my passion for designing.
				</p>

				<!-- Quick Info -->
				<div class="flex flex-wrap gap-6 pt-4">
					<div class="flex items-center gap-2 text-(--text-secondary)">
						<svg
							class="w-5 h-5 text-primary-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
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
						<span>Chicago, Illinois</span>
					</div>
					<div class="flex items-center gap-2 text-(--text-secondary)">
						<svg
							class="w-5 h-5 text-primary-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span>Full-Stack Developer</span>
					</div>
				</div>

				<!-- Download Resume Button -->
				<div class="pt-4">
					<a
						href="#contact"
						class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						Get In Touch
					</a>
				</div>
			</div>

			<!-- Visual Graphic -->
			<div class="about-graphic relative">
				<!-- Abstract Shape Container -->
				<div
					class="relative aspect-square max-w-md mx-auto bg-linear-to-br from-primary-500/10 to-accent-500/10 rounded-3xl p-8"
				>
					<!-- Decorative Border -->
					<div class="absolute inset-0 rounded-3xl gradient-border"></div>

					<!-- Inner Content with Floating Icons -->
					<div class="relative h-full flex items-center justify-center">
						<!-- Central Code Symbol -->
						<div
							class="w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center shadow-xl"
						>
							<svg
								class="w-16 h-16 text-white"
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
						</div>

						<!-- Floating Tech Icons -->
						{#each techIcons as icon, i}
							<div
								class="tech-icon absolute w-12 h-12 rounded-xl bg-(--bg-primary) shadow-lg flex items-center justify-center"
								style="
                  top: {20 + Math.sin(i * 1.2) * 30}%;
                  left: {20 + Math.cos(i * 1.2) * 30}%;
                  transform: rotate({i * 15}deg);
                "
							>
								<span class="text-xs font-bold" style="color: {icon.color}"
									>{icon.name.substring(0, 2)}</span
								>
							</div>
						{/each}
					</div>

					<!-- Decorative Dots -->
					<div
						class="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
						style="background-image: radial-gradient(circle, var(--gradient-start) 2px, transparent 2px); background-size: 12px 12px;"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
