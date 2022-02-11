// intersection
//interface~  could be used as well
type Admin = {
    name: string;
    privileges: string[];
};

//interface~
type Employee = {
    name: string;
    startDate: Date;
};

type Combinable = string | number;
type Numeric = number | boolean;

export type ElevatedEmployee = Admin & Employee;

export type Universal = Combinable & Numeric;

//type guards
function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }

    return n1 + n2;
}

export type UnknownEmployee = Employee | Admin;

export function printEmployee(emp: UnknownEmployee) {
    let privs: string[];
    //=  typeof emp === 'Admin'  // not supported!
    //     ? 'Privs: ' + emp.privileges
    //     : '';
    let sd: Date;
    if ('startDate' in emp) {
        sd = new Date();
    }

    if ('privileges' in emp) {
        //!!! IN
        privs = emp.privileges;
    }

    const ret =
        'Name: ' +
        emp.name +
        (' ' + typeof privs !== 'undefined' ? privs : '') +
        (' ' + typeof sd !== 'undefined' ? sd : '');
    return ret;
}

// typeof
export class Car {
    drive() {
        console.log('Driving a car');
    }
}

export class Track {
    drive() {
        console.log('Driving a track.. ');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo.. ' + amount);
    }
}

export type Vejhicle = Car | Track;

//discriminated interfaces
export interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

export interface Horse {
    type: 'horse';
    runningSpeed: number;
}

export type Animal = Bird | Horse;
export const moveAnimal = (animal: Animal) => {
    let speed = 50;
    switch (animal.type) {
        case 'bird':
            return 'Moving with speed: ' + animal.flyingSpeed;
            break;
        case 'horse':
            return 'Moving with speed: ' + animal.runningSpeed;
            break;
        default:
            return 'Moving with speed: UNKNOWN';
            break;
    }
};

//typecast
// <HtmlInputElement> myInput

// indexing properties

export interface  Errorcontainer {
    // id: string;

    [prop: string] : string;
}

//function overload
