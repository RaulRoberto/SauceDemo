import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { InventoryPage } from '../../pages/inventoryPage';

test('Problem user deve carregar imagens com erro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');

  await expect(inventoryPage.title).toHaveText('Products');

  const imageSrc = await page.locator('.inventory_item_img img').first().getAttribute('src');
  expect(imageSrc).toContain('sl-404'); // imagem quebrada propositadamente
});
