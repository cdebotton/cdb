<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul>
	{#each data.users as user (user.id)}
		{@const fullName = `${user.firstName} ${user.lastName}`}
		<li>
			<a title={`${fullName} (${user.id})`} href={`/admin/users/${user.id}`}>
				{fullName}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
</style>
