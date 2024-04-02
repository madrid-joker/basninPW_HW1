const {expect} = require("@playwright/test");
exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.LoginBtnOnHomepage = page.locator("#loginButton");
        this.HomePageURL = "https://parimatch.com.gh";
        this.betList = page.locator(".outcome-v2");
        
        
    }

    async gotoHomePage() {
        await this.page.goto(this.HomePageURL);
        await this.page.waitForLoadState();
    }

    async gotoLoginPage() {
        await this.LoginBtnOnHomepage.click();
    }

    async checkLoggedIn(page) {
        await expect(page).toHaveURL(this.HomePageURL);
        await expect(page.locator(".user-info")).toBeVisible();
    }

    async placeBetEmptyBalance() {
        const min = 1;
        const countBetList = await this.betList.count();
            const randomElement = Math.floor(Math.random() * (countBetList - min + 1)) + min;;
            for (let i = 0; i <= countBetList; i++) {
                if (i == randomElement) {
                    await this.betList.nth(i).click();
                }
            }
    }

    async checkDepositButton(page) {
        const btnDeposit = this.page.locator(".button.button--deposit.button--regular")
        await expect(btnDeposit).toBeVisible();
    }
}

