const { chromium } = require('playwright');
const { expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');
    const title = await page.title();
    expect(title).toBe('Conduit');

    await page.click('.navbar-brand');
    const url = await page.url();
    expect(url).toMatch('https://react-redux.realworld.io/#/?_k=');

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.reload();

    await browser.close();
}) ();
