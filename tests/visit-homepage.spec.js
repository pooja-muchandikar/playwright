import { test, expect } from '@playwright/test';

test('Homepage', async ({ page }) => {
  await page.goto('https://rtcamp.com/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('#h-good-work-good-people')).toHaveText('Good Work. Good People.');

  // Click on Our Work button
  await page.click('role=link[name="our work"i]');
  await expect(page.locator('.page-title')).toHaveText('Case Studies');
  await page.goBack();
  await expect(page.locator('#h-good-work-good-people')).toHaveText('Good Work. Good People.');
  
  //Subscribe to Newsletter
  await page.type('#input_121_2',"pooja");
  await page.click('#gform_submit_button_121');
  await expect(page).toHaveScreenshot();
  
});