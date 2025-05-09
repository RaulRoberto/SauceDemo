import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Usuário inválido deve exibir mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalid_user', 'secret_sauce');

  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
