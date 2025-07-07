const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    context.setDefaultTimeout(45000);
    const page = await context.newPage();
    page.setDefaultTimeout(45000);

    await page.goto('https://react-redux.realworld.io/#/login?_k=r4qral');
    const title = await page.title();
    expect(title).toBe('Conduit');

    await page.fill('input[type = "email"]', 'lucas@gmail.com');
    await page.press('input[type = "email"]', 'Tab');
    await page.type('input[type = "password"]', 'teste123');
    await page.click('form >> "Sign in"', { timeout: 3000 });

    await page.waitForTimeout(5000);
    await page.waitForSelector('.navbar-brand');
    
    await page.waitForLoadState();

    await browser.close();
})();