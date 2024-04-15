const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { GeneralFlows } = require('../flows/GeneralFlows');
const { accounts } = require('../test-data/accounts.js');
test('Check loading of HomePage', async ({ page }) => {
  const Home = new HomePage(page);
  await Home.gotoHomePage();
  // need to add an assertion that some main page elements like: header, slider, events list are visible
});

test('Login', async ({ page }) => {
  const homePage = new HomePage(page);
  const generalFlows = new GeneralFlows(page);

  await generalFlows.loginWithUi({
    phone: accounts.main.phone,
    password: accounts.main.password,
  });
  await homePage.assertUserIsLoggedIn(page);
});

test('Check place bet with zero balance', async ({ page }) => {
  const homePage = new HomePage(page);
  const generalFlows = new GeneralFlows(page);

  await generalFlows.loginWithUi({
    phone: accounts.main.phone,
    password: accounts.main.password,
  });
  await homePage.placeBetEmptyBalance();
  await homePage.assertDepositButtonIsVisible(page);
});
