import INFormatter from "../../src/Formatter/INFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['012', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['012345', null],
            ['123456', '123456'],
            ['999999', '999999'],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(INFormatter(input)).toBe(expected);
    });
});