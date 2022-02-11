import {Greeatable, Named, Person} from './IPerson';

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

const person: Person = new Person('Max');
const getGreet = person.greet(ph);
const personOpt: Person = new Person();
const iGreeatableClass: Greeatable = new Person('Pupes');
const cGreeatableClass: Named = new Person('Pupes');
//cGreeatableClass.age = 40;
