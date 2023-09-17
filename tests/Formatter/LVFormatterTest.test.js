import LVFormatter from "../../src/Formatter/LVFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', 'LV-1234'],
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

            ['LV', null],
            ['LV1', null],
            ['LV12', null],
            ['LV123', null],
            ['LV1234', 'LV-1234'],
            ['LV12345', null],
            ['XLV1234', null],
            ['XV1234', null],
            ['LX1234', null],
            ['LVX123', null],
            ['L1234', null],
            ['V1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(LVFormatter(input)).toBe(expected);
    });
});