export interface Employee {
    id: number;
    name: string;
    salary: number;
    division: string;
}

export interface Manager extends Employee {
    department: string;
}