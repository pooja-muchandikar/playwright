import { test, expect } from "@playwright/test";
import { siteurl } from "../utils/urls";
const dotenv = require("dotenv");
dotenv.config();

test.describe("Demo Test", () => {
  test("Create a new Post", async ({ page }) => {
    //await loginUser();
    await page.goto(siteurl.url + "wp-admin");

    await page.type("#user_login", "automation");

    await page.type("#user_pass", "Xh68wNVw6c90");

    await page.click("#wp-submit");

    // Click on Pages.
    await page.goto(siteurl.url + "wp-admin/media-new.php");

    await expect(page.locator("div[class='wrap'] h1")).toHaveText(
      "Upload New Media"
    ); //Wait for Upload media text

    await expect(page.locator(".drag-drop-info")).toHaveText(
      "Drop files to upload"
    ); //Wait for Upload media text

    page.locator("#plupload-browse-button").click();

    // Click on upload file and choose the Media file.
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      page.waitForEvent("filechooser"),
      // Opens the file chooser.
      page.locator('role=button[name="Select Files"i]').click(),
    ]);
    await fileChooser.setFiles(["uploads/img.jpeg"]); // Set the media filename.

    //Validate the media items.
    await expect(page.locator(".media-list-title")).toHaveText("Mountain valley during sunrise. Natural summer landscape"); // Expect the media name.
  });
});