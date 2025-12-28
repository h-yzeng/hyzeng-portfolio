<script lang="ts">
	import type { Snippet } from 'svelte';

	type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
	type ButtonSize = 'sm' | 'md' | 'lg';

	let {
		variant = 'primary',
		size = 'md',
		href,
		download,
		type = 'button',
		onclick,
		class: className = '',
		children,
		ariaLabel
	}: {
		variant?: ButtonVariant;
		size?: ButtonSize;
		href?: string;
		download?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: () => void;
		class?: string;
		children: Snippet;
		ariaLabel?: string;
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary:
			'px-8 py-4 rounded-full gradient-bg text-white shadow-md hover:shadow-lg hover:scale-105',
		secondary:
			'px-8 py-4 rounded-full bg-primary-500 text-white shadow-md hover:shadow-lg hover:scale-105',
		outline:
			'px-8 py-4 rounded-full border-2 border-(--border-color) text-(--text-primary) hover:border-primary-500 hover:text-primary-500',
		ghost:
			'px-5 py-2.5 rounded-full text-(--text-secondary) hover:bg-primary-500/10 hover:text-primary-500'
	};

	const sizeClasses = {
		sm: 'px-5 py-2 text-sm',
		md: 'px-8 py-4 text-base',
		lg: 'px-10 py-5 text-lg'
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
</script>

{#if href}
	<a {href} {download} class={classes} aria-label={ariaLabel} role="button">
		{@render children()}
	</a>
{:else}
	<button {type} {onclick} class={classes} aria-label={ariaLabel}>
		{@render children()}
	</button>
{/if}
