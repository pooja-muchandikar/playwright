import { test, expect } from "@playwright/test";

test.describe("Demo Test", () => {

  test("Test the test text name button click", async ({ page }) => {
    await page.goto("https://rtcamp2-preprod.go-vip.net/rtcamp/");

    await expect(page.locator('#h-good-work-good-people')).toHaveText('Good Work. Good People.');

    await page.locator('text=Our Work').first().click();  // click on text with our work name

    await expect(page.locator('.page-title')).toHaveText('Case Studies');
     
  });

  test("Test the click on image test", async ({ page }) => {
    await page.goto("https://rtcamp2-preprod.go-vip.net/rtcamp/");

    await expect(page.locator('#h-good-work-good-people')).toHaveText('Good Work. Good People.');

    await page.click('role=img[name="Building Embedded Web Stories for WordPress - Case Study"i]');  // Click on Image

    await expect(page.locator('.entry-header.alignwide h1')).toHaveText('Building Embedded Web Stories for WordPress');
     
  });



  test("Test the click on element with link", async ({ page }) => {
    await page.goto("https://rtcamp2-preprod.go-vip.net/rtcamp/");

    await expect(page.locator('#h-good-work-good-people')).toHaveText('Good Work. Good People.');

    await page.click("a[href='https://easyengine.io/']");  // Click on element with link. 

    await expect(page.locator('h2:nth-child(1)')).toHaveText('The Easy Part! 😎');
     
  });

});