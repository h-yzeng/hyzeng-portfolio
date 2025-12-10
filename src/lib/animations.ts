/**
 * GSAP Animation Utilities for Portfolio
 * =======================================
 * This file contains reusable animation functions using GSAP.
 * All animations respect the user's prefers-reduced-motion setting.
 *
 * Usage:
 * - Import functions in your Svelte components
 * - Call in onMount() and cleanup in onDestroy()
 * - Use GSAP context for proper cleanup
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Create a GSAP context for proper cleanup in Svelte
 * @param scope - The DOM element to scope animations to
 * @param callback - Function containing GSAP animations
 */
export function createAnimationContext(
	scope: Element | string,
	callback: (context: gsap.Context) => void
): gsap.Context {
	const ctx = gsap.context(callback, scope);
	return ctx;
}

/**
 * Hero text reveal animation with staggered effect
 * @param elements - Array of elements or selector string
 * @param options - Animation options
 */
export function heroTextReveal(
	elements: gsap.TweenTarget,
	options: {
		duration?: number;
		stagger?: number;
		delay?: number;
	} = {}
): gsap.core.Timeline {
	const { duration = 1, stagger = 0.2, delay = 0.3 } = options;

	if (prefersReducedMotion()) {
		gsap.set(elements, { opacity: 1, y: 0 });
		return gsap.timeline();
	}

	const tl = gsap.timeline({ delay });

	tl.fromTo(
		elements,
		{
			opacity: 0,
			y: 50,
			clipPath: 'inset(100% 0% 0% 0%)'
		},
		{
			opacity: 1,
			y: 0,
			clipPath: 'inset(0% 0% 0% 0%)',
			duration,
			stagger,
			ease: 'power4.out'
		}
	);

	return tl;
}

/**
 * Fade and slide in animation for sections
 * @param element - Element to animate
 * @param direction - Direction to slide from
 */
export function fadeSlideIn(
	element: gsap.TweenTarget,
	direction: 'up' | 'down' | 'left' | 'right' = 'up',
	options: {
		duration?: number;
		distance?: number;
		trigger?: Element | string;
		start?: string;
	} = {}
): gsap.core.Tween | null {
	const { duration = 0.8, distance = 60, trigger, start = 'top 80%' } = options;

	if (prefersReducedMotion()) {
		gsap.set(element, { opacity: 1, x: 0, y: 0 });
		return null;
	}

	const directions = {
		up: { y: distance, x: 0 },
		down: { y: -distance, x: 0 },
		left: { x: distance, y: 0 },
		right: { x: -distance, y: 0 }
	};

	return gsap.fromTo(
		element,
		{
			opacity: 0,
			...directions[direction]
		},
		{
			opacity: 1,
			x: 0,
			y: 0,
			duration,
			ease: 'power3.out',
			scrollTrigger: trigger
				? {
						trigger,
						start,
						toggleActions: 'play none none reverse'
					}
				: undefined
		}
	);
}

/**
 * Stagger animation for multiple elements (like skill cards)
 * @param elements - Elements to animate
 * @param options - Animation options
 */
export function staggerReveal(
	elements: gsap.TweenTarget,
	options: {
		trigger?: Element | string;
		stagger?: number;
		duration?: number;
		start?: string;
		from?: 'start' | 'center' | 'end' | 'random';
	} = {}
): gsap.core.Tween | null {
	const { trigger, stagger = 0.1, duration = 0.6, start = 'top 80%', from = 'start' } = options;

	if (prefersReducedMotion()) {
		gsap.set(elements, { opacity: 1, y: 0, scale: 1 });
		return null;
	}

	return gsap.fromTo(
		elements,
		{
			opacity: 0,
			y: 40,
			scale: 0.95
		},
		{
			opacity: 1,
			y: 0,
			scale: 1,
			duration,
			stagger: {
				each: stagger,
				from
			},
			ease: 'power2.out',
			scrollTrigger: trigger
				? {
						trigger,
						start,
						toggleActions: 'play none none reverse'
					}
				: undefined
		}
	);
}

