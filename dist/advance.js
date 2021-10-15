"use strict";
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add13(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
add13('Max', 'Schwarz');
const fetchUserData = {
    id: 'u1',
    name: 'Maxxy',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput2 = '';
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(storedData);
function printEmpInfo(emp) {
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
    loadCargo(amount) {
        console.log("Loading Truck..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle){
    // gauds
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const errorBag = {
    email: 'Not a valid email!',
    username: "Must start with a capital!",
    lastname: "should be present or required"
};
