# Inside that directory, you can run several commands:
1. npx playwright test
    Runs the end-to-end tests.
2. npx playwright test --ui
    Starts the interactive UI mode. 
3. npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome. 
4. npx playwright test example
    Runs the tests in a specific file. 
5. npx playwright test --debug
    Runs the tests in debug mode. 
6. npx playwright codegen
    Auto generate tests with Codegen.

# We suggest that you begin by typing:
    npx playwright test

# And check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - ./playwright.config.js - Playwright Test configuration