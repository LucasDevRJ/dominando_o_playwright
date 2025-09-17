import { test, expect} from '@playwright/test';

test.describe('Mocking an API call', () => {

    test.only('mocks a fruit and does not call api', async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api/v1/fruits', async (route) => {
            const json = [{ name: 'Lime', id: 21 }];
            await route.fulfill({ json });
        });
        // Go to the page
        await page.goto('https://demo.playwright.dev/api-mocking');

        // Assert that the Strawberry fruit is visible
        await expect(page.getByText('Lime')).toBeVisible();
    });

});