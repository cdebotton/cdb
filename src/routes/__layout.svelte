<script>
	import '../css/app.css';

	import { crossfade } from 'svelte/transition';

	import Link from '$lib/Link.svelte';
	import { animation } from '$lib/animation';

	/** @type {import('$lib/animation').AnimationConfig} */
	let bg = {
		backgroundPosition: '0 -300vh',
		options: {
			duration: 7.5,
			easing: 'ease-in-out',
			repeat: Infinity,
			direction: 'alternate'
		}
	};

	let key = Symbol.for('active');
	let [send, receive] = crossfade({
		fallback() {
			return {
				duration: 75,
				css: (t) => `
					opacity: ${t};
					transform: scaleX(${t});
				`
			};
		}
	});
</script>

<div>
	<header>
		<Link let:active href="/" exact>
			<h1 class="logo-link">
				<span class:active use:animation={bg} lang="ja" class="logo-label">
					クリスチャン・デバッタン
				</span>
				<span use:animation={bg} class="logo-text">Christian de Botton</span>
			</h1>
		</Link>
		<nav>
			<ul>
				<li class="link-nav">
					<Link let:active href="/code">
						<span class="link-label">
							{#if active}
								<span class="indicator" in:receive={{ key }} out:send={{ key }} />
							{/if}
							<span class="link-label-text">コード</span>
						</span>
						<span class="link-text">Code</span>
					</Link>
				</li>
				<li class="link-nav">
					<Link let:active href="/photography">
						<span class="link-label">
							{#if active}
								<span class="indicator" in:receive={{ key }} out:send={{ key }} />
							{/if}
							<span class="link-label-text">写真撮影</span>
						</span>
						<span class="link-text">Photography</span>
					</Link>
				</li>
				<li class="link-nav">
					<Link let:active href="/video">
						<span class="link-label">
							{#if active}
								<span class="indicator" in:receive={{ key }} out:send={{ key }} />
							{/if}
							<span class="link-label-text">ビデオ</span>
						</span>
						<span class="link-text">Video</span>
					</Link>
				</li>
			</ul>
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: grid;
		padding: var(--space-5) var(--space-4);
		gap: var(--space-3);
		grid-template-columns: min-content auto;
	}

	header {
		display: grid;
		gap: var(--space-1);
		place-items: start;
	}

	h1 {
		display: inline-flex;
		flex-flow: row-reverse;
		padding: var(--space-4) var(--space-2);
	}

	.logo-label,
	.logo-text,
	.link-label,
	.link-text {
		line-height: 1;
		writing-mode: vertical-lr;
	}

	.logo-label {
		padding: var(--space-1) 0;
		font-size: var(--font-size-2);
		font-weight: 300;
		letter-spacing: var(--tracking-4);
		opacity: 0;
		transform: translateX(-20px);
		transition: all 175ms ease-in;
	}

	.logo-label.active {
		opacity: 1;
		transform: translateX(0);
	}

	.logo-text {
		font-size: var(--font-size-4);
		font-weight: 900;
		letter-spacing: var(--tracking--4);
		text-transform: uppercase;
	}

	.logo-label,
	.logo-text {
		background: linear-gradient(
			to bottom right,
			hsl(200 100% 46.6%) 0%,
			hsl(288.73 62.5% 55%) 45%,
			hsl(288.73 62.5% 55%) 55%,
			hsl(200 100% 46.6%) 100%
		);
		-webkit-background-clip: text;
		background-clip: text;
		background-position: 0 0;
		background-repeat: repeat;
		background-size: 400vw 400vh;
		color: transparent;
	}

	nav {
		display: contents;
	}

	ul {
		display: grid;
		padding: 0;
		gap: var(--space-1);
		list-style: none;
	}

	.link-nav {
		position: relative;
		display: flex;
		flex-flow: row-reverse;
		align-items: start;
		padding: 0 var(--space-1);
		color: var(--color-grayscale-8);
		gap: var(--space-1\2);
		text-decoration: none;
	}

	.link-label,
	.link-text {
		color: currentColor;
	}

	.link-text {
		padding: var(--space-3) var(--space-2);
		background-color: var(--color-grayscale-1);
		font-size: var(--font-size-2);
		font-weight: 900;
		letter-spacing: var(--tracking--2);
		text-transform: uppercase;
	}

	.link-label {
		position: relative;
		padding: var(--space-2) var(--space-1);
		margin: var(--space-1) 0;
		font-size: var(--font-size-1);
		letter-spacing: var(--tracking-4);
	}

	.link-label-text {
		position: relative;
		font-weight: 600;
	}

	.indicator {
		position: absolute;
		background-color: var(--color-grayscale-1);
		inset: 0;
		transform-origin: 0 0;
	}

	main {
		padding: var(--space-3) 0;
	}
</style>
