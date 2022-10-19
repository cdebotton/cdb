import { style } from '@vanilla-extract/css';

import { vars } from './theme.css';

export let gradient = style({
	background: `linear-gradient(
    to bottom right,
    ${vars.colors.brandBlue} 0%,
    ${vars.colors.brandPurple} 45%,
    ${vars.colors.brandPurple} 55%,
    ${vars.colors.brandBlue} 100%
  )`,
	WebkitBackgroundClip: 'text',
	backgroundClip: 'text',
	backgroundPosition: '0 0',
	backgroundSize: '400vh 400vh',
	backgroundRepeat: 'repeat',
	color: 'transparent'
});
