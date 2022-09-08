<script>
	import '$css/app.css';
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
		padding: var(--space-4);
		gap: var(--space-4);
		grid-template-columns: min-content auto min-content;
	}
</style>
