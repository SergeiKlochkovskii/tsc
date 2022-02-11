import {
    countAndPrint,
    createCourseGoal,
    DataStroage,
    extractAndConvert,
    merge,
    merge1,
    someNames,
} from './TGenerics';

const cNames = someNames;
const retMergeNoSpectypes = merge(
    { a: 1, n: 'Name1' },
    { a: 8, pups: 'Klops' }
);
//to specify the types accepted
let retMerge = merge<{ a: number; n: string }, { a: number; pups: string }>(
    { a: 1, n: 'Name1' },
    { a: 8, pups: 'Klops' }
);
//const mName = retMerge.name; ///Doesn't work directly
const mName = <string>retMerge.pups;
//let retMerge1 = merge1({ a: 1, n: 'Name1' }, 30); // 30 is not processed indeed
//type constraint
let retMerge1 = merge1({ a: 1, n: 'Name1' }, { smth: 30 }); // 30 is not processed indeed
let genF = countAndPrint({ length: 30, txt: 'Test' });
let genF1 = countAndPrint(['Sports', 'Cooking']);

const vkey = extractAndConvert({ name: 'Pups' }, 'name');
///G classes

const textStorage: DataStroage<string> = new DataStroage<string>();
textStorage.addItem('Item one');
textStorage.addItem('Item two');
textStorage.addItem('Item three');
textStorage.removeItem('Item two');
const stor = textStorage.getItems();

//shorter, more flexible
const numStorage = new DataStroage<number | string>();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.addItem('2');
numStorage.addItem(3);
numStorage.removeItem(2);
const ntor = numStorage.getItems();

const objectStorage = new DataStroage<object>();
objectStorage.addItem({ item: 'Item one' });
objectStorage.addItem({ item: 'Item two' });
objectStorage.addItem({ num: 3 });

const maxObject = { max: 'Max' };
objectStorage.addItem(maxObject);

// doesn't wokrk ofo objects: objectStorage.removeItem({ dat: new Date() });
objectStorage.removeItem(maxObject); // Should be ok. It's a REF!!!
const otor = objectStorage.getItems();

const course = createCourseGoal('Ttl', 'Desc', new Date());

//Readonly type
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu'); //error!!!
// names.push();

