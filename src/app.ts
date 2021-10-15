function Logger(logString:string) {
    return function(constructor: Function){
  console.log(logString);
  console.log(constructor);
    };
}

function WithTemplate(template:string,hookId:string){
    return function(constructor:any){
        const hookEl= document.getElementById(hookId);
        const p = new constructor();

        if(hookEl){
            hookEl.innerHTML=template;
            hookEl.querySelector('h1')!.textContent=p.nameOfThePerson;
        }
    }
}

@WithTemplate('<h1>My App</h1>','app')
class PersonOne {
  nameOfThePerson = "Maxxx";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new PersonOne();

console.log(pers);
