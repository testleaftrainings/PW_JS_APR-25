import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright dev');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bdev%26sca_esv%3D2657bf4326bf223f%26source%3Dhp%26ei%3DZO47aIimKs675OUPh9vb8Ag%26iflsig%3DAOw8s4IAAAAAaDv8dPQaSv_FjVAn5nf3jPYCTW4KK1WA%26ved%3D0ahUKEwiI6N_Sx8-NAxXOHbkGHYftFo4Q4dUDCA8%26uact%3D5%26oq%3Dplaywright%2Bdev%26gs_lp%3DEgdnd3Mtd2l6Ig5wbGF5d3JpZ2h0IGRldjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI2CJQhwFYyhVwAXgAkAEAmAGpA6ABphCqAQk3LjUuMC4xLjG4AQPIAQD4AQGYAg-gAuoQqAIKwgIKEAAYAxjqAhiPAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICCBAAGIAEGLEDwgIIEC4YgAQYsQPCAhEQLhiABBixAxiDARjUAhiKBcICCxAAGIAEGLEDGIoFmAMG8QVuAhWfqlC8C5IHCTYuNi4xLjEuMaAHkU6yBwk1LjYuMS4xLjG4B-QQwgcGMC40LjExyAc5%26sclient%3Dgws-wiz%26sei%3DdO47aKemEcOXwcsPhujf0Qk&q=EhAkAUkAIxztNVEWGF-Hhb7mGPTc78EGIjBQo3pwD_l-hvjexUhuLUqt_s2Hl7p3vJqIZ6LS5lSKq-6Z7lDHOIqYK3GQRbpOV7UyAVJaAUM');
  await page.locator('iframe[name="a-a6zfq4r260md"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-a6zfq4r260md"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-a6zfq4r260md"]').contentFrame().locator('.rc-imageselect-tile').first().click();
  await page.locator('iframe[name="c-a6zfq4r260md"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-a6zfq4r260md"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
});