<nav>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	:root {
		--cdb-nav-gap: var(--cdb-semantic-padding-small);
		--cdb-nav-item-gap: var(--cdb-semantic-padding-small);
		--cdb-nav-padding: var(--cdb-semantic-padding-none);
	}

	nav {
		display: grid;
		justify-content: center;
		padding: var(--cdb-nav-gap);
	}

	ul {
		display: flex;
		padding: var(--cdb-nav-padding) 0;
		list-style: none;
	}
</style>
