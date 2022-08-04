import { test, expect } from "@playwright/test";
const dotenv = require("dotenv");
dotenv.config();

test.describe("Demo Test", () => {
  test("Create a new Post", async ({ page }) => {
    
    await page.goto("enter your site URL");

    await page.type("#user_login", process.env.USERNAME);

    await page.type("#user_pass", process.env.PASSWORD);

    await page.click("#wp-submit");

    // Click on post. 
    await page.click('role=link[name="Posts"i]');

    await page.click(".page-title-action");  // Click on add new. 

    await page.click('role=button[name="Close dialog"i]');

    await page.type(".editor-post-title__input", "Test Post");  //Enter the post title

     // Add new block. 
    await page.keyboard.press("ArrowDown");

    await page.keyboard.type("/list");  // Enter the post description and add the list block.

    await page.click('role=option[name="List"i]');

    await page.type('[id^="block-"]', "item1"); // Add the item in list. 

    // Click on Publish button. 
    await page.click(
      ".components-button.editor-post-publish-panel__toggle.editor-post-publish-button__button.is-primary"
    );
    //Double check, click again on publish button
    await page.click(
      ".components-button.editor-post-publish-button.editor-post-publish-button__button.is-primary"
    );

    page.locator(".components-snackbar");
  });
});