"use strict";
describe('If statement', function () {
    it('should support if statement', function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info('Good Job!');
        }
        else if (examValue > 60 && examValue < 80) {
            console.info('Not Bad');
        }
        else {
            console.info('Try Again');
        }
    });
    it('should support ternary operation', function () {
        const examValue = 90;
        const result = examValue > 80 ? 'Good Job!' : 'Try Again';
        console.info(result);
    });
    it('should support switch statement', function () {
        function sayHello(name) {
            switch (name) {
                case 'Hary':
                    return 'Hello Hary';
                case 'Ridart':
                    return 'Hello Ridart';
                default:
                    return 'Hello';
            }
        }
        console.info(sayHello('Hary'));
    });
});
