const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.simyo.nl',
    specPattern: "**/*.feature",//'cypress/e2e/features',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
     //on('file:preprocessor', addCucumberPreprocessorPlugin(on, config));
     on("file:preprocessor", cucumber());
    },
  },
}); 