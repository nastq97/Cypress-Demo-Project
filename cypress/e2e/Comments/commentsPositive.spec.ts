import { CommentClass, IComment } from "../../apiHelpers/Comments/comments.controller";
import { CommentFactory } from "../../apiHelpers/Comments/comments.factory";
import { Comment } from "../../apiHelpers/Comments/commentsAPI";
import { verifyIsComment } from "../../apiHelpers/common.interface";
import { Response } from "../../support/validations";

describe('Comments Positive Tests', () => {
    let postId;
    beforeEach(() => {
        //Create a post and use the postId
    });
    it('Create comments for a particular post', () => {
        //move this into a factory
        let requestBody =CommentFactory.CommentCreateDefaultRequestBody();
        let comment;

        Comment.createACommentForPost(postId, requestBody)
            .then(response => {
                //Check the status
                Response.verifyResponseStatus(response.status, 201);
                //Check the type of the response is IComment
                comment = verifyIsComment(response)

                //Verify the comment is created - GET it
                Comment.getAllCopmmentsOfAPost(comment.postId)
                .then(response => {
                    comment.verifyValuesMatch(requestBody);
                });
            });
    });

    it('Get all comments for a particular post', () => {
        let comment;
        Comment.getAllCopmmentsOfAPost(postId)
            .then(response => {
                //Check the status
                Response.verifyResponseStatus(response.status, 200)
                //Check types and values of all comments
                response.forEach(comment => {
                    verifyIsComment(comment);
                });
        });
    });

    it('Delete a created comment', () => {
        //Create a comment
        let requestBody = CommentFactory.CommentCreateDefaultRequestBody();
        let comment;

        Comment.createACommentForPost(postId, requestBody)
            .then(response => {
                //Verify status
                Response.verifyResponseStatus(response.status, 201)
                comment = new CommentClass(response);
                
                //Delete the comment
                Comment.deleteACommentForPost(comment.id)
                    .then(response => {
                        //Check the status
                        Response.verifyResponseStatus(response.status, 204);
                    });
                
                //Get the comment again - expect 404 - need to mock this
                
            });
        
    });
});