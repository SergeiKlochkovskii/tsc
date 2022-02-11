"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("./utils"));
var add = function (n1, n2) {
    return n1 + n2;
};
var p1 = function () {
    var number1 = 5;
    var number2 = 2.8;
    var t = typeof number2;
    var result = add(number1, number2);
};
var p2 = function () {
    // const person: {
    //     name: string,
    //     age: number,
    //     hobbies: (number | string | boolean) [],
    //     roles: [number, string],
    //
    // }
    var Roles;
    (function (Roles) {
        Roles["ADMIN"] = "Pups";
        Roles[Roles["User"] = 10] = "User";
        Roles[Roles["Etc"] = 11] = "Etc";
    })(Roles || (Roles = {}));
    var person = {
        name: 'Max', age: 30,
        hobbies: ['Sports', 'Cooking', 1, true],
        roles: Roles.ADMIN,
    };
    var pn = person.age;
    var mixArray = [1, 2, 'PUPES', 'Klops'];
    //person.roles.push('admin');
    // person.roles[1] = 10;
    // for (const  mix of mixArray) {
    //     console.log(mix)
    // }
};
var combine = function (input1, input2, resultType) {
    if (resultType === 'asNumber') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
var p3 = function () {
    var comb = combine('Ann', 'Max', 'asText');
    var comb1 = combine(1, 10, 'asNumber');
    var u1 = { name: 'Max' };
    u1 = 'Michael';
};
var p4 = function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    var print = function () {
        console.log('OOPS');
        return; ///!!! with rettype undefined
    };
    var x = print();
    //let fAdd : Function;
    var fAdd;
    //    let fAdd: ((a: number, b: number) => number) | (()=> void); end even ...
    fAdd = add;
    //fAdd = 5;  because of type defined
    var rAdd = fAdd(1, 2);
    var cb = function (num) {
        return 'Result is: ' + num.toString();
    };
    var cb1 = function (num) {
        return 'NOOOO Result is: ' + num.toString();
    };
    var callWithCb = function (n1, n2, cback) {
        return cback(add(n1, n2));
    };
    //function type
    var what = callWithCb(1, 8, function (num) {
        return cb1(num);
    });
};
var p5 = function () {
    var userInput;
    var userName;
    userInput = 5;
    userInput = 'User';
    if (typeof userInput === 'string') {
        userName = userInput;
    }
    var generateError = function (message, errorCode) {
        throw { message: message, errorCode: errorCode };
    };
    var dt = utils_1.default.dateToString(new Date());
    //const result = generateError('Shit', 10); //never
};
p5();
//# sourceMappingURL=app.js.map