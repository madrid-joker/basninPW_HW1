exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.mainContent = page.getByRole();
        
    }

    async gotoHomePage() {
        await this.page.goto("https://parimatch.ng");
        await this.page.waitForLoadState();
        console.log("test works");
    }
}

