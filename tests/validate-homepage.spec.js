import { test, expect } from "@playwright/test";
//import { loginUser } from "../utils/loginUser.spec";
const dotenv = require( 'dotenv' )
dotenv.config()



test.describe( "Demo Test", () => {
  test( "Validate Homepage", async ({
    page,
  }) => {

    //await loginUser();
    await page.goto("https://pooja-rtmedia.rt.gw/wp-admin");

    await page.type( "#user_login", process.env.USERNAME );

    await page.type( "#user_pass", process.env.PASSWORD );

    await page.click("#wp-submit");

    await page.hover("#wp-admin-bar-site-name");

    await page.click("li[id='wp-admin-bar-view-site'] a[class='ab-item']");

    page.locator("#primary");

    await expect(page).toHaveScreenshot();
  });
});