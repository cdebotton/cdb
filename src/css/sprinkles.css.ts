import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

let responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { '@media': 'screen and (min-width: 1024px)' }
	},
	defaultCondition: 'mobile',
	properties: {
		display: [
			'block',
			'inline',
			'inline-block',
			'grid',
			'inline-grid',
			'flex',
			'inline-flex',
			'contents'
		],
		position: [
			'relative',
			'absolute',
			'fixed',
			'sticky',
			'static',
			'revert',
			'revert-layer',
			'inherit',
			'initial',
			'unset'
		],
		paddingTop: vars.space,
		paddingRight: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingInline: vars.space,
		marginTop: vars.space,
		marginRight: vars.space,
		marginBottom: vars.space,
		marginLeft: vars.space,
		marginInline: vars.space,
		rowGap: vars.space,
		columnGap: vars.space,
		width: vars.size,
		height: vars.size,
		fontSize: vars.fontSize,
		fontWeight: vars.fontWeights,
		letterSpacing: vars.tracking
	},
	shorthands: {
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		p: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		paddingX: ['paddingRight', 'paddingLeft'],
		pX: ['paddingRight', 'paddingLeft'],
		paddingY: ['paddingTop', 'paddingBottom'],
		pY: ['paddingTop', 'paddingBottom'],
		margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
		m: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
		marginX: ['marginRight', 'marginLeft'],
		mX: ['marginRight', 'marginLeft'],
		marginY: ['marginTop', 'marginBottom'],
		mY: ['marginTop', 'marginBottom'],
		gap: ['columnGap', 'rowGap'],
		w: ['width'],
		h: ['height']
	}
});

let systemProperties = defineProperties({
	properties: {
		color: vars.colors,
		backgroundColor: vars.colors,
		isolation: ['isolate', 'auto', 'inherit', 'initial', 'revert', 'revert-layer', 'unset'],
		borderRadius: vars.radii
	}
});

export let sprinkles = createSprinkles(responsiveProperties, systemProperties);
