import { CommentBody, CreateACommentResponse, DeleteACommentResponse, GetAllCommentsResponse, IComment } from "../Interfaces/comments.interface";

export const Comment = {
    getAllCopmmentsOfAPost: (postId: number): Promise<GetAllCommentsResponse> => cy.GET(`posts/${postId}/comments`),
    createACommentForPost: (postId: number, body: CommentBody): Promise<CreateACommentResponse> => cy.POST(`posts/${postId}/comments`, body),
    deleteACommentForPost: (commentId: number): Promise<DeleteACommentResponse> => cy.DELETE(`posts/${commentId}`)
}