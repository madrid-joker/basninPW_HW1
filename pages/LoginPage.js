class LoginPage {
  constructor(page) {
    this.page = page;
    this.phoneUser = page.locator('#login-form-phone');
    this.passwordUser = page.locator('#login-form-password');
    this.LoginBtnOnLoginForm = page.locator('#log-in-button');
  }

  async fillLoginPage({ phone, password }) {
    await this.phoneUser.fill(phone);
    await this.passwordUser.fill(password);
    await this.LoginBtnOnLoginForm.click();
  }

  //не хочу прибирати цей костиль, я навмисно залишив це як те що я намагався обійти проблему яку сам і створив
  async pressEnd() {
    await this.phoneUser.focus();
    await this.page.keyboard.press('End');
  }
}

module.exports = {
  LoginPage,
};
