import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { sprinkles } from '$css/sprinkles.css';
import { vars } from '$css/theme.css';
import { gradient } from '$css/utils.css';

export let content = style([sprinkles({ position: 'relative' })]);

let base = style([
	sprinkles({
		color: 'background'
	}),
	{
		lineHeight: '1',
		writingMode: 'vertical-lr'
	}
]);

export let text = style([
	base,
	gradient,
	sprinkles({
		position: 'relative',
		paddingX: 'xs',
		paddingY: 'sm',
		borderRadius: 'subtle',
		fontSize: 'bodySm',
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
		position: 'relative',
		paddingY: 'xs',
		paddingX: 'xxs',
		backgroundColor: 'text',
		fontSize: 'bodySm',
		fontWeight: 'bold',
		letterSpacing: 'looser'
	}),
	{
		opacity: 0,
		transform: `translateX(${calc(vars.space.md).negate()})`,
		transitionDuration: '175ms',
		transitionProperty: 'transform, opacity',
		transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		selectors: {
			'&.active': {
				opacity: '1',
				transform: 'translateX(0)'
			}
		}
	}
]);

export let indicator = style([
	sprinkles({ position: 'relative', backgroundColor: 'text' }),
	{
		inset: 0,
		transformOrigin: '0 0'
	}
]);
