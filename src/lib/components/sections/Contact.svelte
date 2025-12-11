<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { createAnimationContext, prefersReducedMotion, magneticButton } from '$lib/animations';

	gsap.registerPlugin(ScrollTrigger);

	let contactSection: HTMLElement;
	let submitButton: HTMLElement;
	let ctx: gsap.Context;

	// Form state
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	// Magnetic button effect
	let magneticEffect: { handleMove: (e: MouseEvent) => void; handleLeave: () => void };

	onMount(() => {
		if (!prefersReducedMotion() && submitButton) {
			magneticEffect = magneticButton(submitButton, 0.2);
		}

		if (prefersReducedMotion()) return;

		ctx = createAnimationContext(contactSection, () => {
			// Section title animation
			gsap.fromTo(
				'.contact-title',
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.contact-title',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Contact info animation
			gsap.fromTo(
				'.contact-info',
				{ opacity: 0, x: -50 },
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.contact-content',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Contact form animation
			gsap.fromTo(
				'.contact-form',
				{ opacity: 0, x: 50 },
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.contact-content',
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					}
				}
			);

			// Social links stagger
			gsap.fromTo(
				'.social-link',
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.social-links',
						start: 'top 85%',
						toggleActions: 'play none none reverse'
					}
				}
			);
		});
	});

	onDestroy(() => {
		if (ctx) ctx.revert();
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';

		try {
			// FormSpree endpoint - Replace YOUR_FORM_ID with your actual FormSpree form ID
			// Get your form ID from: https://formspree.io/
			const response = await fetch('https://formspree.io/f/xjknpbge', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
					_subject: `Portfolio Contact from ${formData.name}`
				})
			});

			if (response.ok) {
				submitStatus = 'success';
				formData = { name: '', email: '', message: '' };
			} else {
				submitStatus = 'error';
			}
		} catch {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}

	const socialLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/h-yzeng',
			icon: 'github'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/henry-zeng-/',
			icon: 'linkedin'
		},
		{
			name: 'Email',
			href: 'mailto:thyzeng@gmail.com',
			icon: 'email'
		}
	];
</script>

<section
	bind:this={contactSection}
	id="contact"
	class="section-padding bg-(--bg-secondary)"
	aria-labelledby="contact-heading"
>
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2
				id="contact-heading"
				class="contact-title text-4xl md:text-5xl font-display font-bold mb-4"
			>
				Get In <span class="gradient-text">Touch</span>
			</h2>
			<div class="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
			<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
				Have a project in mind or just want to chat? I'd love to hear from you!
			</p>
		</div>

		<!-- Contact Content -->
		<div class="contact-content grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
			<!-- Contact Info -->
			<div class="contact-info space-y-8">
				<div>
					<h3 class="text-2xl font-display font-semibold text-(--text-primary) mb-4">
						Let's work together
					</h3>
					<p class="text-(--text-secondary) leading-relaxed">
						I'm currently open to new opportunities and interesting projects. Whether you have a
						question, want to collaborate, or just want to say hi, feel free to reach out!
					</p>
				</div>

				<!-- Contact Details -->
				<div class="space-y-4">
					<a
						href="mailto:thyzeng@gmail.com"
						class="flex items-center gap-4 p-4 rounded-xl bg-(--bg-primary) hover:bg-(--bg-tertiary) transition-colors group"
					>
						<div class="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-sm text-(--text-tertiary)">Email</p>
							<p
								class="text-(--text-primary) font-medium group-hover:text-primary-500 transition-colors"
							>
								thyzeng@gmail.com
							</p>
						</div>
					</a>

					<div class="flex items-center gap-4 p-4 rounded-xl bg-(--bg-primary)">
						<div class="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
						</div>
						<div>
							<p class="text-sm text-(--text-tertiary)">Location</p>
							<p class="text-(--text-primary) font-medium">Chicago, Illinois</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div class="social-links">
					<h4 class="text-sm font-semibold text-(--text-tertiary) uppercase tracking-wider mb-4">
						Follow me
					</h4>
					<div class="flex gap-4">
						{#each socialLinks as link}
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="social-link w-12 h-12 rounded-xl bg-(--bg-primary) flex items-center justify-center text-(--text-secondary) hover:text-white hover:gradient-bg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
								aria-label={link.name}
							>
								{#if link.icon === 'github'}
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
								{:else if link.icon === 'linkedin'}
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
										/>
									</svg>
								{:else if link.icon === 'email'}
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="contact-form">
				<form onsubmit={handleSubmit} class="bg-(--bg-primary) rounded-2xl p-8 shadow-lg space-y-6">
					<!-- Name Field -->
					<div>
						<label for="name" class="block text-sm font-medium text-(--text-primary) mb-2">
							Your Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							bind:value={formData.name}
							required
							class="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder-(--text-tertiary) focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
							placeholder="John Doe"
						/>
					</div>

					<!-- Email Field -->
					<div>
						<label for="email" class="block text-sm font-medium text-(--text-primary) mb-2">
							Your Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							bind:value={formData.email}
							required
							class="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder-(--text-tertiary) focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
							placeholder="john@example.com"
						/>
					</div>

					<!-- Message Field -->
					<div>
						<label for="message" class="block text-sm font-medium text-(--text-primary) mb-2">
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 rounded-xl bg-(--bg-secondary) border border-(--border-color) text-(--text-primary) placeholder-(--text-tertiary) focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none resize-none"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<!-- Submit Button -->
					<button
						bind:this={submitButton}
						type="submit"
						disabled={isSubmitting}
						onmousemove={(e) => magneticEffect?.handleMove(e)}
						onmouseleave={() => magneticEffect?.handleLeave()}
						class="w-full py-4 rounded-xl gradient-bg text-white font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
					>
						{#if isSubmitting}
							<span class="flex items-center justify-center gap-2">
								<svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Sending...
							</span>
						{:else}
							Send Message
						{/if}
					</button>

					<!-- Status Messages -->
					{#if submitStatus === 'success'}
						<div
							class="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 text-green-500"
							role="alert"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>Message sent successfully! I'll get back to you soon.</span>
						</div>
					{:else if submitStatus === 'error'}
						<div
							class="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-500"
							role="alert"
						>
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
							<span>Oops! Something went wrong. Please try again.</span>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>
