import { test, expect } from '@playwright/test';

test('Exemplo de teste com TypeScript', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const title = await page.title();
  expect(title).toBe('The Internet');
});