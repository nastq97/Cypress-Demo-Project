import { faker } from "@faker-js/faker";
import { CommentBody } from "./comments.controller";

export class CommentFactory {
    static CommentCreateDefaultRequestBody() : CommentBody{
        return {
            name: faker.name.firstName(),
            email: faker.company.name(),
            body: faker.lorem.text()
        }
    }
}