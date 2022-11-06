import { IComment, ICommentError } from "../Interfaces/comments.interface";

export class CommentClass implements IComment{
    postId:number;
    id: number;
    name: string;
    email: string;
    body: string;
    
    constructor(data: IComment){
        this.postId = data.postId;
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.body = data.body;
    };

    verifyPropertiesArePresent(data:IComment){
        expect(data).to.have.property('postId');
        expect(data).to.have.property('id');
        expect(data).to.have.property('name');
        expect(data).to.have.property('email');
        expect(data).to.have.property('body');
    };

    verifyPropertyTypes(data :IComment){
        expect(data.postId).to.be.a('number');
        expect(data.id).to.be.a('number');
        expect(data.name).to.be.a('string');
        expect(data.email).to.be.a('string');
        expect(data.body).to.be.a('string');
    };

    verifyValuesMatch(requestBody: IComment){
        assert.equal(this.postId, requestBody.postId);
        assert.equal(this.id, requestBody.id);
        assert.equal(this.name, requestBody.name);
        assert.equal(this.email, requestBody.email);
        assert.equal(this.body, requestBody.body);
    };

};

export class CommentError implements ICommentError {
    message: string;
    status: number;

    constructor(data: ICommentError){
        this.message = data.message;
        this.status = data.verifyInvalidDataStatus;
    };

    verifyInvalidDataStatus(){
        expect(this.status).to.be.oneOf([400, 401, 402, 403, 404]);
    };

    verifyInvalidDataResponseBody(){
        expect(this.message).to.be.oneOf([]);
    };
}
