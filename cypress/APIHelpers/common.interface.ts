import { CommentClass, CommentError, IComment, ICommentError } from "./Comments/comments.controller";

export interface Verification {
    verifyPropertiesArePresent(response);
    verifyPropertyTypes(response);
    verifyValuesMatch(request);
};

export interface IVerifyErrors {
    verifyInvalidDataStatus(response);
    verifyInvalidDataResponseBody(response);
}

export function isComment(data: any): data is IComment{
    return (
        typeof data === 'object' &&
        data != null &&
        typeof data.postId == 'number' &&
        typeof data.id == 'number' &&
        typeof data.name == 'string' &&
        typeof data.email == 'string' &&
        typeof data.body == 'string'
    );
};

export function isCommentError(data: any): data is ICommentError{
   return (
    typeof data === 'object' &&
    data != null &&
    typeof data.message == 'string' &&
    typeof data.status == 'number'
   );
}

//Use factory pattern
export function verifyIsComment(response){
    if(isComment(response)){
        return new CommentClass(response);
    }else{
        throw new Error('Response is not of type comment!');
    }
};

export function verifyIsCommentError(response){
    if(isCommentError(response)){
        return new CommentError(response);
    }else{
        throw new Error('Response is not of type comment!');
    }
};
