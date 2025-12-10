
// Playwright example (JavaScript)
// Run: npm init -y && npm i -D @playwright/test
// npx playwright install
// npx playwright test example.spec.js

const { test, expect } = require('@playwright/test');

test('login flow - playwright (JS)', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('input[name=email]', 'user@example.com');
  await page.fill('input[name=password]', 'senha123');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/dashboard/);
});
