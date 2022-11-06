import { describe } from "mocha";
import { Commons } from "../../support/common";
import { Response } from "../../support/validations";

describe('Positive Tests for Creating a Post', () => {
  beforeEach(() => {
    cy.fixture('postsData.json').then((post) => {
      // "this" is still the test context object
      this.post = post.createSuccessfulPostBody
    })
  });

  it('Create a new post with valid data and verify schema', () => {
    cy.sendPostRequest(Commons.paths.post, this.post)
      .should( response => {
        //Should I extract the status codes now they are hardcoded
        Response.verifyResponseStatus(response.status, 201);
        Response.verifyResponseBody(response.body, [])
      });
  });

  it('Create a post with all users that have permission', () => {
    
  });


});

describe('Negative tests for Creating a Post', () => {
    it('Create a dublicated post', () => {
        
    });

    it('Attempt to Create a post without all required fields', () => {
        
    });

    it('Attempt to create a post with a wrong url', () => {
        
    });

    it('Attempt to create a post with incorrect headers', () => {
        
    });

});