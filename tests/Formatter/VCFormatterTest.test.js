import VCFormatter from "../../src/Formatter/VCFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', 'VC1234'],
            ['12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],

            ['VC', null],
            ['VC1', null],
            ['VC123', null],
            ['VC1234', 'VC1234'],
            ['VX1234', null],
            ['XC1234', null],
            ['VC12345', null],
            ['XVC1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(VCFormatter(input)).toBe(expected);
    });
});