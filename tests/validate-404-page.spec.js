import { test, expect } from '@playwright/test';

test('Validate 404 Page', async ({ page }) => {
  await page.goto('https://rtcamp.com/asf');

  await expect(page.locator('#h-oops-the-page-can-t-be-found-1')).toHaveText("Oops! The page can’t be found.");
});