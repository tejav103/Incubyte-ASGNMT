import { expect } from "chai";
import {add} from './index.js';

describe('add', () => {
    it('should throw error for non string input', () => {
        expect(() => {add(1,2)}).to.throw(/Invalid input!/)
    })
    it('should add two numbers in the string', () => {
        expect(add('1,2')).to.equal(3)
    })
    it('should handle new lines in between', () => {
        expect(add('1\n2,3')).to.equal(6)
    })
    it('should accept delimetter', () => {
        expect(add('//;\n1;2')).to.equal(3)
    })
    it('should throw error for negative number in string', () => {
        expect(() => {add('1,-1,-2')}).to.throw(/negative numbers not allowed -1,-2/)
    })
})