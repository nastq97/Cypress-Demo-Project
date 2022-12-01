import { basicConfig } from "./basicConfig";
const cypress = require("cypress");

export const devConfig = Object.assign(basicConfig);
devConfig.e2e.baseUrl = "https://jsonplaceholder.typicode.com/";

console.info(devConfig);

cypress.open({
    config: {
        ...devConfig
    }
});

