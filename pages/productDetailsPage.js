import { expect } from '@playwright/test';

export class ProductDetailsPage {
    constructor(page) {
      this.page = page;
      this.title = page.locator('.inventory_details_name');
      this.price = page.locator('.inventory_details_price');
      this.description = page.locator('.inventory_details_desc');
      this.addToCart = page.locator('button:has-text("Add to cart")');
    }
  
    async validateDetails({ name, price, description }) {
      await expect(this.title).toHaveText(name);
      await expect(this.price).toHaveText(price);
      await expect(this.description).toContainText(description);
    }
  
    async addProductToCart() {
      await this.addToCart.click();
    }
  }