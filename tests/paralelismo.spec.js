const { test, expect } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    console.log('worker: ' + process.env.PLAYWRIGHT_WORKER_INDEX);
});

test('Login', async ({ page }) => {
    const title = page.locator('#content > div > h2');
    await expect(title).toHaveText('Login Page');

    await page.fill('#username', 'tomsmith');
    await page.press('#username', 'Tab');
    await page.type('#password', 'SuperSecretPassword!');
    await page.click('button[class="radius"]');

    const text = await page.$eval('#content > div > h2', el => el.innerText);
    await expect(text).toBe('Secure Area');
});