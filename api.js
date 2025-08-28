const { chromium } = require('playwright');
const { expect } = require('expect');
const { request } = require('@playwright/test');

(async() => {
    const context = await request.newContext( { baseURL: 'https://dummyjson.com' } );
    const response = await context.get('/users/1');
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.id).toBe(1);
    expect(responseBody.firstName).toBe('Emily');
    expect(responseBody.address.city).toBe('Phoenix');
})();