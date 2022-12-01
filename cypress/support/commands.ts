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
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        POST: (path: string, body: object, headers?: object) => Chainable;
        GET: (path: string, headers?: object) => Chainable;
        DELETE: (DELETE: string, headers?: object) => Chainable;
        PUT: (path: string, body: object, headers?: object) => Chainable;
    }
}

Cypress.Commands.add('POST', (path, body, headers?) => {
    cy.request({
        method: 'POST',
        url: path, 
        body,
        headers
      });
});

Cypress.Commands.add('GET', (path, headers?) => {
    cy.request({
        method: 'GET',
        url: path,
        headers
      });
});

Cypress.Commands.add('PUT', (path, body, headers?) => {
    cy.request({
        method: 'PUT',
        url: path, 
        body: body,
        headers
      });
});

Cypress.Commands.add('DELETE', (path, headers?) => {
    cy.request({
        method: 'DELETE',
        url: path, 
        headers
      });
});
