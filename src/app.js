"use strict";
var userInput;
var userName;
userInput = "Max";
var tutiname;
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
function generateError(message, code) {
    throw {
        message: message, errorcode: code
    };
}
generateError('An Error Occured!', 500);
