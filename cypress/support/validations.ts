export namespace Response {
    export function verifyResponseBody(responseBody, expectedBody){
        //Verify each property is in the body
        //should specify the type of the property-that it will always have a name and a value
        expectedBody.forEach(property => {
            expect(responseBody).to.have.property(property.name, property.value)
        });
    }

    export function verifyResponseHeaders(response){

    }

    export function verifyResponseStatus(actualStatus, expectedStatus){
        expect(actualStatus).to.eq(expectedStatus)
    }

    export function verifyResponseSchema(response){

    }
}
