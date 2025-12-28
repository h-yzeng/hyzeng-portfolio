<script lang="ts">
	let {
		title,
		highlight = '',
		subtitle = '',
		id,
		class: className = ''
	}: {
		title: string;
		highlight?: string;
		subtitle?: string;
		id?: string;
		class?: string;
	} = $props();
</script>

<div class="text-center mb-16 {className}">
	<h2 {id} class="text-4xl md:text-5xl font-display font-bold mb-4">
		{title}
		{#if highlight}
			<span class="gradient-text">{highlight}</span>
		{/if}
	</h2>
	<div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
	{#if subtitle}
		<p class="mt-6 text-lg text-(--text-secondary) max-w-2xl mx-auto">
			{subtitle}
		</p>
	{/if}
</div>
