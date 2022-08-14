<script>
	/** @type {Array<Object>} */
	export let posts;

	console.log(posts);
</script>

<svelte:head>
	<title>Christian de Botton</title>
	<meta
		name="description"
		content="Software engineer, photographer, and videographer based in San Francisco, CA."
	/>
</svelte:head>

<div class="container">
	<div class="page">
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />
	</div>
	<div class="page" />
	<div class="page" />
	<div class="page" />
	<div class="page" />
</div>

<style>
	:global(html) {
		scroll-padding: var(--space-6);
		scroll-snap-type: y mandatory;
	}
	.container {
		display: grid;
		gap: var(--gap);
		grid-auto-flow: row;
		--gap: var(--space-2);
		--page-padding: var(--space-5);
		--row-count: 6;
	}

	.page {
		display: grid;
		height: calc(100vh - var(--space-8));
		grid-auto-columns: calc(
			(100vh - (var(--gap) * (var(--row-count) - 1)) - (var(--page-padding) * 2)) / var(--row-count)
		);
		grid-auto-columns: calc(100vw - var(--offset-x) - 4rem);
		grid-auto-flow: column dense;
		grid-template-rows: repeat(var(--row-count), 1fr);
		scroll-snap-align: start;
	}

	.item {
		background-color: hsl(var(--color-grayscale-1) / 0.2);
		grid-column: span 2;
		grid-row: span 2;
	}

	.item:nth-of-type(1) {
		grid-column: span var(--row-count);
		grid-row: span var(--row-count);
	}

	.item:nth-of-type(3n + 3) {
		grid-column: span calc(var(--row-count) - 1);
		grid-row: span calc(var(--row-count) - 1);
	}
</style>
