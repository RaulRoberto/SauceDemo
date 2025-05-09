// pages/inventoryPage.js
import { expect } from '@playwright/test';

export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
  }

  async validateOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory/);
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems).toHaveCountGreaterThan(0);
  }

  async addFirstItemToCart() {
    const firstAddButton = this.page.locator('.inventory_item button').first();
    await firstAddButton.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }

  async openBurgerMenu() {
    await this.burgerMenu.click();
  }

  async logout() {
    await this.openBurgerMenu();
    await this.page.locator('#logout_sidebar_link').click();
  }

  async validateImageOfFirstItemIsVisible() {
    const image = this.page.locator('.inventory_item_img img').first();
    await expect(image).toBeVisible();
  }

  async getAllProductTitles() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }
}
