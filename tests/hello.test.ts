import { sayHello } from "../src/hello";

describe('Hello', function(){
    it("Should return Hello Hary", function(){
        expect(sayHello('Hary')).toBe("Hello Hary");
    });
});