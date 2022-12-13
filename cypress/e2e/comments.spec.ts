import {IPostCreation, postsApi} from "../apiHelpers/postsApi";
import {commentsApi, ICommentCreation} from "../apiHelpers/commentsApi";

let createdPostId: number;
describe("Comments endpoints tests", () => {
   beforeEach(() => {
       const postParams: IPostCreation = {
           title: `Test post #${new Date().getMilliseconds()}`,
           body: `I love JavaScript`,
           userId: 1
       };

       postsApi.createPost(postParams).then(response => {
           createdPostId =response.body.id;
       });
   });

    it('Should be possible to create a comment', () => {
        const commentParams: ICommentCreation = {
            postId: createdPostId,
            name: `Test User${new Date().getMilliseconds()}`,
            body: 'Great post!',
            email: `test.user${new Date().getMilliseconds()}@gmail.com`,
        }
        commentsApi.createComment(commentParams).then(response => {
           commentsApi.verifyCommentCreationResponse(response, commentParams);
        });
    });

    it('Should be possible to delete a comment', () => {
        const commentParams: ICommentCreation = {
            postId: createdPostId,
            name: `Test User${new Date().getMilliseconds()}`,
            body: 'Great post!',
            email: `test.user${new Date().getMilliseconds()}@gmail.com`,
        };

        commentsApi.createComment(commentParams).then(commentCreationResponse => {
            commentsApi.deleteComment(commentCreationResponse.body.id).then(commentDeletionResponse => {
                expect(commentDeletionResponse.status).eq(200);
                expect(commentDeletionResponse.body).to.deep.eq({});
            });
        });
    });
});