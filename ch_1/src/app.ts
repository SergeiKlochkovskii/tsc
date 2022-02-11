import utils from './utils';

const add = (n1: number, n2: number) => {
    return n1 + n2;
}


const p1 = () => {
    const number1 = 5;
    const number2 = 2.8

    const t = typeof number2;

    const result = add(number1, number2)


}

const p2 = () => {
    // const person: {
    //     name: string,
    //     age: number,
    //     hobbies: (number | string | boolean) [],
    //     roles: [number, string],
    //
    // }

    enum Roles {ADMIN = 'Pups', User = 10, Etc}

    const person = {
        name: 'Max', age: 30,
        hobbies: ['Sports', 'Cooking', 1, true],
        roles: Roles.ADMIN,
    };
    let pn = person.age
    let mixArray: (string | number)[] = [1, 2, 'PUPES', 'Klops'];
    //person.roles.push('admin');
    // person.roles[1] = 10;

    // for (const  mix of mixArray) {
    //     console.log(mix)
    // }


}
//type alias
type strNum = string | number;
type conversionDescriptor = 'asNumber' | 'asText';

const combine = (input1: strNum, input2: strNum, resultType: conversionDescriptor) => {
    if (resultType === 'asNumber') {
        return +input1 + +input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

const p3 = () => {
    const comb = combine('Ann', 'Max', 'asText');
    const comb1 = combine(1, 10, 'asNumber');
    type User = { name: string } | string;
    let u1: User = {name: 'Max'};
    u1 = 'Michael';
}


const p4 = () => {
    function add(n1: number, n2: number) {
        return n1 + n2;
    }

    const print = (): undefined => {
        console.log('OOPS');
        return;  ///!!! with rettype undefined
    }

    let x = print()
    //let fAdd : Function;
    let fAdd: (a: number, b: number) => number;
//    let fAdd: ((a: number, b: number) => number) | (()=> void); end even ...
    fAdd = add;
    //fAdd = 5;  because of type defined
    const rAdd = fAdd(1, 2);

    const cb = (num: number) => {
        return 'Result is: ' + num.toString();

    }

    const cb1 = (num: number) => {
        return 'NOOOO Result is: ' + num.toString();

    }


    const callWithCb = (n1: number, n2: number, cback: (num: number) => string): string => {
        return cback(add(n1, n2));
    }
    //function type

    const what = callWithCb(1, 8, (num) => {
        return cb1(num)
    });

}


const p5 = () => {
    let userInput: unknown;
    let userName: string;
    userInput = 5;
    userInput = 'User';
    if(typeof  userInput === 'string') {
        userName = userInput;
    }

    const generateError = (message: string, errorCode: number): never => {
        throw {message: message, errorCode: errorCode};


    }

    const dt = utils.dateToString(new Date())

    //const result = generateError('Shit', 10); //never

}

p5();
