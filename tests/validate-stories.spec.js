import { test, expect } from "@playwright/test";

test.describe("Demo Test", () => {
  test("Test the Stories block on rtcamp site", async ({ page }) => {
    await page.goto("https://rtcamp2-preprod.go-vip.net/rtcamp/careers/");

    await expect(page.locator("#h-careers")).toHaveText("Careers"); //Wait for careers page

    await page.click('role=img[name="Our Remote Setups"i]');

    await page.click(
      ".i-amphtml-story-button-container.next-container.i-amphtml-story-fwd-next"
    );

    await page.click(
      ".i-amphtml-story-button-container.next-container.i-amphtml-story-fwd-next"
    );

    await page.click(
      ".i-amphtml-story-button-container.next-container.i-amphtml-story-fwd-next"
    );

    await page.click(
      ".i-amphtml-story-button-container.next-container.i-amphtml-story-fwd-next"
    );

    await page.click(
      ".i-amphtml-story-button-container.i-amphtml-story-back-prev.prev-container"
    );


    await expect(page).toHaveScreenshot({
      fullPage: true,
    });


  });
});