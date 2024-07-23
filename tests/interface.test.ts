import { Seller } from "../src/seller";

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
    })
})