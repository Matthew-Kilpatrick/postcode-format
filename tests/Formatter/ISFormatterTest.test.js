import ISFormatter from "../../src/Formatter/ISFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['012', null],
            ['123', '123'],
            ['999', '999'],
            ['1234', null],
            ['12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(ISFormatter(input)).toBe(expected);
    });
});