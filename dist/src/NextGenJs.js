"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userInput;
var userName;
userInput = "Max";
var tutiname;
var namena;
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
var addRS = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (cR, CV) {
        return cR + CV;
    }, 0);
};
console.log("The Result is " + addRS(5, 2, 4, 6, 5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobbies, hobby1);
var per = {
    fname: 'surya',
    age: '33'
};
var fname = per.fname, age = per.age;
console.log(per, fname, age);
var copiedPer = __assign({}, per);
var added = function (a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log(added(20));
function generateError(message, code) {
    throw {
        message: message, errorcode: code
    };
}
generateError('An Error Occured!', 500);
