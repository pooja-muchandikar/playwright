import { test, expect } from "@playwright/test";

test.describe("Demo Test", () => {
  test("Compare Screenshots", async ({ page }) => {
    await page.goto("https://rtcamp.com", { waitUntil: "networkidle" });

    await expect(page.locator("#h-good-work-good-people")).toHaveText(
      "Good Work. Good People."
    );
    await expect(page.locator("#h-case-studies")).toHaveText("Case Studies");

    await expect(page).toHaveScreenshot({
      fullPage: true,
    });
  });
});
