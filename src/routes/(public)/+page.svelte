<script>
</script>

<svelte:head>
	<title>Christian de Botton</title>
	<meta
		name="description"
		content="Software engineer, photographer, and videographer based in San Francisco, CA."
	/>
</svelte:head>

<h1>Oh, hey there!</h1>
<h2>It's my website!</h2>

<style>
	:global(html) {
		scroll-padding: var(--space-xl);
		scroll-snap-type: y mandatory;
	}

	h1 {
		margin: 0;
		font-size: var(--text-heading);
	}

	h2 {
		color: var(--color-text-subtle);
		font-size: var(--text-heading-sm);
	}
</style>
