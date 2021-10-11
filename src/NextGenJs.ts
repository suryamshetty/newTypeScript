let userInput:unknown;
let userName:string;

userInput="Max";
let tutiname:string;
let namena:string;

if(typeof userInput === 'string'){
    userName=userInput;
    console.log(userName);
}


const addRS= (...number:number[])=>{
    return number.reduce((cR,CV)=>{
        return cR+CV;
    },0)
}

console.log("The Result is "+ addRS(5,2,4,6,5));

const hobbies=['Sports','Cooking'];
const activeHobbies=['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const [hobby1,hobby2]=hobbies;
console.log(hobbies, hobby1);

const per={
    fname:'surya',
    age:'33'
};

const {fname,age}=per;
console.log(per,fname,age);


const copiedPer={ ...per};

const added= (a:number=1,b:number=1)=> a+b;
console.log(added(20));

function generateError(message:string,code:number):never{
    throw{
        message:message,errorcode:code
    }
}

generateError('An Error Occured!',500);

