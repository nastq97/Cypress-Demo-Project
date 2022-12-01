import { basicConfig } from "./basicConfig";
const cypress = require("cypress");

const devConfig = Object.assign(basicConfig);
devConfig.e2e.baseUrl = "https://jsonplaceholder.typicode.com";

cypress.open({
    config: {
        ...devConfig
    }
});

