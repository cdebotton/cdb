<script>
	import { applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	import '$css/app.css';

	/** @type {import('./$types').LayoutData} */
	export let data;

	/** @type {svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement>} */
	async function handleLogout(event) {
		let data = new FormData(event.currentTarget);
		let response = await fetch(event.currentTarget.action, {
			method: 'post',
			body: data
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		let result = await response.json();

		if (result.type === 'success') {
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<header>
	{#if data.loggedIn}
		<form method="post" action="/admin/logout" on:submit|preventDefault={handleLogout}>
			<button type="submit">Logout</button>
		</form>
	{/if}
</header>
<slot />
