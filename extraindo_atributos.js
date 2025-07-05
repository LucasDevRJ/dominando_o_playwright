const { chromium } = require("playwright");

(async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/?_k=exl70y');

    const logoText = await page.$eval('.navbar-brand', el => el.innerText);
    console.log('Texto do logo = ', logoText);

    const logoHref = await page.$eval('.navbar-brand', el => el.href);
    console.log('href do logo = ', logoHref);

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length);
    console.log('Número de elementos = ', popularTagsCount);

    const content = await page.textContent('.navbar-brand');
    console.log('texto = ', content);

    const text = await page.innerText('.navbar-brand');
    console.log('texto = ', text);

    const html = await page.innerHTML('.feed-toggle');
    console.log('html = ', html);

    const href = await page.getAttribute('.navbar-brand', 'href');
    console.log('href = ', href);

    await browser.close();
}) ();