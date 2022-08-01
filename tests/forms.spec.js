import { test, expect } from "@playwright/test";
import { siteurl } from "../utils/urls";

test.describe("Demo Test", () => {
  test("Test the forms", async ({ page }) => {
    //await loginUser();
    await page.goto(siteurl.url);

    await expect(page.locator(".site-title")).toHaveText(
      "QualityAssurance Site"
    );

    // Open the form post.
    await page.click('role=link[name="Form post"i]');

    await page.type("input[name='your-name']", "testname"); // Enter the name.

    await page.type("input[name='your-email']", "testemail@gmail.com"); // Enter the email ID.

    await page.type("input[name='your-subject']", "my subject"); // Enter the subject.

    await page.locator("select#month").selectOption("Mar"); // Select the dropdown.

    await page.click('role=checkbox[name="choice 2"i]'); // Click on checkbox.

    await page.click('role=radio[name="radio 2"i]'); // Click on radio button.

    await page.click('role=button[name="Submit"i]'); // Click on submit button.

    await expect(page.locator(".wpcf7-response-output")).toHaveText(
      "Thank you for your message. It has been sent."
    );
  });
});