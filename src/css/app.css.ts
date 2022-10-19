import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box'
});

globalStyle('*', {
	margin: 0,
	padding: 0,
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale'
});

globalStyle('html', {
	display: 'grid',
	height: '100%',
	backgroundColor: vars.colors.background,
	color: vars.colors.text
});

globalStyle('body', {
	fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
});

globalStyle('[data-app]', {
	display: 'contents'
});

globalStyle('img', {
	maxWidth: '100%'
});

globalStyle('[lang="ja"]', {
	font: `'Montserrat', 'Mplus 1p', 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'ＭＳ ゴシック', 'MS Gothic', sans-serif`
});

globalStyle('a', {
	color: 'currentColor'
});
