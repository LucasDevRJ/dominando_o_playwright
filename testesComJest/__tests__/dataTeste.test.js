data = require('../data/data.json');
describe('Data Driven', () => {
    beforeEach(async () => {
        await page.goto(data.url, { slowMo: 300 });
    });

    test('Teste com Data Driven', async () => {
        await page.type('#user-name', data.login, { slowMo: 300 });
        await page.type('#password', data.password, { slowMo: 300 });
        await page.click('#login-button', { slowMo: 300 });

    }, 60000)
})