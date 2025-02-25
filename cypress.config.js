const { defineConfig } = require('cypress');

module.exports = defineConfig({
  videoCompression: false,
  video: true,
  defaultCommandTimeout: 30000,
  e2e: {
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
