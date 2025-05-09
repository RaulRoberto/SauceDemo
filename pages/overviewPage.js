export class OverviewPage {
    constructor(page) {
      this.page = page;
      this.finishButton = page.locator('#finish');
    }
  
    async finishOrder() {
      await this.finishButton.click();
    }
  }