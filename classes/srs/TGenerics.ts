export const someNames = ['Max', 'Manual'];
export const names1: Array<string> = [];
export const mixArray: Array<string | number> = [];
const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
}).then((data) => {
    data.split(' ');
});

//our own GType

export function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

export const merge1 = <T extends object, U extends object>(
    objA: T,
    objB: U
): U & T => {
    return Object.assign(objA, objB);
};

interface Lengthy {
    length: number;
}
export const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' element(s)';
    }
    return [element, descriptionText];
};
export const extractAndConvert = <T extends object, U extends keyof T>(
    obj: T,
    key: U
) => {
    return obj[key];
};

//Generic classes

export class DataStroage<T> {
    private data: T[] = [];
    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
        } else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }

    getItems(): T[] {
        return [...this.data];
    }
}

export interface CourseGoal {
    title: string;
    description: string;
    completeUnit: Date;
}

export function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};  //!!!Partial instead of ?
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = date;
    return courseGoal as CourseGoal; //as CourcseGoal!!!
}

