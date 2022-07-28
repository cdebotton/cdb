<script>
	import { Canvas, Mesh, AmbientLight, PointLight } from '@threlte/core';
	import { useCursor } from '@threlte/extras';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let x = 0;
	let y = 0;

	function loop() {
		requestAnimationFrame(loop);
		x = y += 0.01;
	}

	onMount(() => {
		requestAnimationFrame(loop);
	});

	let { onPointerEnter, onPointerLeave, hovering } = useCursor('pointer');
</script>

<svelte:head>
	<title>Christian de Botton</title>
</svelte:head>

<div>
	<Canvas>
		<AmbientLight intensity={0.5} />
		<PointLight intensity={0.5} position={{ x: -2, y: 1, z: 4 }} />
		<Mesh
			interactive
			on:pointerenter={onPointerEnter}
			on:pointerleave={onPointerLeave}
			rotation={{ x, y }}
			geometry={new THREE.BoxBufferGeometry(1, 1, 1)}
			material={new THREE.MeshPhongMaterial({ color: $hovering ? 'red' : 'white' })}
		/>
	</Canvas>
</div>

<style>
	div {
		height: 100%;
	}
</style>
