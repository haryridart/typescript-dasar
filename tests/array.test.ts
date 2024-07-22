describe('Array', function(){
    it('should return array', function(){
        const names: string[] = ['Hary','Ridart'];
        const ages: number[] = [22,23];

        console.info(names);
        console.info(ages);
    });
});
describe('Read Only Array', function(){
    it('should return read only array', function(){
        const hobbies: ReadonlyArray<string> = ['Gaming', 'Reading'];
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = 'Writing';
    });
});
describe('Tuple', function(){
    it('should return tuple', () =>{
        const person: readonly[string, string, number] = ['Hary', 'Ridart',25];
        console.info(person);
        console.info(person[0]);

    });
});