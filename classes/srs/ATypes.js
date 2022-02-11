"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveAnimal = exports.Track = exports.Car = exports.printEmployee = void 0;
//type guards
function add(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployee(emp) {
    let privs;
    //=  typeof emp === 'Admin'  // not supported!
    //     ? 'Privs: ' + emp.privileges
    //     : '';
    let sd;
    if ('startDate' in emp) {
        sd = new Date();
    }
    if ('privileges' in emp) {
        //!!! IN
        privs = emp.privileges;
    }
    const ret = 'Name: ' +
        emp.name +
        (' ' + typeof privs !== 'undefined' ? privs : '') +
        (' ' + typeof sd !== 'undefined' ? sd : '');
    return ret;
}
exports.printEmployee = printEmployee;
// typeof
class Car {
    drive() {
        console.log('Driving a car');
    }
}
exports.Car = Car;
class Track {
    drive() {
        console.log('Driving a track.. ');
    }
    loadCargo(amount) {
        console.log('Loading cargo.. ' + amount);
    }
}
exports.Track = Track;
const moveAnimal = (animal) => {
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
exports.moveAnimal = moveAnimal;
//function overload
//# sourceMappingURL=ATypes.js.map