/**
 * Card hover animation with scale and shadow
 * @param card - Card element
 */
export function cardHoverAnimation(card: Element): {
	enter: () => void;
	leave: () => void;
} {
	if (prefersReducedMotion()) {
		return { enter: () => {}, leave: () => {} };
	}

	return {
		enter: () => {
			gsap.to(card, {
				scale: 1.02,
				y: -8,
				boxShadow: '0 20px 40px var(--shadow-color)',
				duration: 0.3,
				ease: 'power2.out'
			});
		},
		leave: () => {
			gsap.to(card, {
				scale: 1,
				y: 0,
				boxShadow: '0 4px 6px var(--shadow-color)',
				duration: 0.3,
				ease: 'power2.out'
			});
		}
	};
}

/**
 * Timeline progress animation for experience section
 * @param element - Timeline element
 * @param options - Animation options
 */
export function timelineProgress(
	element: gsap.TweenTarget,
	options: {
		trigger?: Element | string;
		start?: string;
		end?: string;
	} = {}
): gsap.core.Tween | null {
	const { trigger, start = 'top 80%', end = 'bottom 20%' } = options;

	if (prefersReducedMotion()) {
		gsap.set(element, { scaleY: 1 });
		return null;
	}

	return gsap.fromTo(
		element,
		{ scaleY: 0, transformOrigin: 'top center' },
		{
			scaleY: 1,
			ease: 'none',
			scrollTrigger: trigger
				? {
						trigger,
						start,
						end,
						scrub: 1
					}
				: undefined
		}
	);
}

/**
 * Scroll indicator bounce animation
 * @param element - Scroll indicator element
 */
export function scrollIndicatorBounce(element: gsap.TweenTarget): gsap.core.Tween | null {
	if (prefersReducedMotion()) {
		return null;
	}

	return gsap.to(element, {
		y: 10,
		duration: 0.8,
		repeat: -1,
		yoyo: true,
		ease: 'power1.inOut'
	});
}

/**
 * Background gradient animation
 * @param element - Element with gradient background
 */
export function gradientAnimation(element: gsap.TweenTarget): gsap.core.Tween | null {
	if (prefersReducedMotion()) {
		return null;
	}

	return gsap.to(element, {
		backgroundPosition: '200% 50%',
		duration: 8,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut'
	});
}

/**
 * Floating animation for decorative elements
 * @param elements - Elements to animate
 * @param options - Animation options
 */
export function floatingAnimation(
	elements: gsap.TweenTarget,
	options: {
		distance?: number;
		duration?: number;
		stagger?: number;
	} = {}
): gsap.core.Tween | null {
	const { distance = 20, duration = 4, stagger = 0.5 } = options;

	if (prefersReducedMotion()) {
		return null;
	}

	return gsap.to(elements, {
		y: distance,
		duration,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
		stagger: {
			each: stagger,
			from: 'random'
		}
	});
}

/**
 * Magnetic button effect
 * @param button - Button element
 * @param strength - Magnetic strength (0-1)
 */
export function magneticButton(
	button: HTMLElement,
	strength: number = 0.3
): {
	handleMove: (e: MouseEvent) => void;
	handleLeave: () => void;
} {
	if (prefersReducedMotion()) {
		return { handleMove: () => {}, handleLeave: () => {} };
	}

	return {
		handleMove: (e: MouseEvent) => {
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			gsap.to(button, {
				x: x * strength,
				y: y * strength,
				duration: 0.3,
				ease: 'power2.out'
			});
		},
		handleLeave: () => {
			gsap.to(button, {
				x: 0,
				y: 0,
				duration: 0.3,
				ease: 'power2.out'
			});
		}
	};
}

/**
 * Kill all ScrollTrigger instances - call on component destroy
 */
export function killScrollTriggers(): void {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger - call when content changes
 */
export function refreshScrollTrigger(): void {
	ScrollTrigger.refresh();
}
