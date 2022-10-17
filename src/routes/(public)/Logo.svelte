<script context="module">
	import { animation } from '$lib/animation';
</script>

<script>
	/** @type {import('$lib/animation').AnimationConfig} */
	export let config;
	export let active = false;
</script>

<h1>
	<span class:active use:animation={config} lang="ja" class="label">
		クリスチャン・デバッタン
	</span>
	<span use:animation={config} class="text">Christian de Botton</span>
</h1>

<style>
	h1 {
		display: inline-flex;
		flex-flow: row-reverse;
		padding: var(--space-none) var(--space-xs);
	}

	.label {
		padding: var(--space-sm) 0;
		font-size: var(--text-body);
		font-weight: 300;
		letter-spacing: var(--tracking-4);
		opacity: 0;
		transform: translateX(-20px);
		transition: all 175ms ease-in;
	}

	.label.active {
		opacity: 1;
		transform: translateX(0);
	}

	.text {
		font-size: var(--text-heading-xs);
		font-weight: 900;
		letter-spacing: var(--tracking--4);
		text-transform: uppercase;
	}

	.label,
	.text {
		background: var(--brand-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		background-position: 0 0;
		background-repeat: repeat;
		background-size: 400vw 400vh;
		color: transparent;
		line-height: 1;
		writing-mode: vertical-lr;
	}
</style>
