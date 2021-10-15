"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.n = n;
        this.employees = [];
        this.name = n;
    }
    //     console.log("Department (" + this.id + "):", this.name);
    //   }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.alastName = "SSSlast";
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("thus the type of Id:" + this.id);
    }
}
class AccountDepart extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastreport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastreport) {
            return this.lastreport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass a valid value: ');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountDepart.instance) {
            return this.instance;
        }
        this.instance = new AccountDepart('d2', []);
        return this.instance;
    }
    describe() {
        console.log("thus the type of Id:" + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastreport = text;
    }
    addEmployee(name) {
        if (name === 'Max') {
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
const acc1 = AccountDepart.getInstance();
const acc2 = AccountDepart.getInstance();
console.log("To get this Instance", acc1, acc2);
acc1.addReport("Something is there");
acc1.printReports();
acc1.addEmployee('Max');
acc1.addEmployee('Surya');
acc1.printEmployeeInfo();
acc1.mostRecentReport = 'New Report';
console.log("Most Recent Report is: " + acc1.mostRecentReport);
console.log(Department.alastName);
