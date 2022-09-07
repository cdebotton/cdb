<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '$lib/Input.svelte';

	/** @type {string} */
	let email;

	/** @type {string} */
	let password;

	$: redirectUri = $page.url.searchParams.get('redirect_uri') ?? '/admin';

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
		}).then(() => {
			goto(redirectUri);
		});
	}
</script>

<div>
	<form method="post" on:submit|preventDefault={handleSubmit}>
		<fieldset>
			<legend>Login</legend>
			<Input bind:value={email} label="Email" id="email" />
			<Input bind:value={password} type="password" label="Password" id="password" />
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
