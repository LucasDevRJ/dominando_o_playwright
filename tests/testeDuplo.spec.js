const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
});

test.describe('Testes de login', () => {
    test('Primeiro teste do login', async ({ page }) => {

        await expect(page).toHaveTitle('Swag Labs');
        await expect(await page.screenshot()).toMatchSnapshot('swagLabs.png', { threshold: 0.2 });

        await page.fill('#user-name', 'standard_user');
        await page.press('#user-name', 'Tab');
        await page.type('#password', 'secret_sauce');
        await page.click('input[type="submit"]');

        const locator = page.locator('.app_logo');
        await expect(locator).toHaveText('Swag Labs', { timeout: 3000 });
    });

    test('Segundo teste do login', async ({ page }) => {
        await expect(page).toHaveTitle('Swag Labs');

        await page.fill('#user-name', 'standard_user');
        await page.press('#user-name', 'Tab');
        await page.type('#password', 'secret_sauce');
        await page.click('input[type="submit"]');

        const locator = page.locator('.app_logo');
        await expect(locator).toHaveText('Swag Labs', { timeout: 3000 });
    });
});
