import { test, expect } from "@playwright/test";
//import { loginUser } from "../utils/loginUser.spec";

test.describe( "Demo Test", () => {
  test( "Validate Homepage", async ({
    page,
  }) => {

    //await loginUser();
    await page.goto("https://pooja-rtmedia.rt.gw/wp-admin");

    await page.type( "#user_login", "automation" );

    await page.type( "#user_pass", "Xh68wNVw6c90" );

    await page.click("#wp-submit");

    await page.hover("#wp-admin-bar-site-name");

    await page.click("li[id='wp-admin-bar-view-site'] a[class='ab-item']");

    page.locator("#primary");

    await expect(page).toHaveScreenshot();
  });
});