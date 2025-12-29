<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center bg-(--bg-primary) px-4">
	<div class="text-center max-w-2xl">
		<!-- Error Code -->
		<h1 class="text-9xl font-display font-bold gradient-text mb-4">
			{$page.status || 404}
		</h1>

		<!-- Error Message -->
		<h2 class="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) mb-4">
			{$page.status === 404 ? 'Page Not Found' : 'Oops! Something went wrong'}
		</h2>

		<p class="text-lg text-(--text-secondary) mb-8">
			{$page.status === 404
				? "The page you're looking for doesn't exist or has been moved."
				: $page.error?.message || 'An unexpected error occurred.'}
		</p>

		<!-- Action Buttons -->
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Back to Home
			</a>

			<button
				onclick={() => window.history.back()}
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-(--border-color) text-(--text-primary) font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Go Back
			</button>
		</div>

		<!-- Decorative Elements -->
		<div class="mt-16 relative">
			<div class="absolute inset-0 flex items-center justify-center opacity-5" aria-hidden="true">
				<svg class="w-96 h-96" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
