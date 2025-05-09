export class CartPage {
    constructor(page) {
      this.page = page;
      this.cartButton = page.locator('.shopping_cart_link');
      this.checkoutButton = page.locator('#checkout');
    }
  
    async goToCart() {
      await this.cartButton.click();
    }
  
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }