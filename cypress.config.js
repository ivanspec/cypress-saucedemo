const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
