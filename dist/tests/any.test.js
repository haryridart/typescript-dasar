"use strict";
describe('Any data type', function () {
    it('should support any data type', () => {
        const person = {
            id: 1,
            age: 34,
            name: 'Hary'
        };
        person.age = 25;
        person.address = 'Indonesia';
        console.info(person);
    });
});
