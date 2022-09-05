<script>
	import Input from '$lib/Input.svelte';

	/** @type {string} */
	let email;

	/** @type {string} */
	let password;

	function handleSubmit() {
		fetch('/admin/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});
	}
</script>

<div>
	<form on:submit|preventDefault={handleSubmit}>
		<fieldst>
			<legend>Login</legend>
			<Input bind:value={email} label="Email" />
			<Input bind:value={password} type="password" label="Password" />
		</fieldst>

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
	}
</style>
