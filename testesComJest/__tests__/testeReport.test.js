describe('Testando o Report', () => {
    test('Primeiro Teste', async () => {
        await page.goto('https://the-internet.herokuapp.com/');
        const title = await page.title();
        expect(title).toBe('The Internet');

        await page.click('#content > ul > li:nth-child(1) > a');
        const h3 = await page.innerHTML('#content > div > h3');
        expect(h3).toBe('A/B Testing');

    }, 60000)
})