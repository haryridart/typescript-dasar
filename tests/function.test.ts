describe('Function', function () {
    it('should support function', function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayHello('Hary')).toBe('Hello Hary');
        function printHello(name: string): void{
            console.info(`Hello ${name}`);
        };
        printHello('Hary');
    });
    it('should support default value', function () {
        function sayHello(name: string = 'Hary'): string {
            return `Hello ${name}`;
        };
        expect(sayHello()).toBe('Hello Hary');
        expect(sayHello('Ridart')).toBe('Hello Ridart');
    });
    it('should support rest parameter', function () {
        function sum(...numbers: number[]): number {
            let total = 0;
            for(const value of numbers){
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function() {
        function sayHello(name: string, lastName?: string): string {
            if(lastName){
                return `Hello ${name} ${lastName}`;
            }else{
                return `Hello ${name}`;
            }
        }
        expect(sayHello('Hary')).toBe('Hello Hary');
        expect(sayHello('Hary', 'Ridart')).toBe('Hello Hary Ridart');
    });
    it('should support function overloading', function() {
        function callMe(value:number):number;
        function callMe(value:string):string;

        function callMe(value: any): any {
            if(typeof value === 'string'){
                return value.toUpperCase();
            }else if(typeof value === 'number'){
                return value + 2;
            }
        }
        expect(callMe(1)).toBe(3);
        expect(callMe('hary')).toBe('HARY');
    });
    it('should support function parameter', function() {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }
        function toUpper(nama: string) : string{
            return nama.toUpperCase();
        }
        expect(sayHello('Hary', toUpper)).toBe('Hello HARY');
        expect(sayHello('Ridart', function(name:string):string{
            return name.toUpperCase();
        })).toBe('Hello RIDART');
        expect(sayHello('Hary', (name:string): string =>{
            return name.toUpperCase();
        })).toBe('Hello HARY');
    })
        
});