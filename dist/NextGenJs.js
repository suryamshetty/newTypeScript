"use strict";
let userInput;
let userName;
userInput = "Max";
let tutiname;
let namena;
if (typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}
const addRS = (...number) => {
    return number.reduce((cR, CV) => {
        return cR + CV;
    }, 0);
};
console.log("The Result is " + addRS(5, 2, 4, 6, 5));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1);
const per = {
    fname: 'surya',
    age: '33'
};
const { fname, age } = per;
console.log(per, fname, age);
const copiedPer = Object.assign({}, per);
const added = (a = 1, b = 1) => a + b;
console.log(added(20));
function generateError(message, code) {
    throw {
        message: message, errorcode: code
    };
}
generateError('An Error Occured!', 500);
