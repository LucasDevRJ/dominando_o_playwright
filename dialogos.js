const { chromium } = require('playwright');
const { expect } = require("expect");

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
    await page.click('#alertexamples', { timeout: 5000 });

    page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        console.log('Dialog type:', dialog.type());
        await dialog.accept();
    });
    const mensagemAposClicarNoBotao = await page.innerHTML("#alertexplanation");
    expect(mensagemAposClicarNoBotao).toContain("You triggered and handled the alert dialog");

    await context.close();
    await browser.close();
}) ();