const { test, expect } = require('@playwright/test');

test('first test', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log("Page's Title is: " + await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

