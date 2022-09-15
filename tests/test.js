import { test as base, expect } from '@playwright/test';
import { createWorkerFixture } from 'playwright-msw';

let test = base.extend({
	worker: createWorkerFixture()
});

export { test, expect };
