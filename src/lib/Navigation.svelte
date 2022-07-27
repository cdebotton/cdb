<nav>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	nav {
		display: grid;
		justify-content: center;
		padding: var(--space-2);
	}

	ul {
		display: flex;
		padding: 0;
		list-style: none;
	}
</style>
