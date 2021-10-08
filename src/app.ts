let userInput:unknown;
let userName:string;

userInput="Max";
let tutiname:string;


if(typeof userInput === 'string'){
    userName=userInput;
    console.log(userName);
}

function generateError(message:string,code:number):never{
    throw{
        message:message,errorcode:code
    }
}

generateError('An Error Occured!',500);