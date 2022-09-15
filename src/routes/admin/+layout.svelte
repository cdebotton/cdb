<script>
	import AdminLogo from './AdminLogo.svelte';
	import LogoutButton from './LogoutButton.svelte';
	import Nav from './Nav.svelte';
</script>

<header>
	<AdminLogo />
	<Nav />
	<LogoutButton />
</header>

<slot />

<style>
	header {
		display: grid;
		align-items: baseline;
		padding: var(--space-6) var(--space-6) var(--space-3);
		gap: var(--space-4);
		grid-template-columns: min-content auto min-content;
	}
</style>
