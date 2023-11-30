import myDefault, { myNamed } from "./Hello";

describe('simple examples', () => {
    test('should equal 3 if 1 + 2', () => {
        const sum = (a, b) => {
            return a + b
        };
    
        expect(sum(1, 2)).toBe(3);
    });
})

describe('imports examples', () => {
    test('should return true because < 50', () => {
        expect(myDefault(0)).toBe(true);
        expect(myDefault(10)).toBe(true);
        expect(myDefault(-999)).toBe(true);
        expect(myDefault(49)).toBe(true);
    });
    
    test('should return true because >= 50', () => {
        expect(myDefault(50)).toBe(false);
        expect(myDefault(9999)).toBe(false);
    });
    
    test('should return 5', () => {
        expect(myNamed()).toBe(5);
    });
});
