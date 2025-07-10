const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext({ storageState: 'estado.json' });
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/inventory.html');
    const tituloDaPagina = await page.innerHTML('.app_logo');
    expect(tituloDaPagina).toBe('Swag Labs');

    await browser.close();
})();