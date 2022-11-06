import { Comment } from "../../APIHelpers/Comments/commentsAPI";
import { CommentClass } from "../../APIHelpers/Controllers/comments.controller";
import { IComment } from "../../APIHelpers/Interfaces/comments.interface";

describe('GET Commnets Positive API tests', () => {
    it('Get all comments for a particular post', () => {
        Comment.getAllCopmmentsOfAPost(1)
            .then(response => {
                return response as Promise<IComment>;
            }).then(data => {
                const comment = new CommentClass(data);

                //These checks are useless 
                comment.verifyPropertiesArePresent(data);
                comment.verifyPropertyTypes(data);
            });
    });
});
