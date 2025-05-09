import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { InventoryPage } from '../../pages/inventoryPage';
import { ProductDetailsPage } from '../../pages/productDetailsPage';

test.describe('Standard User', () => {
  const username = 'standard_user';
  const password = 'secret_sauce';

  test('Deve fazer login e acessar detalhes do produto', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const detailsPage = new ProductDetailsPage(page);

    await loginPage.goto();
    await loginPage.login(username, password);

    await expect(inventoryPage.title).toHaveText('Products');

    const firstTitle = await inventoryPage.productTitle.first().innerText();
    const firstPrice = await inventoryPage.productPrice.first().innerText();
    const firstDesc = await inventoryPage.productDescription.first().innerText();

    await inventoryPage.productTitle.first().click();
    await detailsPage.validateDetails({ name: firstTitle, price: firstPrice, description: firstDesc });
  });

  test('Deve adicionar e remover item do carrinho', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(username, password);

    const addButton = page.locator('[data-test^="add-to-cart"]');
    await addButton.first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    const removeButton = page.locator('[data-test^="remove"]');
    await removeButton.first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('Deve fazer logout com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(username, password);

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL(/.*saucedemo\.com/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});
