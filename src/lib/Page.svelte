<script>
	function handleMove() {}
</script>

<div on:pointermove={handleMove}>
	<slot />
</div>

<style>
	div {
		--page-padding: var(--space-5);
		display: grid;
		height: 100%;
		grid-auto-rows: auto;
		grid-template-rows: min-content auto;
		isolation: isolate;
	}
</style>
