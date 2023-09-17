import BMFormatter from "../../src/Formatter/BMFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],

            ['A', null],
            ['A1', null],
            ['A12', null],
            ['A123', null],
            ['AB', null],
            ['AB1', null],
            ['AB12', 'AB 12'],
            ['AB123', null],
            ['ABC', null],
            ['ABC1', null],
            ['ABC12', null],
            ['ABCD', 'AB CD'],
            ['ABCDE', null],
            ['ABCD1', null],
            ['1ABC', null],
            ['1ABCD', null],
            ['1AB23', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(BMFormatter(input)).toBe(expected);
    });
});