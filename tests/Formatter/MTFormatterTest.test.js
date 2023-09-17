import MTFormatter from "../../src/Formatter/MTFormatter.js";

const tests = [
            ['', null],

            ['ABC1234', 'ABC 1234'],
            ['ABC12345', null],
            ['ABCD123', null],
            ['ABCD1234', null],

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
            ['ABCDEFG', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(MTFormatter(input)).toBe(expected);
    });
});