import { reporterConfig } from "./reporterConfig";

export const basicConfig = {
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout: 10000,
    viewportWidth: 1600,
    viewportHeight: 900,
    watchForFileChanges: false,
    ...reporterConfig,
    e2e: {
        setupNodeEvents(on: any, config: any) {
            return require("../cypress/plugins/index.js")(on, config);
        },
        specPattern: 'cypress/e2e/**/**.spec.ts',
        baseUrl: ''
    },
    env: {}
}