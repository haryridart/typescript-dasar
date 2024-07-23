import { Customer,CustomerType } from "../src/enum";

describe('Enum', function () {
    it('should support Enum', function () {
        const customer: Customer = {
            id: 1,
            name: 'Hary',
            type: CustomerType.REGULAR
        };
        console.info(customer);
    });
})