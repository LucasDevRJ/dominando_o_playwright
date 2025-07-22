const { test, expect } = require('@playwright/test');

test('Teste de Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(title).toBe('Swag Labs');

    await page.fill('#user-name', 'standard_user');
    await page.press('#user-name', 'Tab');
    await page.type('#password', 'secret_sauce');
    await page.click('input[type="submit"]');

    const logo = await page.$eval('.app_logo', el => el.innerText);
    expect(logo).toBe('Swag Labs');
});