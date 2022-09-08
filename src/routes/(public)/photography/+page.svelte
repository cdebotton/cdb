<script>
	/** @type {any} */
	export let data;
</script>

<svelte:head>
	<title>Photography | Christian de Botton</title>
</svelte:head>

<h2>{data.total} posts</h2>
<ul>
	{#each data.posts as post}
		<li>
			<a data-sveltekit-prefetch href={post.url}>{post.title}</a>
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
