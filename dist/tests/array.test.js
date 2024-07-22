"use strict";
describe('Array', function () {
    it('should return array', function () {
        const names = ['Hary', 'Ridart'];
        const ages = [22, 23];
        console.info(names);
        console.info(ages);
    });
});
describe('Read Only Array', function () {
    it('should return read only array', function () {
        const hobbies = ['Gaming', 'Reading'];
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = 'Writing';
    });
});
describe('Tuple', function () {
    it('should return tuple', () => {
        const person = ['Hary', 'Ridart', 25];
        console.info(person);
        console.info(person[0]);
    });
});
