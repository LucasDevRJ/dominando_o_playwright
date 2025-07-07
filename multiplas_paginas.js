const { chromium } = require('playwright');
const { expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login?_k=r4qral');
    await page.waitForLoadState();
    const title = await page.title();
    expect(title).toBe('Conduit');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('body > a')
    ]);
    await page.waitForLoadState();

    const url = await newPage.url();
    expect(url).toBe('https://github.com/gothinkster/react-redux-realworld-example-app');

    await browser.close();
}) ();