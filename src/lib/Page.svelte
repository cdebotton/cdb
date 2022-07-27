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
		isolation: isolate;
	}
</style>
