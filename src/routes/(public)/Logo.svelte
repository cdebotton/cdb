<script context="module">
	import { label, text, container } from '../Logo.css';

	import { animation } from '$lib/animation';
</script>

<script>
	/** @type {import('$lib/animation').AnimationConfig} */
	export let config;
	export let active = false;
</script>

<h1 class={container}>
	<span class:active use:animation={config} lang="ja" class={label}>
		クリスチャン・デバッタン
	</span>
	<span use:animation={config} class={text}>Christian de Botton</span>
</h1>
