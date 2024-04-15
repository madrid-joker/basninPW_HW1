const { defineConfig, devices } = require('@playwright/test');
const { baseUrls } = require('./test-data/baseUrls');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    baseURL: baseUrls.main,
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 70 * 1000, // this is a correct way to set time, nice
  expect: {
    timeout: 5000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'mobile',
      use: {
        ...devices['iPhone 13 Pro Max'],
      },
    },
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
