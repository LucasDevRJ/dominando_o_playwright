const { chromium, webkit, firefox } = require('playwright');

(async () => {
    for (const browserType of [chromium, webkit, firefox]){
        const browser = await browserType.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://www.saucedemo.com/')
        await page.screenshot({path: `output/${browserType.name()}.png`});

        await page.fill('#user-name', 'standard_user')
        await page.press('#user-name', 'Tab')
        await page.type('#password', 'secret_sauce')
        await page.click('#login-button')

        await page.waitForTimeout(5000)
        console.log('Browser Type: ' + browserType.name)
        const logoText = await page.$eval('.app_logo', el => el.innerText)
        console.log('logoText: ' + logoText)

        const logoHref = await page.$eval('.app_logo', el => el.href)
        console.log('logoHref: ' + logoHref)

        const popularTagsCount = await page.$$eval('.app_logo', el => el.length)
        console.log('popularTagsCount: ' + popularTagsCount)


        const content = await page.textContent('.app_logo')
        console.log('content: ' + content)

        const text = await page.innerText('.app_logo')
        console.log('text: ' + text)

        const html = await page.innerHTML('.app_logo')
        console.log('html: ' + html)

        const href = await page.getAttribute('.app_logo', 'href')
        console.log('href: ' + href)

        await browser.close()
    }
})()