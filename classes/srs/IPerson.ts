//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
    return a + b;
};

export interface Named {
    readonly name?: string; //readonly may be added
    //Optional
    outputName?: string;
}

export interface Greeatable extends Named {
    greet: (phrase: string) => string;
}

export class Person implements Greeatable {
    age: number = 30;
    readonly name?: string;

    constructor(n: string = null) {  // n? as well or = null
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string): string {
        return (
            'call of the greet with: ' + phrase + ' ' + this.age + ' years old'
        );
    }
}
