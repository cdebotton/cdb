<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<div>
	<form method="POST" use:enhance>
		<legend class="item-lg">User {data.id}</legend>
		<div class="item-lg">
			<Input label="Email" name="email" bind:value={data.email} />
		</div>
		<div class="item-md">
			<Input label="First name" name="firstName" bind:value={data.firstName} />
		</div>
		<div class="item-md">
			<Input label="Last name" name="lastName" bind:value={data.lastName} />
		</div>
		<div class="item-sm">
			<button type="reset">Reset</button>
		</div>
		<div class="item-sm">
			<button type="submit">Save</button>
		</div>
	</form>
</div>
