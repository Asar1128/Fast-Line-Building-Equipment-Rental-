import { test, expect } from '@playwright/test';

test('homepage loads with correct meta tags', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Company Name/);
});

test('contact form is accessible', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByRole('form')).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
});
