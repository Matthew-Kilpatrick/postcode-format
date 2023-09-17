import BHFormatter from "../../src/Formatter/BHFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['12345', null],
            ['123456', null],

            ['000', null],
            ['001', null],
            ['100', null],
            ['101', '101'],

            ['0123', null],
            ['1000', null],
            ['1001', '1001'],
            ['1301', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(BHFormatter(input)).toBe(expected);
    });
});