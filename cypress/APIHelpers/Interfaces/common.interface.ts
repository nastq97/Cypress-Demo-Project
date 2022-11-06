export interface Verification {
    verifyPropertiesArePresent(response);
    verifyPropertyTypes(response);
    verifyValuesMatch(request);
};

export interface IVerifyErrors {
    verifyInvalidDataStatus(response);
    verifyInvalidDataResponseBody(response);
}