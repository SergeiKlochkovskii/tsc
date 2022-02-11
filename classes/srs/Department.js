"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingDepartment = exports.ITDepartment = exports.Department = void 0;
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
        this.name = name;
        this.id = id;
    }
    // constructor(n: string) {
    //     this.name = n;
    // }
    get fiscalYear() {
        return Department.fYear; //static access
    }
    getId() {
        return this.id;
    }
    addEmployee(newImployee) {
        this.employee.push(newImployee);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
exports.Department = Department;
Department.fYear = 2017;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        return 'This is ITDepartment';
    }
}
exports.ITDepartment = ITDepartment;
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'ACC');
        this.reports = reports;
        this.reports = reports;
        //
    }
    get resentReport() {
        ///more logic if we want
        return this.lastReport;
    }
    set recentReport(rep) {
        this.lastReport = rep;
        this.addReport(rep);
    }
    static getInstanse() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('ACC', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employee.push(name);
    }
    describe() {
        return 'This is AccountingDepartment';
    }
}
exports.AccountingDepartment = AccountingDepartment;
//# sourceMappingURL=Department.js.map