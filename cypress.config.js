const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
