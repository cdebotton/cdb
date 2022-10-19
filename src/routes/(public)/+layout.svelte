<script>
	import Logo from './Logo.svelte';
	import { container, header, nav, list, item } from './layout.css';

	import { sprinkles } from '$css/sprinkles.css';
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

<div class={container}>
	<header class={header}>
		<Link let:active href="/" exact>
			<Logo {config} {active} />
		</Link>
		<nav class={nav}>
			<ul class={list}>
				<li class={item}>
					<Link let:active href="/code">
						<NavItem {config} {active} label="コード">Code</NavItem>
					</Link>
				</li>
				<li class={item}>
					<Link let:active href="/photography">
						<NavItem {config} {active} label="写真撮影">Photography</NavItem>
					</Link>
				</li>
				<li class={item}>
					<Link let:active href="/video">
						<NavItem {config} {active} label="ビデオ">Video</NavItem>
					</Link>
				</li>
			</ul>
			<ThemeButton />
		</nav>
	</header>
	<main class={sprinkles({ position: 'relative', display: 'grid', isolation: 'isolate' })}>
		<slot />
	</main>
</div>
