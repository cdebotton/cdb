import { style } from '@vanilla-extract/css';

import { sprinkles } from '$css/sprinkles.css';

export let container = style([
	sprinkles({
		display: 'grid',
		gap: 'xl',
		pY: 'xl',
		pX: 'lg',
		w: 'full',
		h: 'full'
	}),
	{
		maxWidth: '1280px',
		alignItems: 'start',
		gridTemplateColumns: 'min-content auto'
	}
]);

export let header = style([
	sprinkles({
		position: 'sticky',
		display: 'grid',
		h: 'full',
		gap: 'xs'
	}),
	{
		WebkitBackdropFilter: 'blur(8px)',
		backdropFilter: 'blur(8px)',
		gridAutoFlow: 'row',
		gridTemplateRows: 'min-content auto'
	}
]);

export let nav = style([
	sprinkles({
		display: 'grid',
		paddingLeft: 'xxs'
	}),
	{
		alignContent: 'space-between',
		justifyItems: 'start'
	}
]);

export let list = style([
	sprinkles({
		display: 'grid',
		gap: 'xxs'
	}),
	{
		listStyle: 'none',
		alignContent: 'start'
	}
]);

export let item = style([
	sprinkles({
		position: 'relative',
		display: 'flex',
		paddingX: 'xxs',
		color: 'text',
		gap: 'xxs'
	}),
	{
		flexFlow: 'row-reverse',
		alignItems: 'flex-start',
		textDecoration: 'none'
	}
]);
