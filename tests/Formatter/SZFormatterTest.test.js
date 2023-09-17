import SZFormatter from "../../src/Formatter/SZFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],

            ['A12', null],
            ['A123', 'A123'],
            ['B234', 'B234'],
            ['AB123', null],
            ['A1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(SZFormatter(input)).toBe(expected);
    });
});