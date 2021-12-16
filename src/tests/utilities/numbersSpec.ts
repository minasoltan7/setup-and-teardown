import newArr from '../../index';
import strings from '../../utilities/strings';
import numbers from '../../utilities/numbers';
import arrays from '../../utilities/arrays';


const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe("Tests for numbers utilities",()=>{

    describe("making sure that sum function get the sum of the 2 numbers given",()=>{
        it('should be a sum greater than 10', () => {
            expect(numbers.sum(3,10)).toBeGreaterThan(10);
        });
        it('should be a sum less than 10', () => {
            expect(numbers.sum(-3,10)).toBeLessThan(10);
        });
        
    })
    
    describe("making sure that multiply function multiplies the givens",()=>{
    
        it('should multiply 3 by 5 and be 15', () => {
            expect(numbers.multiply(3,5)).toBe(15);
        });
        it('should multiply 0 by 5 to be falsy', () => {
            expect(numbers.multiply(0,5)).toBeFalsy();
        });
    })
})

