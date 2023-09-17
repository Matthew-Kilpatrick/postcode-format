import CZFormatter from "../../src/Formatter/CZFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['01234', null],
            ['12345', '123 45'],
            ['79999', '799 99'],
            ['80000', null],
            ['99999', null],
            ['01234', null],
            ['81000', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(CZFormatter(input)).toBe(expected);
    });
});