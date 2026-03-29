const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: 'https://metagenesis-core-site1.vercel.app',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    excludeSpecPattern: [
      'cypress/e2e/1-getting-started/*',
      'cypress/e2e/2-advanced-examples/*',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
