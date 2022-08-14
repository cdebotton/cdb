<script>
	/** @type {import('./index').Body['posts']} */
	export let posts;

	console.log(posts);
</script>

<svelte:head>
	<title>Photography | Christian de Botton</title>
</svelte:head>

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
