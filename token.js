const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.fill('input[placeholder = "Username"]', 'standard_user');
    await page.press('input[placeholder = "Username"]', 'Tab');
    await page.fill('input[placeholder = "Password"]', 'secret_sauce');
    await page.click('form >> "Login"');

    const tituloDaPagina = await page.innerHTML('.app_logo');
    expect(tituloDaPagina).toBe('Swag Labs');

    await context.storageState({ path: 'estado.json' });

    await browser.close();
})();