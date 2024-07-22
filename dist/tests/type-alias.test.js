describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category = {
            id: "1",
            name: "Laptop"
        };
        const product = {
            id: "1",
            name: "Ideapad Slim 3",
            price: 2000,
            category: category
        };
        console.info(product);
        console.info(category);
    });
});
export {};
