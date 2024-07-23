"use strict";
describe('Loop', function () {
    it('should support for loop', function () {
        const names = ['Hary', 'Ridart'];
        //for i
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        //for of
        for (const name of names) {
            console.info(name);
        }
        //for in
        for (const index in names) {
            console.info(names[index]);
        }
    });
    //while loop
    it('should support while loop', function () {
        let counter = 0;
        while (counter < 5) {
            console.info(counter);
            counter++;
        }
    });
    //do while loop
    it('should support do while loop', function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 5);
    });
    //break and continue
    it('should support break and continue', function () {
        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
});
