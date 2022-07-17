<div>
	<slot />
</div>

<style>
	:root {
		--cdb-page-padding: var(--cdb-semantic-padding-large);
	}

	div {
		display: grid;
		height: 100%;
		isolation: isolate;
	}
</style>
