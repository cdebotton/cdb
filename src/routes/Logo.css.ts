import { style } from '@vanilla-extract/css';

import { sprinkles } from '$css/sprinkles.css';
import { gradient } from '$css/utils.css';

export let container = style([
	sprinkles({
		display: 'inline-flex',
		pY: 'none',
		pX: 'xs',
		fontWeight: 'light',
		letterSpacing: 'tightest'
	}),
	{
		flexFlow: 'row-reverse'
	}
]);

let base = style([
	gradient,
	{
		lineHeight: '1',
		writingMode: 'vertical-lr'
	}
]);

export let text = style([
	base,
	sprinkles({
		fontSize: 'headingXs',
		fontWeight: 'black',
		letterSpacing: 'tighter'
	}),
	{
		textTransform: 'uppercase'
	}
]);

export let label = style([
	base,
	sprinkles({
		pY: 'sm',
		pX: 'none',
		fontSize: 'body'
	}),
	{
		opacity: 0,
		transform: 'translateX(-20px)',
		transition: 'all 175ms ease-in',
		selectors: {
			'&.active': {
				opacity: 1,
				transform: 'translateX(0)'
			}
		}
	}
]);
