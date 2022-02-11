import { AccountingDepartment, Department, ITDepartment } from './Department';
import {userFetchedData} from './types';

console.log('Line lasttvvvmmmc');


console.log('Line three r  mmmm c');
console.log('Line 222 444 ch666');

console.log('Line three 333 hhhhhhhhhhhhh ccmmmmm nnnnnnxxxxx');

const IT: Department = new ITDepartment('IT', ['Adm1', 'Adm2']);
IT.addEmployee('Max');
IT.addEmployee('Pups');
const desc = `${IT.describe()},  id: ${IT.getId()}`;
// const accDept: AccountingDepartment = new AccountingDepartment('id2', []);
//Private constructor
const accDept: AccountingDepartment = AccountingDepartment.getInstanse();
accDept.addReport('Something went wrong');
accDept.addEmployee('Max');
accDept.addEmployee('Pups');
const recentReport = accDept.resentReport;
accDept.recentReport = 'PupsoRep';
accDept.addEmployee(Department.createEmployee('New emp created').name);

