import {IPostCreation, postsApi} from "../apiHelpers/postsApi";

describe('Posts endpoints tests', () => {
    it('Should be possible to get all posts', () => {
       postsApi.getAllPosts().then(response => {
          const firstPost = response.body[0];

          expect(response.status).eq(200);
          expect(response.body).to.have.length.above(10);
          expect(firstPost.body).to.exist.and.be.a('string');
          expect(firstPost.title).to.exist.and.be.a('string');
          expect(firstPost.id).to.exist.and.be.a('number');
          expect(firstPost.userId).to.exist.and.be.a('number');
       });
    });

    it('Should be possible to add a post', () => {
        const postParams: IPostCreation = {
            title: `Test post #${new Date().getMilliseconds()}`,
            body: `I love JavaScript`,
            userId: 1
        };

        postsApi.createPost(postParams).then(response => {
            postsApi.verifyPostCreationResponse(response, postParams);
        });
    });
});