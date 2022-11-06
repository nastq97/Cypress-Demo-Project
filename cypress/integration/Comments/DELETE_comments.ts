import { Comment } from "../../APIHelpers/Comments/commentsAPI";
import { CommentClass } from "../../APIHelpers/Controllers/comments.controller";
import { IComment } from "../../APIHelpers/Interfaces/comments.interface";

describe('Delete Comments Positive API Tests', () => {
    it('Delete a created comment', () => {
        //Create a comment
        let requestBody = {name: '', email: '', body: ''};

        Comment.createACommentForPost(1, requestBody)
            .then(response => {
                return response as Promise<IComment>;
            }).then(data => {
                const comment = new CommentClass(data);
                
                //Delete the comment
                Comment.deleteACommentForPost(comment.postId)
                    .then(response => {
                        
                    })
            });
        
    });
});