import * as colors from '@radix-ui/colors';
import { createGlobalTheme } from '@vanilla-extract/css';
// @import './_core.css';

// :root {

// 	--color-error-background: var(--crimson1);
// 	--color-error-subtle-background: var(--crimson2);
// 	--color-error-surface: var(--crimson3);
// 	--color-error-surface-hover: var(--crimson4);
// 	--color-error-surface-active: var(--crimson5);
// 	--color-error-sperator: var(--crimson6);
// 	--color-error-border: var(--crimson7);
// 	--color-error-border-hover: var(--crimson8);
// 	--color-error-solid: var(--crimson9);
// 	--color-error-solid-hover: var(--crimson10);
// 	--color-error-text-subtle: var(--crimson11);
// 	--color-error-text: var(--crimson12);
// 	--color-warning-background: var(--amber1);
// 	--color-warning-subtle-background: var(--amber2);
// 	--color-warning-surface: var(--amber3);
// 	--color-warning-surface-hover: var(--amber4);
// 	--color-warning-surface-active: var(--amber5);
// 	--color-warning-sperator: var(--amber6);
// 	--color-warning-border: var(--amber7);
// 	--color-warning-border-hover: var(--amber8);
// 	--color-warning-solid: var(--amber9);
// 	--color-warning-solid-hover: var(--amber10);
// 	--color-warning-text-subtle: var(--amber11);
// 	--color-warning-text: var(--amber12);
// 	--color-success-background: var(--mint1);
// 	--color-success-subtle-background: var(--mint2);
// 	--color-success-surface: var(--mint3);
// 	--color-success-surface-hover: var(--mint4);
// 	--color-success-surface-active: var(--mint5);
// 	--color-success-sperator: var(--mint6);
// 	--color-success-border: var(--mint7);
// 	--color-success-border-hover: var(--mint8);
// 	--color-success-solid: var(--mint9);
// 	--color-success-solid-hover: var(--mint10);
// 	--color-success-text-subtle: var(--mint11);
// 	--color-success-text: var(--mint12);
// 	--color-info-background: var(--sky1);
// 	--color-info-subtle-background: var(--sky2);
// 	--color-info-surface: var(--sky3);
// 	--color-info-surface-hover: var(--sky4);
// 	--color-info-surface-active: var(--sky5);
// 	--color-info-sperator: var(--sky6);
// 	--color-info-border: var(--sky7);
// 	--color-info-border-hover: var(--sky8);
// 	--color-info-solid: var(--sky9);
// 	--color-info-solid-hover: var(--sky10);
// 	--color-info-text-subtle: var(--sky11);
// 	--color-info-text: var(--sky12);

// ::-webkit-scrollbar {
// 	width: var(--space-2xs);
// 	height: var(--space-2xs);
// }

// ::-webkit-scrollbar-track {
// }

// ::-webkit-scrollbar-thumb {
// 	background-color: hsl(var(--color-surface));
// }

let baseFontSize = 1;
let fontScale = 1.414;
let fontSizes = [
	baseFontSize / fontScale,
	baseFontSize,
	baseFontSize * Math.pow(fontScale, 1),
	baseFontSize * Math.pow(fontScale, 2),
	baseFontSize * Math.pow(fontScale, 3),
	baseFontSize * Math.pow(fontScale, 4),
	baseFontSize * Math.pow(fontScale, 5)
];

let gridUnit = 0.5;

export let vars = createGlobalTheme(':root', {
	colors: {
		black: '#000',
		background: colors.indigoDark.indigo1,
		backgroundSubtle: colors.indigoDark.indigo2,
		surface: colors.indigoDark.indigo3,
		surfaceHover: colors.indigoDark.indigo4,
		surfaceActive: colors.indigoDark.indigo5,
		sperator: colors.indigoDark.indigo6,
		border: colors.indigoDark.indigo7,
		borderHover: colors.indigoDark.indigo8,
		solid: colors.indigoDark.indigo9,
		solidHover: colors.indigoDark.indigo10,
		textSubtle: colors.indigoDark.indigo11,
		text: colors.indigoDark.indigo12,
		brandBlue: colors.blueDark.blue9,
		brandPurple: colors.purpleDark.purple9
	},
	fontSize: {
		heading: `${fontSizes[6]}rem`,
		headingSm: `${fontSizes[4]}rem`,
		headingXs: `${fontSizes[3]}rem`,
		body: `${fontSizes[2]}rem`,
		bodySm: `${fontSizes[1]}rem`
	},
	fontWeights: {
		light: '300',
		normal: '400',
		bold: '600',
		black: '900'
	},
	radii: {
		none: '0',
		subtle: '3px',
		round: '50%',
		pill: '999px'
	},
	leading: {
		tight: '0.72',
		none: '1',
		heading: '1.25',
		body: '1.5'
	},
	space: {
		none: '0',
		xxs: `${gridUnit / 2}rem`,
		xs: `${gridUnit}rem`,
		sm: `${gridUnit * 2}rem`,
		md: `${gridUnit * 3}rem`,
		lg: `${gridUnit * 5}rem`,
		xl: `${gridUnit * 8}rem`,
		xxl: `${gridUnit * 12}rem`,
		xxxl: `${gridUnit * 24}rem`
	},
	size: {
		full: '100%'
	},
	tracking: {
		tightest: '-0.075em',
		tighter: '-0.025em',
		tight: '-0.0125em',
		none: '0',
		loose: '0.0125em',
		looser: '0.025em',
		loosest: '0.075em'
	}
});
