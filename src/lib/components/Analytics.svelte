<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const GA_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

	onMount(() => {
		if (browser && GA_ID) {
			// Create and append the Google Analytics script
			const script1 = document.createElement('script');
			script1.async = true;
			script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
			document.head.appendChild(script1);

			// Initialize gtag
			const script2 = document.createElement('script');
			script2.innerHTML = `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GA_ID}');
			`;
			document.head.appendChild(script2);
		}
	});
</script>
