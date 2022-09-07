<script>
	/** @type {import('./$types').LayoutData} */
	export let data;

	import { goto } from '$app/navigation';

	import '$css/app.css';

	function handleLogout() {
		fetch('/admin/logout', { method: 'POST' }).then(() => {
			goto('/admin/login');
		});
	}
</script>

<header>
	{#if data.loggedIn}
		<a on:click|preventDefault={handleLogout} href="/admin/logout">Logout</a>
	{/if}
</header>
<slot />
