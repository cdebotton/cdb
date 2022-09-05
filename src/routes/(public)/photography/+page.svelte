<script>
	/** @type {import('./+page.server').Data} */
	export let data;
</script>

<svelte:head>
	<title>Photography | Christian de Botton</title>
</svelte:head>

<h2>{data.total} posts</h2>
<ul>
	{#each data.posts as post}
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
