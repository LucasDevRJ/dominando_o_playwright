Login = require('../__tests__/pageObjects/login');

describe('Post', () => {

    const login = new Login()

    beforeAll(async () => {
        await page.goto('https://www.saucedemo.com/')
    })

    test.jestPlaywrightSkip({ browsers: ["webkit", "firefox"] }, 'Sign In', async () => {
        const title = await page.title()
        expect(title).toBe('Swag Labs')

        // Enter credentials to sign in
        const email = await login.email()
        await email.fill('standard_user')
        await email.press('Tab')
        await login.password_fill('secret_sauce')
        await login.signInButton_click()

        // Verify successful sign in
        const header = await page.innerHTML('#header_container > div.primary_header > div.header_label > div')
        expect(header).toMatch('Swag Labs')
    })

    afterAll(async () => {
        await browser.close()
    })

})