import newArr from '../../index';
import strings from '../../utilities/strings';
import numbers from '../../utilities/numbers';
import arrays from '../../utilities/arrays';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];


describe("Testing our Arrays utilities",()=>{

    describe("making sure addArr function adding numbers into arrays",()=>{
    
        it('should add numbers in array and be truthy', () => {
            expect(arrays.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 18', () => {
            expect(arrays.addArr(numArr)).toBe(18);
        });
    })
    
    
    
    describe("making sure concatArr is concatenating 2  arrays",()=>{
    
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    
    })
    
        
    describe("making sure to split last 3rd item in the array",()=>{
    
        it('should contain 3 items except rabbit', () => {
            expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    })
    
    
    
    
    describe("making sure to find largest number in the array",()=>{
    
        it('should have 6 be largest number', () => {
            expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    })
        
})

    
