const { chromium } = require('playwright');
const { test, expect} = require('@playwright/test');

test('basic test', async () => {
    const browser = await chromium.launch({headless:true})
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

    await page.fill('#user-name', 'standard_user');
    await page.press('#user-name', 'Tab');
    await page.type('#password', 'secret_sauce');
    await page.click("#login-button");

    const html = await page.innerHTML('#header_container > div.primary_header > div.header_label > div');
    expect(html).toBe('Swag Labs');

    // Screenshot
    await page.screenshot({path: 'SignIng.png', fullPage: true});

    await browser.close();
})