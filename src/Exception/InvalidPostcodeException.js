export default class InvalidPostcodeException extends Error {
    constructor(message='Invalid postcode provided') {
        super(message);
    }
}