const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('input[type="text"]', 'tomsmith');
    await page.press('input[type="text"]', 'Tab');
    await page.fill('input[type="password"]', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    const mensagemDeSucesso = await page.innerHTML('#flash');
    expect(mensagemDeSucesso).toMatch('You logged into a secure area!');

    await page.pdf({ path: 'logado.pdf' });

    await browser.close();
}) ();