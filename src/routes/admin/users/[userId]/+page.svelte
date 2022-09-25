<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<div>
	<form method="POST" use:enhance>
		<legend class="item-lg">User {data.user.id}</legend>
		<div class="item-lg">
			<Input label="Email" name="email" bind:value={data.user.account.email} />
		</div>
		<div class="item-md">
			<Input label="First name" name="firstName" bind:value={data.user.firstName} />
		</div>
		<div class="item-md">
			<Input label="Last name" name="lastName" bind:value={data.user.lastName} />
		</div>
		<div class="item-sm">
			<button type="reset">Reset</button>
		</div>
		<div class="item-sm">
			<button type="submit">Save</button>
		</div>
	</form>
</div>
