<script>
	import { applyAction, enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';
	import EnvelopeIcon from '$lib/icons/EnvelopeIcon.svelte';
	import KeyIcon from '$lib/icons/KeyIcon.svelte';

	/** @type {App.Error|null} */
	let error = null;

	/** @type {import('$app/forms').SubmitFunction} */
	function formEnhancer() {
		error = null;

		return async ({ result, form }) => {
			switch (result.type) {
				case 'redirect':
				case 'success':
					await applyAction(result);
					break;
				case 'error':
					form.reset();
					error = result.error;
					break;
			}
		};
	}
</script>

<div>
	<form method="POST" use:enhance={formEnhancer}>
		<Input name="email" label="Email" id="email">
			<EnvelopeIcon />
		</Input>
		<Input name="password" type="password" label="Password" id="password">
			<KeyIcon />
		</Input>
		<button type="submit">Login</button>
		<div>
			{#if error}
				<p class="error">{error.message}</p>
			{/if}
		</div>
	</form>
</div>

<style>
	div {
		display: grid;
		width: 100%;
		height: 100%;
		grid-template-columns: minmax(20px 200px);
		place-content: center stretch;
	}

	form {
		display: grid;
		padding: 4rem;
		gap: 1rem;
	}

	button {
		display: inline-block;
		width: 100%;
		padding: 0.5rem;
		border: none;
		background: linear-gradient(to bottom, hsl(200 50% 50%), hsl(210 50% 50%));
		border-radius: 3px;
		box-shadow: 0 0 20px hsl(0 0% 0% / 0.2);
		color: hsl(212 0% 98%);
		cursor: pointer;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: -0.025em;
	}
</style>
