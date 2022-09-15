import { rest } from 'msw';

import { expect, test } from './test';

test('index page has expected h1', async ({ page, worker }) => {
	await worker.use(
		rest.get('/api/users', (_, response, context) =>
			response(context.delay(250), context.status(401))
		)
	);

	await page.goto('/');
	expect(await page.textContent('h1')).toBe('クリスチャン・デバッタン Christian de Botton');
});
