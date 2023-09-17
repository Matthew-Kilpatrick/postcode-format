import LCFormatter from "../../src/Formatter/LCFormatter.js";

const tests = [
            ['LC12345', 'LC12 345'],

            ['LC1234', null],
            ['LX12345', null],
            ['XC12345', null],
            ['XLC12345', null],
            ['LC123456', null],

            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],
            ['1234567', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
            ['ABCDEF', null],
            ['ABCDEFG', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(LCFormatter(input)).toBe(expected);
    });
});