const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');
    const logoText = await page.$eval('.navbar-brand', el => el.innerText);
    expect(logoText).toBe('conduit');

    const logoHref = await page.$eval('.navbar-brand', el => el.href);
    expect(logoHref).toBeDefined();

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length);
    expect(popularTagsCount).toBeGreaterThanOrEqual(5);
    expect(popularTagsCount).toBeLessThanOrEqual(30);
    expect(popularTagsCount).toEqual(20);

    const content = await page.textContent('.navbar-brand');
    const text = await page.innerText('.navbar-brand');
    const html = await page.innerHTML('.navbar-brand');
    expect(html).toMatch('Your Feed');
    expect(html).toMatch('Global Feeds');

    const href = await page.getAttribute('.navbar-brand', 'href');
    expect(href).not.toMatch('https://react-redux.realworld');

    await browser.close();
}) ();