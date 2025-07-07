const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login?_k=r4qral');
    await page.waitForLoadState();
    const title = await page.title();
    expect(title).toBe('Conduit');

    await page.fill('input[type = "email"]', 'lucas@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'teste123');
    await page.click('form >> "Sign in"');

    await page.screenshot({ path: 'print.png', fullPage: true });

    await browser.close();
})();