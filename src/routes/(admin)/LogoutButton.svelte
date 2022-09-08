<script>
	import { applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	/** @type {svelte.JSX.EventHandler<SubmitEvent, HTMLFormElement>} */
	async function handleLogout(event) {
		let data = new FormData(event.currentTarget);
		let response = await fetch(event.currentTarget.action, {
			method: 'post',
			body: data
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		let result = await response.json();

		if (result.type === 'redirect') {
			await invalidateAll();
		}

		await applyAction(result);
	}
</script>

<form method="post" action="/admin/logout" on:submit|preventDefault={handleLogout}>
	<button type="submit">Logout</button>
</form>

<style>
	button {
		padding: var(--space-2);
		border: none;
		border-radius: 3px;
	}
</style>
