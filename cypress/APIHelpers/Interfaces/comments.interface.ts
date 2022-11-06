import { IVerifyErrors, Verification } from "./common.interface";

export interface GetAllCommentsResponse  {};
export interface CommentBody  {
    name: string;
    email: string;
    body: string;
};
export interface CreateACommentResponse  {
    postId:number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export interface DeleteACommentResponse {

};

export interface IComment extends Verification{
    postId:number;
    id: number;
    name: string;
    email: string;
    body: string;

    verifyPropertiesArePresent(response);
    verifyPropertyTypes(response);
    verifyValuesMatch(request);
};

export interface ICommentError extends IVerifyErrors {
    message: string;
    status: number;

    verifyInvalidDataStatus(response);
    verifyInvalidDataResponseBody(response);
}




