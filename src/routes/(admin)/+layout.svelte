<script>
	import '$css/app.css';
	import LogoutButton from './LogoutButton.svelte';
</script>

<header>
	<h1>Admin</h1>
	<LogoutButton />
</header>
<slot />

<style>
	header {
		display: grid;
		padding: var(--space-4);
		grid-template-columns: auto min-content;
	}

	h1 {
		font-size: var(--font-size-4);
		font-weight: 900;
		letter-spacing: var(--tracking--2);
		line-height: var(--leading-none);
		text-transform: uppercase;
	}
</style>
