import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Error user deve acessar, mas pode encontrar comportamentos inesperados', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('error_user', 'secret_sauce');

  await expect(page.locator('.inventory_list')).toBeVisible();
});
