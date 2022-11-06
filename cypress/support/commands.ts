// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypress = require("cypress");
const { Commons } = require("./common");

/**
 * Sends a POST request
 * @param path: the request path after the default URL
 * @param body: the body that will be sent out with the request
 * @param headers? : optional parameter. If not passed the default headers will be used 
 */
Cypress.Commands.add('POST', (path: string, body: object, headers?) => {
    cy.request({
        method: Commons.httpMethods.POST, 
        url: path, 
        body: body,
        headers: headers = true ? headers : Commons.headers
      });
});

/**
 * Sends a GET request
 * @param path: the request path after the default URL
 * @param queryParams: the query parameters that will be appended after the URL
 * @param headers? : optional parameter. If not passed the default headers will be used 
 */
Cypress.Commands.add('GET', (path: string) => {
    cy.request({
        method: Commons.httpMethods.GET, 
        url: path
      });
});

/**
 * Sends a PUT request
 * @param path: the request path after the default URL
 * @param body: the body that will be sent out to modify the resource with the request
 * @param headers? : optional parameter. If not passed the default headers will be used 
 */
Cypress.Commands.add('PUT', (path: string, body: object, headers?) => {
    cy.request({
        method: Commons.httpMethods.PUT, 
        url: path, 
        body: body,
        headers: headers = true ? headers : Commons.headers
      });
});

/**
 * Sends a PATCH request
 * @param path: the request path after the default URL
 * @param body: the body that will be sent out to modify the resource with the request
 * @param headers? : optional parameter. If not passed the default headers will be used 
 */
Cypress.Commands.add('DELETE', (path: string, headers?) => {
    cy.request({
        method: Commons.httpMethods.DELETE, 
        url: path, 
        headers: headers = true ? headers : Commons.headers
      });
});

Cypress.Commands.add('VerifyPropertiesPresent', () => {

});