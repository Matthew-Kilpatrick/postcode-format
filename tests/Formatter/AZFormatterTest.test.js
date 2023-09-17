import AZFormatter from "../../src/Formatter/AZFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', 'AZ 1234'],
            ['12345', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],

            ['AZ', null],
            ['AZ1', null],
            ['AZ123', null],
            ['AZ1234', 'AZ 1234'],
            ['AZ12345', null],
            ['XAZ1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(AZFormatter(input)).toBe(expected);
    });
});