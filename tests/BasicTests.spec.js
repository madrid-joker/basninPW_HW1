const {test} = require("@playwright/test");
const {HomePage} = require("../pages/HomePage");
const {Login} = require("../pages/Login");
// я не знаю як зробити краще щоб я міг виконати методи цього класу в іншому тесті


test("Check loading of HomePage", async ({page}) => {
    const Home = new HomePage(page);
    await Home.gotoHomePage();
});

test("Login", async ({page}) => {
    const Home = new HomePage(page);
    const LoginPage = new Login(page);
    const phone = "+233111145454"
    const password = "Test123!";

    await Home.gotoHomePage();
    await Home.gotoLoginPage();
    await LoginPage.pressEnd(page);
    await LoginPage.fillLoginPage(phone, password);
    await Home.checkLoggedIn(page);
    await page.pause();
});

test.only("Check place bet with zero balance", async ({page}) => {
    const Home = new HomePage(page);
    const LoginPage = new Login(page);
    const phone = "+233111145454"
    const password = "Test123!";


    await Home.gotoHomePage();
    await Home.gotoLoginPage();
    await LoginPage.pressEnd(page);
    await LoginPage.fillLoginPage(phone, password);
    await Home.checkLoggedIn(page);
    await Home.placeBetEmptyBalance();
    await Home.checkDepositButton(page);
    await page.pause();

    
})