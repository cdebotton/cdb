<nav>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	:root {
		--cdb-nav-gap: var(--cdb-semantic-padding-medium);
		--cdb-nav-item-gap: var(--cdb-semantic-padding-small);
		--cdb-nav-padding: var(--cdb-semantic-padding-none);
	}

	ul {
		display: flex;
		padding: var(--cdb-nav-padding) 0;
		list-style: none;
	}
</style>
