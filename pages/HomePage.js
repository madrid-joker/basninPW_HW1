const { expect } = require('@playwright/test');
const { baseUrls } = require('../test-data/baseUrls');
class HomePage {
  constructor(page) {
    this.page = page;
    this.loginBtnOnHomepage = page.locator('#loginButton');
    this.betList = page.locator('.outcome-v2');
    this.btnDeposit = page.locator('.button.button--deposit.button--regular');
    this.userInfo = page.locator('.user-info');
  }

  async gotoHomePage() {
    await this.page.goto('/');
    await this.page.waitForLoadState();
  }

  async gotoLoginPage() {
    await this.loginBtnOnHomepage.click();
  }

  async placeBetEmptyBalance() {
    const min = 1;
    const countBetList = await this.betList.count();
    const randomElement =
      Math.floor(Math.random() * (countBetList - min + 1)) + min; // better to move this to a helper file and a separate function
    for (let i = 0; i <= countBetList; i++) {
      if (i === randomElement) {
        await this.betList.nth(i).click();
      }
    }
  }

  async assertDepositButtonIsVisible() {
    await expect(this.btnDeposit).toBeVisible();
  }

  async assertUserIsLoggedIn() {
    await expect(this.page).toHaveURL(baseUrls.main);
    await expect(this.userInfo).toBeVisible();
  }
}

module.exports = {
  HomePage,
};
