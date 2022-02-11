"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPerson_1 = require("./IPerson");
// const xgreet = (phrase: string, n: string) => {
//     return phrase + ' ' + n;
// };
const ph = "Hi, I'm";
// let person: IPerson = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         return phrase + this.name;
//     },
// };
const person = new IPerson_1.Person('Max');
const getGreet = person.greet(ph);
const personOpt = new IPerson_1.Person();
const iGreeatableClass = new IPerson_1.Person('Pupes');
const cGreeatableClass = new IPerson_1.Person('Pupes');
//cGreeatableClass.age = 40;
//# sourceMappingURL=interfaces.js.map