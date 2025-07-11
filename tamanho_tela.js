const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ viewport: { width: 1600, height: 1200 } });
    const page = await context.newPage();
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto('https://playwright.dev/');
}) ();