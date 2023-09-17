import NOFormatter from "../../src/Formatter/NOFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', '1234'],
            ['12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(NOFormatter(input)).toBe(expected);
    });
});