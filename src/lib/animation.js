import { animate } from 'motion';

/** @typedef {import('@motionone/dom').MotionKeyframesDefinition & { options?: import('@motionone/dom').AnimationOptionsWithOverrides }} AnimationConfig */

/**
 * @param {HTMLElement} node
 * @param {AnimationConfig} props
 * @returns {import('svelte/action').ActionReturn<AnimationConfig>}
 */
export function animation(node, { options = {}, ...keyframes }) {
	let controls = animate(node, keyframes, options);

	return {
		update({ options, ...keyframes }) {
			controls.stop();
			controls = animate(node, keyframes, options);
		},
		destroy() {
			controls.stop();
		}
	};
}
