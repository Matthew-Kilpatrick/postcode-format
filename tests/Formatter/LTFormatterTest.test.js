import LTFormatter from "../../src/Formatter/LTFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', '12345'],
            ['123456', null],

            ['AB12345', null],
            ['LT12345', 'LT-12345'],
            ['LX12345', null],
            ['XT12345', null],
            ['XLT12345', null],
            ['LTX12345', null],
            ['LTX1234', null],
            ['LT1234', null],
            ['LT123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(LTFormatter(input)).toBe(expected);
    });
});