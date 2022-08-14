<script>
	/** @type {import('./index').Post[]} */
	export let posts;
	/** @type {number} */
	export let total;
</script>

<svelte:head>
	<title>Photography | Christian de Botton</title>
</svelte:head>

<h2>{total} posts</h2>
<ul>
	{#each posts as post}
		<li>
			<a sveltekit:prefetch href={post.url}>{post.title}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
		list-style: none;
	}

	a {
		color: currentColor;
		text-decoration: none;
	}
</style>
