import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Locked out user deve ver mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});
