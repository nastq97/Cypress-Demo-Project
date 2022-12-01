import { Comment } from "../../apiHelpers/Comments/commentsAPI";
import { verifyIsCommentError } from "../../apiHelpers/common.interface";
import { Response } from "../../support/validations";

describe('Comments Negative Tests', () => {
    let postsData;
    let postId;
    beforeEach(() => {
        cy.fixture('postsData.json').then(postsData => {
            postsData = postsData;
        });
        //Create a post
    });
    it('Attempt to Create a Comment with invalid data (400)', () => {
        let failedComment;
            postsData.forEach(inputSet => {
                Comment.createACommentForPost(postId, inputSet)
                    .then(response => {
                        //Check status
                        Response.verifyResponseStatus(response.status, 404)
                        failedComment = verifyIsCommentError(response);

                        //Can make a deep comaprison to check specific value and specify the valie in the data set
                        failedComment.verifyInvalidDataResponseBody();
                        
                    })
            });
    });
});