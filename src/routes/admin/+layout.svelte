<script>
	import LogoutButton from './LogoutButton.svelte';
	import NavItem from './NavItem.svelte';
</script>

<div class="container">
	<header>
		<h1>
			<a data-sveltekit-prefetch href="/admin">Admin</a>
		</h1>
		<nav>
			<section>
				<h3>Content</h3>
				<ul>
					<NavItem href="/admin/users" title="Users">Users</NavItem>
				</ul>
			</section>
			<LogoutButton />
		</nav>

		<!-- <LogoutButton /> -->
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		display: grid;
		height: 100%;
		align-items: stretch;
		grid-auto-flow: row;
		grid-template-columns: 15rem auto;
	}

	header {
		display: grid;
		align-content: start;
		padding: var(--space-6) var(--space-3) var(--space-3);
		background-color: hsl(var(--color-surface));
		gap: var(--space-4);
	}

	nav {
		display: grid;
		justify-content: space-between;
		grid-auto-flow: column;
	}

	h1 {
		font-size: var(--font-size-3);
		font-weight: 900;
		letter-spacing: var(--tracking--4);
		line-height: var(--leading-tight);
		text-transform: uppercase;
	}

	a {
		text-decoration: none;
	}

	section {
		padding: 0 0 var(--space-3);
	}

	h3 {
		margin-bottom: var(--space-1);
		font-size: var(--font-size-1);
		font-weight: 900;
		letter-spacing: var(--tracking--2);
		text-transform: uppercase;
	}

	ul {
		display: grid;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	main {
		padding: var(--space-6);
	}
</style>
