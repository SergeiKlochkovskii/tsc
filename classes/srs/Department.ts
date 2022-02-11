export abstract class Department {
    protected employee: string[] = [];
    static fYear = 2017;

    // constructor(n: string) {
    //     this.name = n;
    // }

    get fiscalYear(): number {
        return Department.fYear; //static access
    }

    constructor(private readonly id: string, public name: string) {
        this.name = name;
        this.id = id;
    }

    abstract describe();

    getId() {
        return this.id;
    }

    addEmployee(newImployee: string) {
        this.employee.push(newImployee);
    }

    static createEmployee(name: string) {
        return {name: name};
    }
}

export class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        return 'This is ITDepartment';
    }
}

export class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;


    get resentReport() {
        ///more logic if we want
        return this.lastReport;
    }

    set recentReport(rep: string) {
        this.lastReport = rep;
        this.addReport(rep);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'ACC');
        this.reports = reports;
        //
    }

    static getInstanse() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('ACC', []);
        return this.instance;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }

        this.employee.push(name);
    }

    describe() {
        return 'This is AccountingDepartment';
    }
}
