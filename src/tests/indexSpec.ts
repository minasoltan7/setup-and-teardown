
import newArr from '../index';
import strings from '../utilities/strings';
import numbers from '../utilities/numbers';
import arrays from '../utilities/arrays';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe("testing our index function",()=>{

    describe("making sure newArr is working",()=>{
    
        it('should make a new array containing dog', () => {
            expect(newArr(3, wordArr)).toContain('dog');
        });
        it('make a new array containing 3', () => {
            expect(newArr(3, wordArr)).toContain(3);
        });
    }    
    )
})






