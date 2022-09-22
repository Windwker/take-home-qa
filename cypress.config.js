const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    screenshotOnRunFailure :true,
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir:"cypress/report/mochawesome-report",
        overwrite:false,
        html:true,
        json:false
    },
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        specPattern: "cypress/e2e/features/*.feature",
        baseUrl: "https://www.tryminded.com/",
    },
});