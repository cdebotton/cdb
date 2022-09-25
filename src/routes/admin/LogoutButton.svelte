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
