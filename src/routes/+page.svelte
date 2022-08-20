<script>
	import HeroItem from './HeroItem.svelte';
	import RecentPost from './RecentPost.svelte';

	import { formatDate } from '$lib/date';

	/** @type {import('./+page.server').Data} */
	export let data;

	let hero = data.posts[0];
	let posts = data.posts.slice(1);
</script>

<svelte:head>
	<title>Christian de Botton</title>
	<meta
		name="description"
		content="Software engineer, photographer, and videographer based in San Francisco, CA."
	/>
</svelte:head>

<div class="container">
	{#if hero}
		<HeroItem title={hero.title} category={hero.category} date={formatDate(hero.date)} />
	{/if}
	{#each posts as post (post)}
		<RecentPost
			url={post.url}
			title={post.title}
			category={post.category}
			date={formatDate(post.date)}
		/>
	{/each}
</div>

<style>
	:global(html) {
		scroll-padding: var(--space-6);
		scroll-snap-type: y mandatory;
	}
</style>
