abstract class Department {
  name: string;
  protected employees: string[] = [];
    static alastName:string="SSSlast";
  constructor(protected readonly id: string, public n: string) {
    this.name = n;
  
  }

  abstract describe(this: Department) :void;
//     console.log("Department (" + this.id + "):", this.name);
    
//   }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(){
      console.log("thus the type of Id:"+ this.id);
  }
}

class AccountDepart extends Department {
    private lastreport:string;
    private static instance:AccountDepart;

    get mostRecentReport(){
        if(this.lastreport){
            return this.lastreport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value:string){
        if(!value){
        throw new Error('Please pass a valid value: ');
        }
        this.addReport(value); 
    }

     private constructor(id: string, public reports: string[]) {
        super(id, "Accounting");
        this.lastreport=reports[0];
     }

     static getInstance(){
         if(AccountDepart.instance){
            return this.instance;
         }
         this.instance=new AccountDepart('d2',[]);
         return this.instance;
     }

     describe(){
    console.log("thus the type of Id:"+ this.id);
    }

    addReport(text: string) {
    this.reports.push(text);
    this.lastreport=text;
    }

    addEmployee(name:string){
    if(name==='Max'){
        return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("1", ["Surya"]);
console.log(it);
it.describe();

// const acc1 = new AccountDepart("d2", []);
const acc1= AccountDepart.getInstance();
const acc2= AccountDepart.getInstance();
console.log("To get this Instance" ,acc1,acc2);

acc1.addReport("Something is there");
acc1.printReports();
acc1.addEmployee('Max');
acc1.addEmployee('Surya');
acc1.printEmployeeInfo();
acc1.mostRecentReport= 'New Report';
console.log("Most Recent Report is: "+acc1.mostRecentReport);

console.log(Department.alastName);