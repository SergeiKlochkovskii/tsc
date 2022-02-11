function Logger(construcor: Function) {
    console.log('***Logging');
    console.log(construcor);
    console.log('***End of logger call');

}

@Logger
export class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person');
    }
}
