/// <reference types="cypress" />


  declare namespace Cypress {
      interface Chainable {
         POST(url, body): Promise<Element>
         GET(url): Promise<Element>
         PUT(url, body, headers): Chainable<Element>
         PATCH(url, body, headers): Chainable<Element>
         DELETE(url): Chainable<Element>
         VerifyPropertiesPresent(): Chainable<Element>
      }
    }
