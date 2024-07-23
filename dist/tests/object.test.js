"use strict";
describe('Object', function () {
    it('should support object', function () {
        const person = {
            id: "1",
            name: "Hary"
        };
        console.info(person);
        person.id = "2";
        person.name = "Ridart";
        // console.info(person);
    });
});
