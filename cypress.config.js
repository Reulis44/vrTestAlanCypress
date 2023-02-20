const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ujd243',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
