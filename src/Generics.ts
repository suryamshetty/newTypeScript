// const names: Array<string> = []; // same as string[]

// const promise:Promise<string> = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('this is done!');
//     },2000);
// });

function merge<T extends object,U extends object>(objA: T,objB:U){
    return Object.assign(objA,objB);
}

const mergedObj = merge( {name:'surya'} , {age:30} );
console.log(mergedObj.age);

interface Length{
    length:number;
}

function countAndPrint<T extends Length> (element:T): [T,string]{
    let descriptionTex = 'Got no value.';
    console.log(element.length);
    if(element.length === 1){
        descriptionTex = 'Got 1 element.'
    }
    else if(element.length > 1){
        descriptionTex= 'Got' + element.length + 'elements';
    }
    return [element,descriptionTex];
}

console.log(countAndPrint(['Cook','Eat']));

function extractConvert<T extends object, U extends keyof T> (obj:T,key:U){
    return 'Value: ' + obj[key];
}

console.log(extractConvert({name:'max'},'name'));

class DataStorage<T> {
    private Data:T[]=[];

    addItem(item:T){
        this.Data.push(item);
    }
    removeItem(item:T){
        if(this.Data.indexOf(item)=== -1){
            return;
        }
        this.Data.splice(this.Data.indexOf(item),1)
    }
    getItems(){
        return [...this.Data];
    }
}

const textStorage= new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
// textStorage.removeItem('Max');
console.log(textStorage.getItems());

interface CourseGoal {
    title:string;
    description:string;
    completeUntil: Date;
}

function createCourse(
    title:string,
    description:string,
    date:Date
): CourseGoal {
    let courseGoal:Partial< CourseGoal>  ={};
    courseGoal.title=title;
    courseGoal.description=description;
    courseGoal.completeUntil=date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]>=['Max','ANN'];
// names.push('Manu');