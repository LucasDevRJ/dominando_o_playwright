const {
    Given,
    When,
    Then,
    BeforeAll,
    AfterAll
} = require("cucumber");
const { expect, chromium } = require('@playwright/test');


let browser;
let context;
let page;

BeforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext();
    page = await context.newPage()
})

AfterAll(() => {
    browser.close();
})

Given('Navega até a página Saucedemo', async () => {
    await page.goto('https://www.saucedemo.com/')
    const title = await page.title()
    expect(title).toBe('Swag Labs')
})

When('Realiza o login', async () => {
    await page.fill('#user-name', 'standard_user')
    await page.press('#user-name', 'Tab')
    await page.type('#password', 'secret_sauce')
})

When('Clica no botão de login', async () => {
    await page.click("#login-button")
})

Then('A página deverá ter o título de {string}', async (string) => {
    const html = await page.innerHTML('#header_container > div.primary_header > div.header_label > div')
    expect(html).toMatch(string)
})