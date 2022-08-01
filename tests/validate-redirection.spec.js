import { test, expect } from "@playwright/test";
import { siteurl } from "../utils/urls";

test.describe("Demo Test", () => {
  test("Test the redirections", async ({ page }) => {
    await page.goto(siteurl.url + "wp-admin/users.php");

    await expect(page.locator("label[for='user_login']")).toHaveText(
      "Username or Email Address"
    );
    4;
  });
});