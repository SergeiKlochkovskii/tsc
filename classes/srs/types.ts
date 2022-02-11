import {
    Car,
    ElevatedEmployee,
    Errorcontainer,
    moveAnimal,
    printEmployee,
    Track,
    Vejhicle,
} from './ATypes';

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['Create a server'],
    startDate: new Date(),
};

let prnEmployee = printEmployee(e1);
const prnEmployeeEx = printEmployee({ name: 'Max', startDate: new Date() });

const v1 = new Car();
const v2 = new Track();

const useVehicle = (vehicle: Vejhicle) => {
    vehicle.drive();

    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(100);
    // }
    //alt way: instanceof
    if (vehicle instanceof Track) {
        vehicle.loadCargo(100);
    }
};

useVehicle(v1);
useVehicle(v2);

//discriminated union
const brd = moveAnimal({ type: 'bird', flyingSpeed: 500 });
const hrs = moveAnimal({ type: 'horse', runningSpeed: 20 });

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

const errorBag: Errorcontainer = {
    email: 'Not a valid email',
    userName: 'Must start with a capital letter',
};

//function overload
type Combinable = string | number;
type Numeric = number | boolean;

export type Universal = Combinable & Numeric;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
// etc

function add(n1: Combinable, n2: Combinable) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }

    return n1 + n2;
}

//optional chaining
export const userFetchedData = {
    id: 'u1',
    userName: 'Max',
    job: { title: 'CEO', description: 'CEO of my own company' },
};

const ufd = userFetchedData;
// const optUfd = userFetchedData.job;

const optUfd =
    //(userFetchedData.job &&  userFetchedData.job.title);  //doesn't work on ts
    userFetchedData?.job?.title; // With ? and undefined/null it doesn't go deeper to the object

//nullish coalescing
const userInput = '';  // or null
const userStored = userInput || 'DEFAULT';
//but ?? works only for null/undefined. && also, may work for empty string/0 (are treated as false)
const userStored1 = userInput ?? 'DEFAULT'
