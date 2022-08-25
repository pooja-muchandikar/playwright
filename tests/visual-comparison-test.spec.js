import { test, expect } from '@playwright/test';

test('capture and compare the screenshot', async ({ page }) => {
  await page.goto('https://example.com/');

  await expect(page).toHaveTitle(/Example Domain/);

  await expect(page.locator('body div h1')).toHaveText( 'Example Domain' );

  await expect(page).toHaveScreenshot('img.png');

  await page.goto('https://github.com/');

  //await page.click( 'role=link[name=/More information/i]' );
  
  await expect(page).toHaveScreenshot('img.png');
 
});