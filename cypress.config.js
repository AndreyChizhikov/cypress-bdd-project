const { defineConfig } = require('cypress');
const createEsbuildPlugin =require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://prozorro.gov.ua/en',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/e2e/support/commands.js',
    async setupNodeEvents(on, config) {
      // Add the cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config,
        {
          stepDefinitions: 'cypress/support/step_definitions/**/*.{js,mjs,ts,tsx}', // Ensure this matches your directory structure
        });
  

      // Use esbuild for bundling
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});