import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
    await page.goto('https://www.example.com')
    await expect(page.getByText('Example Domain')).toContainText('Example Domain')
    expect(await page.screenshot()).toMatchSnapshot('homePage.png');
})