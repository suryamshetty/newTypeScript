interface AddFn {
  (a: number, b: number): number;
}
let add1: AddFn;
add1 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface named {
  readonly name?: string;
}

interface Greetable extends named {
  name?: string;
  greet(phrase: string): void;
}
class Person implements Greetable {
  //you can implement multiple interface
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
user1 = new Person();
console.log(user1);

user1.greet("L1-level Talent");
