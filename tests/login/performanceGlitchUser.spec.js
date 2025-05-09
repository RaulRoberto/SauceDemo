import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('Performance glitch user deve acessar com possível lentidão', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const start = Date.now();
  await loginPage.login('performance_glitch_user', 'secret_sauce');
  const end = Date.now();

  await expect(page.locator('.inventory_list')).toBeVisible();
  console.log(`Tempo de carregamento: ${(end - start)}ms`);
});
