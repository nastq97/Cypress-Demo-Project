
export interface IPostCreation {
    title: string,
    body: string,
    userId: number
}

class PostsApi {
    postsUrl = `${Cypress.config('baseUrl')}/posts`

    getAllPosts() {
        return cy.GET(this.postsUrl);
    }

    createPost(body: IPostCreation) {
        return cy.POST(this.postsUrl, body);
    }

    verifyPostCreationResponse(response: any, postParams: IPostCreation) {
        expect(response.status).eq(201);
        expect(response.body.title).eq(postParams.title);
        expect(response.body.body).eq(postParams.body);
        expect(response.body.userId).eq(postParams.userId);
        expect(response.body.id).to.exist.and.be.a('number');
    }
}

export const postsApi = new PostsApi();