type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;
type Universal = Combine & Numeric; // here Universal if of type number.

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:Combine ,b:Combine) {
    if (typeof a=== 'string' || typeof b === 'string'){
        return a.toString()+ b.toString();
    } 
    return a+b;
}

add('Max','Schwarz');

const fetchUserData = {
    id:'u1',
    name: 'Maxxy',
    job: { title: 'CEO', description:'My own company'}
};
console.log(fetchUserData?.job?.title);

const userInput2='';
const storedData = userInput2 ?? 'DEFAULT';
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmpInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmpInfo({ name: "Mann", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck");
  }

  loadCargo(amount: number) {
    console.log("Loading Truck..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle){
  // gauds
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flySpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flySpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving Speed: " + speed);
}
moveAnimal({ type: "bird", flySpeed: 10 });

// if('flySpeed' in animal){
//     console.log('Moving with speed: ' + animal.flySpeed);
// }

// const userInputElement =<HTMLInputElement>document.getElementById('user-input')!;
//  const userInputElement =document.getElementById('user-input')! as HTMLInputElement;

// const userInputElement =document.getElementById('user-input');

// if(userInputElement){
//     (userInputElement as HTMLInputElement).value= 'Hi There!';
// }

interface ErrorContainer{
    [prop:string]:string;
}

const errorBag:ErrorContainer={
    email:'Not a valid email!',
    username:"Must start with a capital!",
    lastname:"should be present or required"
}