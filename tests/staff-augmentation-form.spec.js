import { test, expect } from '@playwright/test';

test('Validate Staff Augmentation form', async ({ page }) => {
  
  await page.goto('https://rtcamp.com/staff-augmentation/');

  await page.type("#input_69_9","test");
  await page.type("#input_69_2","test@");
  await page.selectOption("select#input_69_26","1 – 3 months");
  await page.selectOption("select#input_69_26","1 – 3 months");
  await page.type("#input_69_4","test");
  //await page.click('role=button[name="Hire WordPress Experts"i]');
  //await expect(page.locator('.gform_submission_error.hide_summary')).toHaveText('There was a problem with your submission. Please review the fields below.');
  
});