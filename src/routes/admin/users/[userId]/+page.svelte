<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<form method="POST" use:enhance>
		<legend>User {data.user.id}</legend>

		<Input class="half" label="First name" name="firstName" bind:value={data.user.firstName} />
		<Input class="half" label="Last name" name="lastName" bind:value={data.user.lastName} />

		<button type="reset">Reset</button>
		<button type="submit">Save</button>
	</form>
</div>

<style>
	form {
		display: grid;
		width: 100%;
		max-width: 40rem;
		gap: var(--space-2);
		grid-template-columns: repeat(8, 1fr);
	}

	legend {
		font-size: var(--font-size-3);
		font-weight: 800;
		grid-column: span 8;
	}

	.container {
		padding: 0 var(--space-6);
	}

	form :global(.half) {
		grid-column: span 4;
	}

	button {
		padding: var(--space-2);
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}

	button[type='reset'] {
		background-image: linear-gradient(to bottom, #333, #222);
		color: var(--color-text);
		grid-column: 6 / span 1;
	}

	button[type='submit'] {
		background-image: linear-gradient(to bottom, #fff, #eee);
		grid-column: 7 / span 2;
	}
</style>
