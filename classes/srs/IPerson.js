"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
let add;
add = (a, b) => {
    return a + b;
};
class Person {
    constructor(n = null) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        return ('call of the greet with: ' + phrase + ' ' + this.age + ' years old');
    }
}
exports.Person = Person;
//# sourceMappingURL=IPerson.js.map