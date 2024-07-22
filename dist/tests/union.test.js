"use strict";
describe('Union data type', function () {
    it('should support union', function () {
        let personInfo = 'Hary';
        personInfo = 23;
        personInfo = true;
        console.info(personInfo);
    });
    it('should return according the condition', () => {
        const process = (value) => {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else if (typeof value === 'number') {
                return value + 2;
            }
            else {
                return !value;
            }
        };
        expect(process(100)).toBe(102);
        expect(process("Hary")).toBe("HARY");
        expect(process(true)).toBe(false);
    });
});
