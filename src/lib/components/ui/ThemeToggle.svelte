<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let isDark = $state(true); // Default to dark mode

	onMount(() => {
		// Check for saved preference, default to dark if no preference saved
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme === 'light') {
			isDark = false;
			document.documentElement.classList.remove('dark');
		} else {
			// Default to dark mode
			isDark = true;
			document.documentElement.classList.add('dark');
			if (!savedTheme) {
				localStorage.setItem('theme', 'dark');
			}
		}
	});

	function toggleTheme() {
		isDark = !isDark;
		updateTheme();
	}

	function updateTheme() {
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	onclick={toggleTheme}
	class="relative p-2 rounded-xl bg-(--bg-secondary) hover:bg-(--bg-tertiary) text-(--text-secondary) hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
	aria-label="Toggle {isDark ? 'light' : 'dark'} mode"
	title="Toggle {isDark ? 'light' : 'dark'} mode"
>
	<div class="relative w-5 h-5">
		<!-- Sun Icon -->
		<svg
			class="absolute inset-0 w-5 h-5 transition-all duration-300 {isDark
				? 'opacity-0 rotate-90 scale-0'
				: 'opacity-100 rotate-0 scale-100'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>

		<!-- Moon Icon -->
		<svg
			class="absolute inset-0 w-5 h-5 transition-all duration-300 {isDark
				? 'opacity-100 rotate-0 scale-100'
				: 'opacity-0 -rotate-90 scale-0'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	</div>
</button>
