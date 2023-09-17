import MSFormatter from "../../src/Formatter/MSFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1109', null],
            ['1110', 'MSR 1110'],
            ['1111', 'MSR 1111'],
            ['1234', 'MSR 1234'],
            ['1349', 'MSR 1349'],
            ['1350', 'MSR 1350'],
            ['1351', null],
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

            ['MSR', null],
            ['MSR1', null],
            ['MSR12', null],
            ['MSR123', null],
            ['MSR1109', null],
            ['MSR1110', 'MSR 1110'],
            ['MSR1111', 'MSR 1111'],
            ['MSR1234', 'MSR 1234'],
            ['MSR1349', 'MSR 1349'],
            ['MSR1350', 'MSR 1350'],
            ['MSR1351', null],
            ['MSR12345', null],
            ['XMSR1234', null],
            ['MSX1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(MSFormatter(input)).toBe(expected);
    });
});