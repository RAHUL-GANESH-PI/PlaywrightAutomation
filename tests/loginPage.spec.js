const { test, expect } = require('@playwright/test');

test('first test', async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log("Page's Title is: " + await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});

test.only('Second test', async({browser})=>{
  const context = await browser.newContext();
  const page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("Learning@830$3mK2");
  //await page.locator("").selectOption("");
  await page.locator("#terms").click();
  await page.locator("#signInBtn").click();
  await expect(page).toHaveTitle("ProtoCommerce");
});

