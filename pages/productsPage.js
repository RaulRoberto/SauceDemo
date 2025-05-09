export class ProductsPage {
    constructor(page) {
      this.page = page;
      this.productTitle = (name) => page.locator('.inventory_item_name', { hasText: name });
    }
  
    async validateLoaded() {
      await this.page.waitForSelector('.inventory_list');
    }
  
    async selectProduct(name) {
      await this.productTitle(name).click();
    }
  }