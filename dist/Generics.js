"use strict";
// const names: Array<string> = []; // same as string[]
// const promise:Promise<string> = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('this is done!');
//     },2000);
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'surya' }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    let descriptionTex = 'Got no value.';
    console.log(element.length);
    if (element.length === 1) {
        descriptionTex = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionTex = 'Got' + element.length + 'elements';
    }
    return [element, descriptionTex];
}
console.log(countAndPrint(['Cook', 'Eat']));
function extractConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractConvert({ name: 'max' }, 'name'));
class DataStorage {
    constructor() {
        this.Data = [];
    }
    addItem(item) {
        this.Data.push(item);
    }
    removeItem(item) {
        if (this.Data.indexOf(item) === -1) {
            return;
        }
        this.Data.splice(this.Data.indexOf(item), 1);
    }
    getItems() {
        return [...this.Data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
// textStorage.removeItem('Max');
console.log(textStorage.getItems());
function createCourse(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'ANN'];
// names.push('Manu');
