import { chromium } from "@playwright/test";

export async function loginUser() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://qa-team.rt.gw/wp-login.php");

  await page.type("#user_login", "cool-wilson");

  await page.type("#user_pass", "GOEZZtOOwpZsxrhPTz");

  await page.click("#wp-submit");
}