import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { ProductsPage } from '../pages/productsPage.js';
import { ProductDetailsPage } from '../pages/productDetailsPage.js';
import { CartPage } from '../pages/cartPage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';
import { OverviewPage } from '../pages/overviewPage.js';

test('Fluxo completo de compra no SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const products = new ProductsPage(page);
  await products.validateLoaded();
  await products.selectProduct('Sauce Labs Backpack');

  const details = new ProductDetailsPage(page);
  await details.validateDetails({
    name: 'Sauce Labs Backpack',
    price: '$29.99',
    description: 'carry.allTheThings() with the sleek' // parcial para evitar quebra se mudar
  });
  await details.addProductToCart();

  const cart = new CartPage(page);
  await cart.goToCart();
  await cart.proceedToCheckout();

  const checkout = new CheckoutPage(page);
  await checkout.fillCheckoutForm('Raul', 'Silva', '12345');

  const overview = new OverviewPage(page);
  await overview.finishOrder();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});