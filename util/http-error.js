class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); // Add message property to Error
        this.code = errorCode; // Add code property to HttpError
    }
};

module.exports = HttpError;