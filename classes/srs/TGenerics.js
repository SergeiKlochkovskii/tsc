"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourseGoal = exports.DataStroage = exports.extractAndConvert = exports.countAndPrint = exports.merge1 = exports.merge = exports.mixArray = exports.names1 = exports.someNames = void 0;
exports.someNames = ['Max', 'Manual'];
exports.names1 = [];
exports.mixArray = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
}).then((data) => {
    data.split(' ');
});
//our own GType
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
exports.merge = merge;
const merge1 = (objA, objB) => {
    return Object.assign(objA, objB);
};
exports.merge1 = merge1;
const countAndPrint = (element) => {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' element(s)';
    }
    return [element, descriptionText];
};
exports.countAndPrint = countAndPrint;
const extractAndConvert = (obj, key) => {
    return obj[key];
};
exports.extractAndConvert = extractAndConvert;
//Generic classes
class DataStroage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
        }
        else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
    getItems() {
        return [...this.data];
    }
}
exports.DataStroage = DataStroage;
function createCourseGoal(title, description, date) {
    let courseGoal = {}; //!!!Partial instead of ?
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = date;
    return courseGoal; //as CourcseGoal!!!
}
exports.createCourseGoal = createCourseGoal;
//# sourceMappingURL=TGenerics.js.map