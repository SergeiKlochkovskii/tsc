"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFetchedData = void 0;
const ATypes_1 = require("./ATypes");
const e1 = {
    name: 'Max',
    privileges: ['Create a server'],
    startDate: new Date(),
};
let prnEmployee = (0, ATypes_1.printEmployee)(e1);
const prnEmployeeEx = (0, ATypes_1.printEmployee)({ name: 'Max', startDate: new Date() });
const v1 = new ATypes_1.Car();
const v2 = new ATypes_1.Track();
const useVehicle = (vehicle) => {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(100);
    // }
    //alt way: instanceof
    if (vehicle instanceof ATypes_1.Track) {
        vehicle.loadCargo(100);
    }
};
useVehicle(v1);
useVehicle(v2);
//discriminated union
const brd = (0, ATypes_1.moveAnimal)({ type: 'bird', flyingSpeed: 500 });
const hrs = (0, ATypes_1.moveAnimal)({ type: 'horse', runningSpeed: 20 });
// typecast
// const myInput = <HTMLInputElement>document.getElementById('id')!;
// const myInput1 = document.getElementById('id');
// if (myInput) {
//     myInput.value = 'XXX';
// }
//
// if (myInput1) {
//     (myInput1 as HTMLInputElement).value = 'XXX';
// }
// indexing properties
const errorBag = {
    email: 'Not a valid email',
    userName: 'Must start with a capital letter',
};
// etc
function add(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
//optional chaining
exports.userFetchedData = {
    id: 'u1',
    userName: 'Max',
    job: { title: 'CEO', description: 'CEO of my own company' },
};
const ufd = exports.userFetchedData;
// const optUfd = userFetchedData.job;
const optUfd = 
//(userFetchedData.job &&  userFetchedData.job.title);  //doesn't work on ts
(_a = exports.userFetchedData === null || exports.userFetchedData === void 0 ? void 0 : exports.userFetchedData.job) === null || _a === void 0 ? void 0 : _a.title; // With ? and undefined/null it doesn't go deeper to the object
//nullish coalescing
const userInput = ''; // or null
const userStored = userInput || 'DEFAULT';
//but ?? works only for null/undefined. && also, may work for empty string/0 (are treated as false)
const userStored1 = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
//# sourceMappingURL=types.js.map