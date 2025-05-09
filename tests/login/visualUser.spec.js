import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Visual user deve apresentar problemas de layout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('visual_user', 'secret_sauce');

  const logo = page.locator('.app_logo');
  const size = await logo.boundingBox();

  expect(size.width).toBeLessThan(10000); // ou qualquer valor esperado para o layout correto
});
