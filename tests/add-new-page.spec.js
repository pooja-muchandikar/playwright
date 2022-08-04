import { test, expect } from "@playwright/test";
const dotenv = require("dotenv");
dotenv.config();

test.describe( 'Demo Test', () => {
  test( 'Create a new page', async ( { page } ) => {
    //await loginUser();
    await page.goto("enter your site URL");

    await page.type("#user_login", process.env.USERNAME);

    await page.type("#user_pass", process.env.PASSWORD);

    await page.click("#wp-submit");

    // Click on Pages. 
    await page.click('role=link[name="Pages"i]');

    await page.click(".page-title-action");  // Click on add new. 

    await page.click('role=button[name="Close dialog"i]');

    await page.type(".editor-post-title__input", "Test Page");  //Enter the page title

    await page.keyboard.press("ArrowDown");

    await page.keyboard.type("Page description");  // Enter the page description. 


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