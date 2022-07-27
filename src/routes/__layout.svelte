<script>
	import '../css/app.css';

	import LogoLink from '$lib/LogoLink.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import NavigationLink from '$lib/NavigationLink.svelte';
	import Page from '$lib/Page.svelte';
</script>

<Page>
	<header>
		<LogoLink label="クリスチャン・デバッタン" exact href="/">Christian de Botton</LogoLink>
		<Navigation>
			<NavigationLink href="/code">Code</NavigationLink>
			<NavigationLink href="/photography">Photography</NavigationLink>
			<NavigationLink href="/video">Video</NavigationLink>
		</Navigation>
	</header>
	<main>
		<slot />
	</main>
</Page>

<style>
	header {
		display: grid;
		align-items: baseline;
		padding: calc(var(--page-padding)) 0;
		grid-auto-flow: row;
	}

	main {
		padding: 0 var(--page-padding) var(--page-padding);
	}
</style>
