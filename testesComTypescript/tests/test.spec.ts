import {expect, test} from "@playwright/test";

test('Teste simples', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = page.getByText('Swag Labs');
    await expect(title).toContainText('Swag Labs');
})