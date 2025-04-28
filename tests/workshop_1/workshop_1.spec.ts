import { test } from 'playwright/test';


test.skip('Basic Navigation', async ({ page }) => {

    await page.goto('https://gitlab.com/');
    page.setDefaultTimeout(3000);  // unit: ms
    await page.reload();

})

test.skip('Interacting with Web Elements on Gitlab', async ({ page }) => {
    await page.click('#onetrust-accept-btn-handler'); // # means id
    await page.goto('https://gitlab.com/');

    // href is a link, By role allows to find elements uder the locator matching the role
    await page.locator('#be-navigation-desktop').getByRole('link', { name: 'Get free trial' }).click();

    // 
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Doe');

    await page.getByTestId('new-user-first-name-field').fill('John');
    await page.waitForTimeout(2000);
    await page.getByTestId('new-user-last-name-field').fill('Doe');

});

test('Using Various Locator Methods', async (page) => {

})