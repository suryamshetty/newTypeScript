// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("Template Factory");
//   return function <
//     T extends { new (...args: any[]): { nameOfThePerson: string } }
//   >(orginalConstructor: T) {
//     return class extends orginalConstructor {
//       constructor(..._: any[]) {
//         super();
//         console.log("Rendering Template");
//         const hookEl = document.getElementById(hookId);

//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.nameOfThePerson;
//         }
//       }
//     };
//   };
// }

// @Logger("loff")
// @WithTemplate("<h1>My App</h1>", "app")
// class PersonOne {
//   nameOfThePerson = "Maxxx";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new PersonOne();
// console.log(pers);

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, patytern: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator! Starting");
//   console.log(target);
//   console.log(patytern);
//   console.log(descriptor);
// }
// function Log3(target: any, patytern: string, descriptor: PropertyDescriptor) {
//   console.log("Function decorator! Starting");
//   console.log(target);
//   console.log(patytern);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | symbol, postion: number) {
//   console.log("Parameter decorator! Starting");
//   console.log(target);
//   console.log(name);
//   console.log(postion);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price- should be positive");
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// function Autobind(_: any, _2: symbol | string, des: PropertyDescriptor) {
//   const orginalMethod = des.value;
//   const adj: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = orginalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adj;
// }

// class Printer {
//   message = "This works!";
//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }
// const p = new Printer();
// const button = document.querySelector("button");
// button?.addEventListener("click", p.showMessage);

interface ValidatorConfig{
    [property:string]:{
        [validateProp:string]:string[]
    }
}

const registeredValidators: ValidatorConfig={};

function Required(target:any, propName:string){
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['required']
    };
}

function PositiveNumber(target:any, propName:string){
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['positive']
    };
}

function validate(obj:any){
    const objValidatorConfig= registeredValidators[obj.constructor.name];
    if (!objValidatorConfig){
        return true;
    }
    let isValid= true;
    for (const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch (validator){
                case 'required':
                    isValid=isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid=isValid && obj[prop] > 0;   
                    break;
            }
        }
    }
    return isValid;
}

class Course{
    @Required
    title:string;
    @PositiveNumber
    price:number;

    constructor(t:string,p:number){
        this.title=t;
        this.price=p;
    }
}

const courseForm= document.querySelector('form')!;

courseForm.addEventListener('submit',event =>{
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const titleV=titleEl.value;
    const priceV=+priceEl.value;

    const createCourse= new Course(titleV,priceV);

    if(!validate(createCourse)){
            alert('Invalid input, please try again!');
            return;
    }else{
        console.log(createCourse);
    }
});

