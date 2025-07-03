const { chromium } = require('playwright');

( async() => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.podologasocorro.com.br');
    await page.screenshot({ path:'printDaPagina.png' });
    await browser.close();
}) ();