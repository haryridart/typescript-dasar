import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id:"1",
            name: "Laptop"
        };
        const product: Product = {
            id: "1",
            name: "Ideapad Slim 3",
            price: 2000,
            category: category
        };
        console.info(product);
        console.info(category);
    });

});