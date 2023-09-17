import NLFormatter from "../../src/Formatter/NLFormatter.js";

const tests = [
            ['', null],

            ['1234AB', '1234 AB'],
            ['1234SS', null],
            ['1234SD', null],
            ['1234SA', null],
            ['12345AB', null],
            ['123AB', null],
            ['123ABC', null],
            ['1234ABC', null],
            ['1234AB1', null],
            ['1234ABC', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
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
        expect(NLFormatter(input)).toBe(expected);
    });
});