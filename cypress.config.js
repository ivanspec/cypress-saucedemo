import { defineConfig } from 'cypress';

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'reports'
  },
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
