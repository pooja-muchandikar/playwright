import { test, expect } from "@playwright/test";

test.describe("Demo Test", () => {
  test("Compare Screenshots", async ({ page }) => {
    await page.goto("http://example.com/", { waitUntil: "networkidle" });

    await expect(page.locator("h1")).toHaveText(
      "Example Domain"
    );
    await expect(page).toHaveScreenshot({
      fullPage: true,
    });
  });
});
