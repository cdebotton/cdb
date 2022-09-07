<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';
</script>

<div>
	<form method="post" use:enhance>
		<fieldset>
			<legend>Login</legend>
			<Input name="email" label="Email" id="email" />
			<Input name="password" type="password" label="Password" id="password" />
		</fieldset>
		<button type="submit">Go</button>
	</form>
</div>

<style>
	div {
		display: grid;
		width: 100%;
		height: 100%;
		padding: var(--space-10);
		place-content: center;
	}

	form {
		display: grid;
		gap: var(--space-2);
	}

	fieldset {
		display: grid;
		padding: var(--space-2);
		border: none;
		gap: var(--space-2);
	}

	legend {
		padding: 0;
		font-size: var(--font-size-3);
		font-weight: 900;
	}
</style>
