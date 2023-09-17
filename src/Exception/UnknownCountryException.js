export default class UnknownCountryException extends Error {
    constructor(message='Invalid country provided') {
        super(message);
    }
}