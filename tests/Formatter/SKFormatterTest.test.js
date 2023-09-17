import SKFormatter from "../../src/Formatter/SKFormatter.js";

const tests = [
            ['', null],

            ['0', null],
            ['01', null],
            ['012', null],
            ['0123', null],
            ['01234', '012 34'],
            ['12345', null],
            ['79999', null],
            ['80000', '800 00'],
            ['99999', '999 99'],
            ['12345', null],
            ['60200', null],
            ['012345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(SKFormatter(input)).toBe(expected);
    });
});