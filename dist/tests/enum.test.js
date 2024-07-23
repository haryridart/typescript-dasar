import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should support Enum', function () {
        const customer = {
            id: 1,
            name: 'Hary',
            type: CustomerType.REGULAR
        };
        console.info(customer);
    });
});
