"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const f = () => {
        console.log('OOPS');
        console.log('PUPS');
        console.log('Klops');
        const addNums = (n1, n2 = 10) => {
            return n1 + n2;
        };
        //!!!!!!!!!!!!!!!!
        const printOutput = (output) => console.log(output);
        printOutput(addNums(1, 25));
        printOutput(addNums(1));
        //spread
        const hobbies = ['Sports', 'Cooking'];
        const activeHobbies = ['Hiking', 'Fishing'];
        hobbies.push(...activeHobbies);
        const pushedHobbies = [...hobbies, ...activeHobbies];
        const person = { name: 'Max', age: 30 };
        const copiedPerson = Object.assign({}, person);
        const copiedRefPerson = person;
        copiedRefPerson.age = 200;
        const addVarArgs = (...numbers) => {
            return numbers.reduce((accum, val) => {
                return accum + val;
            }, 0);
        };
        const addNumbers = addVarArgs(5, 6, 7);
        const [hobby1, hobby2, ...remainingElem] = hobbies;
        const { name: firstName, age } = person;
    };
    f();
}
//# sourceMappingURL=ch-01.js.map