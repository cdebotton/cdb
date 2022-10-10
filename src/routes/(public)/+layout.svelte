<script>
	import Logo from './Logo.svelte';

	import Link from '$lib/Link.svelte';
	import NavItem from '$lib/NavItem.svelte';
	import ThemeButton from '$lib/ThemeButton.svelte';

	/** @type {import('$lib/animation').AnimationConfig} */
	let config = {
		backgroundPosition: '0 -300vh',
		options: {
			duration: 7.5,
			easing: 'ease-in-out',
			repeat: Infinity,
			direction: 'alternate'
		}
	};
</script>

<header>
	<Link let:active href="/" exact>
		<Logo {config} {active} />
	</Link>
	<nav>
		<ul>
			<li>
				<Link let:active href="/code">
					<NavItem {config} {active} label="コード">Code</NavItem>
				</Link>
			</li>
			<li>
				<Link let:active href="/photography">
					<NavItem {config} {active} label="写真撮影">Photography</NavItem>
				</Link>
			</li>
			<li>
				<Link let:active href="/video">
					<NavItem {config} {active} label="ビデオ">Video</NavItem>
				</Link>
			</li>
		</ul>
		<ThemeButton />
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		position: fixed;
		z-index: 1;
		left: 0;
		display: grid;
		height: 100vh;
		padding: var(--space-md) var(--space-md);
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		background-color: var(--color-background);
		gap: var(--space-xs);
		grid-auto-flow: row;
		grid-template-rows: min-content auto;
	}

	nav {
		display: grid;
		align-content: space-between;
		padding: 0 0 0 var(--space-2xs);
		justify-items: start;
	}

	ul {
		display: grid;
		align-content: start;
		gap: var(--space-2xs);
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		flex-flow: row-reverse;
		align-items: flex-start;
		padding: 0 var(--space-2xs);
		color: var(--color-text);
		gap: var(--space-2xs);
		text-decoration: none;
	}

	main {
		position: relative;
		display: grid;
		padding: var(--space-lg) 0;
		isolation: isolate;
	}
</style>
