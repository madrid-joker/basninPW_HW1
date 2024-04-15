const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
class GeneralFlows {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
  }

  async loginWithUi({ phone, password }) {
    await this.homePage.gotoHomePage();
    await this.homePage.gotoLoginPage();
    await this.loginPage.pressEnd();
    await this.loginPage.fillLoginPage({ phone, password });
  }
}

module.exports = {
  GeneralFlows,
};
