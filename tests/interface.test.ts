import { Seller } from "../src/seller";
import { Employee,Manager } from "../src/employee";
import { Person } from "../src/person";
describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: 'Hary',
            address: 'Indonesia',
            nib: '1234567890',
            npwp: '1234567890'
        };
        seller.name = 'Hary Ridart';
        console.info(seller);
    });
    it('should support function interface', function () {
        interface AddFunction{
            (value1: number, value2: number): number;
        };
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    // Array
    it('should support indexable interface', function () {
        interface StringArray{
            [key: number]: string;
        };
        const names: StringArray = ['Hary', 'Ridart'];
        names[0] = 'Hary Ridart';
        console.info(names);
    });
    //Object
    it('should support indexable interface for non number index',function(){
        interface StringDictionary{
            [key: string]: string;
        };
        const dictionary: StringDictionary = {
            name: 'Hary',
            address: 'Indonesia'
        };
        expect(dictionary.name).toBe('Hary');
        expect(dictionary.address).toBe('Indonesia');
    });
    it('should support extend interface', function () {
        const employee: Employee = {
            id: 1,
            name: 'Hary',
            salary: 1000000,
            division: 'IT'
        };
        const manager: Manager = {
            id: 1,
            name: 'Hary',
            salary: 1000000,
            division: 'IT',
            department: 'IT Team'
        };
        console.info(employee);
        console.info(manager);
    });
    it('should support function inside interface', function () {
        const person: Person = {
            name: 'Ridart',
            sayHello: (name: string): string => {
                return `Hello ${name}, my name is ${person.name}`;
            }
        };
        console.info(person);
    });
    it('should support intersection types',function(){
        interface HasName{
            name: string;
        };
        interface HasId{
            id: number;
        };
        type Domain = HasId & HasName;

        const domain: Domain = {
            id: 1,
            name:'Hary'
        };
        console.info(domain);
    });
    it('should support type assertions',function(){
        const person:any = {
            name:'Hary',
            age:15
        };
        const person2 : Person = person as Person;
        console.info(person2);
        // person2.sayHello('Hary'); produce error because sayHello() no longer exist in asserted type;
    });
});