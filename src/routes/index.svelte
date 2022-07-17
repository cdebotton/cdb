<script>
	import { AmbientLight, Canvas, Mesh, PointLight, useFrame } from '@threlte/core';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import * as THREE from 'three';

	let y = 0;
	let scale = spring(1);

	function step() {
		requestAnimationFrame(step);
		y += 0.01;
	}

	onMount(() => step());
</script>

<svelte:head>
	<title>Christian de Botton</title>
</svelte:head>

<div>
	<Canvas>
		<AmbientLight intensity={0.6} />
		<PointLight intensity={0.6} position={{ x: -2, y: 2, z: 4 }} />
		<Mesh
			interactive
			on:pointerenter={() => void ($scale = 2)}
			on:pointerleave={() => void ($scale = 1)}
			scale={$scale}
			rotation={{ y }}
			geometry={new THREE.BoxBufferGeometry(1, 1, 1)}
			material={new THREE.MeshPhongMaterial({ color: 'red' })}
		/>
	</Canvas>
</div>

<style>
	div {
		position: absolute;
		z-index: -1;
		inset: 0;
	}
</style>
