"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TGenerics_1 = require("./TGenerics");
const cNames = TGenerics_1.someNames;
const retMergeNoSpectypes = (0, TGenerics_1.merge)({ a: 1, n: 'Name1' }, { a: 8, pups: 'Klops' });
//to specify the types accepted
let retMerge = (0, TGenerics_1.merge)({ a: 1, n: 'Name1' }, { a: 8, pups: 'Klops' });
//const mName = retMerge.name; ///Doesn't work directly
const mName = retMerge.pups;
//let retMerge1 = merge1({ a: 1, n: 'Name1' }, 30); // 30 is not processed indeed
//type constraint
let retMerge1 = (0, TGenerics_1.merge1)({ a: 1, n: 'Name1' }, { smth: 30 }); // 30 is not processed indeed
let genF = (0, TGenerics_1.countAndPrint)({ length: 30, txt: 'Test' });
let genF1 = (0, TGenerics_1.countAndPrint)(['Sports', 'Cooking']);
const vkey = (0, TGenerics_1.extractAndConvert)({ name: 'Pups' }, 'name');
///G classes
const textStorage = new TGenerics_1.DataStroage();
textStorage.addItem('Item one');
textStorage.addItem('Item two');
textStorage.addItem('Item three');
textStorage.removeItem('Item two');
const stor = textStorage.getItems();
//shorter, more flexible
const numStorage = new TGenerics_1.DataStroage();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.addItem('2');
numStorage.addItem(3);
numStorage.removeItem(2);
const ntor = numStorage.getItems();
const objectStorage = new TGenerics_1.DataStroage();
objectStorage.addItem({ item: 'Item one' });
objectStorage.addItem({ item: 'Item two' });
objectStorage.addItem({ num: 3 });
const maxObject = { max: 'Max' };
objectStorage.addItem(maxObject);
// doesn't wokrk ofo objects: objectStorage.removeItem({ dat: new Date() });
objectStorage.removeItem(maxObject); // Should be ok. It's a REF!!!
const otor = objectStorage.getItems();
const course = (0, TGenerics_1.createCourseGoal)('Ttl', 'Desc', new Date());
//Readonly type
const names = ['Max', 'Anna'];
// names.push('Manu'); //error!!!
// names.push();
//# sourceMappingURL=generics.js.map