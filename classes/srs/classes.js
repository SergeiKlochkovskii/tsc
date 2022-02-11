"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Department_1 = require("./Department");
console.log('Line lasttvvvmmmc');
console.log('Line three r  mmmm c');
console.log('Line 222 444 ch666');
console.log('Line three 333 hhhhhhhhhhhhh ccmmmmm nnnnnnxxxxx');
const IT = new Department_1.ITDepartment('IT', ['Adm1', 'Adm2']);
IT.addEmployee('Max');
IT.addEmployee('Pups');
const desc = `${IT.describe()},  id: ${IT.getId()}`;
// const accDept: AccountingDepartment = new AccountingDepartment('id2', []);
//Private constructor
const accDept = Department_1.AccountingDepartment.getInstanse();
accDept.addReport('Something went wrong');
accDept.addEmployee('Max');
accDept.addEmployee('Pups');
const recentReport = accDept.resentReport;
accDept.recentReport = 'PupsoRep';
accDept.addEmployee(Department_1.Department.createEmployee('New emp created').name);
//# sourceMappingURL=classes.js.map