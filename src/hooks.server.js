import { sequence } from '@sveltejs/kit/hooks';

import { handleAuth } from '$hooks/handleAuth.server';

/** @type {import('@sveltejs/kit').Handle} */
export let handle = sequence(handleAuth);
