import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('vidya');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('r');
  await page.getByLabel('Year').selectOption('2008');
  await page.getByLabel('Year').selectOption('2001');
  await page.getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('689753268');
  await page.getByLabel('Day').selectOption('20');
  await page.getByLabel('Month').selectOption('6');
});