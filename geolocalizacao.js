const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const context = await browser.newContext({
        geolocation: { longitude: -43.2096, latitude: -22.9035 },
        permissions: ['geolocation'],
    });
    const page = await context.newPage();

    await context.grantPermissions(['geolocation']);
    await page.goto('https://www.maps.ie/coordinates.html');
    await page.click('#find-loc');
    await page.waitForTimeout(10000);

    await page.close();
    await browser.close();
}) ();