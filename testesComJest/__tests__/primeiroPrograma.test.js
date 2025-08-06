describe('Post', () => {
    beforeAll(async () => {
        console.log('Before All');
    });

    beforeEach(async () => {
       console.log('Before Each');
    });

    test('Primeiro Teste', async () => {
        await page.goto('https://www.saucedemo.com/');
        const title = await page.title();
        expect(title).toBe('Swag Labs');

        await page.fill('#user-name', 'standard_user')
        await page.press('#user-name', 'Tab')
        await page.type('#password', 'secret_sauce')
        await Promise.all([
            page.waitForNavigation(),
            await page.click('#login-button')
        ]);
        console.log('Execução do primeiro teste');
    }, 60000)

    test('Segundo Teste', async () => {
        await page.goto('https://demoqa.com/');
        const title = await page.title();
        expect(title).toBe('DEMOQA');

        await page.click('#app > div > div > div.home-body > div > div:nth-child(2)');
        await page.click('#app > div > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div > ul');
        const h1 = await page.innerHTML('h1[class="text-center"]');
        expect(h1).toBe('Practice Form');

        console.log('Execução do segundo teste');

    }, 60000)

    test.jestPlaywrightSkip({ browsers: ["webkit", "firefox"] }, 'Terceiro Teste', async () => {
        await page.goto('https://the-internet.herokuapp.com/');
        const title = await page.title();
        expect(title).toBe('The Internet');

        await page.click('#content > ul > li:nth-child(11) > a');

        const h3 = await page.innerHTML('#content > div > h3');
        expect(h3).toBe('Dropdown List');

        await page.selectOption('#dropdown', '2');

        console.log('Execução do terceiro teste');
    }, 60000)

    afterAll(async () => {
        console.log('After All');
    });

    afterEach(async () => {
        console.log('After Each');
    });
})