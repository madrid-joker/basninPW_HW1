exports.Login = class Login {

    constructor(page) {
        this.phoneUser = page.locator("#login-form-phone");
        this.passwordUser = page.locator("#login-form-password");
        this.LoginBtnOnLoginForm = page.locator("#log-in-button");
    }

    async fillLoginPage(phone, password) {
        await this.phoneUser.fill(phone);
        await this.passwordUser.fill(password);
        await this.LoginBtnOnLoginForm.click();
    }

    //не хочу прибирати цей костиль, я навмисно залишив це як те що я намагався обійти проблему яку сам і створив
    async pressEnd(page) {
        await this.phoneUser.focus();
        await page.keyboard.press("End");
    }
}



