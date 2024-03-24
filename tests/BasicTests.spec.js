const {test} = require("@playwright/test");
const {HomePage} = require("../pages/HomePage");

test("Check loading of HomePage", async ({page}) => {
    const Home = new HomePage(page);

    await Home.gotoHomePage();
});