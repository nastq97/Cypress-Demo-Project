import { Comment } from "../../APIHelpers/Comments/commentsAPI";
import { CommentClass, CommentError } from "../../APIHelpers/Controllers/comments.controller";
import {  IComment, ICommentError } from "../../APIHelpers/Interfaces/comments.interface";

describe('Create Comments Positive API Tests', () => {
    it('Create comments for a particular post', () => {
        let requestBody = {name: '', email: '', body: ''};

        //create a post in a hook before the tests 
        // merge controllers and interfaces
        Comment.createACommentForPost(1, requestBody)
            .then(response => {
                //add check and then create a new instance
                return response as Promise<IComment>;
            }).then(data => {
                const comment = new CommentClass(data);

            //Useless to have these verifications
                comment.verifyPropertiesArePresent(data);
                comment.verifyPropertyTypes(data);

            //Verify the comment is created - GET it
                Comment.getAllCopmmentsOfAPost(comment.postId)
                .then(response => {
                    comment.verifyValuesMatch(requestBody);
                })
                
        });// Clear out the verifications
    });
});

describe('Create Comments Negative API Tests', () => {
    it('Attempt to Create a Comment with invalid data (400)', () => {
        cy.fixture('postsData.json').then(inputData => {
            inputData.forEach(inputSet => {
                Comment.createACommentForPost(1, inputSet)
                    .then(response => {
                        return response as Promise<ICommentError>;
                    }).then(data => {
                        const failedComment = new CommentError(data);

                        failedComment.verifyInvalidDataResponseBody();
                        //Can make a deep comaprison to check specific value and specify the valie in the data set
                        failedComment.verifyInvalidDataStatus();
                    })
            });
        });
    });
});