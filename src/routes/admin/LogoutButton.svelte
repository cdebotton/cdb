<script>
	import { applyAction } from '$app/forms';
	import { enhance } from '$app/forms';
</script>

<form
	method="post"
	action="/admin/logout"
	use:enhance={() => {
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<button title="Logout" type="submit">Logout</button>
</form>

<style>
	button {
		padding: var(--space-2);
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
</style>
