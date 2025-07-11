const { chromium, devices } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const iPhone = devices['iPhone 11 Pro'];
    const context = await browser.newContext({...iPhone});
    const page = await context.newPage();

    await page.goto('https://www.maps.ie/coordinates.html');
}) ();