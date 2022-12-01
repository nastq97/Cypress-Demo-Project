export interface ICommentCreation {
    "postId": number,
    "name": string,
    "email": string,
    "body": string
}

class CommentsApi {
    commentsUrl = `${Cypress.config('baseUrl')}/comments`

    createComment(body: ICommentCreation) {
        return cy.POST(this.commentsUrl, body);
    }

    deleteComment(commentId: number) {
        return cy.DELETE(`${this.commentsUrl}/${commentId}`);
    }

    verifyCommentCreationResponse(response: any, commentParams: ICommentCreation) {
        expect(response.status).eq(201);
        expect(response.body.postId).eq(commentParams.postId);
        expect(response.body.body).eq(commentParams.body);
        expect(response.body.email).eq(commentParams.email);
        expect(response.body.name).eq(commentParams.name);
        expect(response.body.id).to.exist.and.be.a('number');
    }
}

export const commentsApi = new CommentsApi();