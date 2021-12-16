import newArr from '../../index';
import strings from '../../utilities/strings';
import numbers from '../../utilities/numbers';
import arrays from '../../utilities/arrays';


const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];




describe("Making tests on Strings functions",()=>{
    describe("tests for capitalize function",()=>{

        it('should capitalize a string', () => {
            expect(strings.capitalize('a sentence')).toEqual('A Sentence');
        });
        it('should allow sentence to remain capitalized', () => {
            expect(strings.capitalize('A Sentence')).toEqual('A Sentence');
        });
    })
})