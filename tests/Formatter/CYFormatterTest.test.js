import CYFormatter from "../../src/Formatter/CYFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['0000', '0000'],
            ['1234', '1234'],
            ['9999', '9999'],
            ['00000', null],
            ['12345', null],
            ['98999', null],
            ['99000', '99000'],
            ['99999', '99999'],
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
        expect(CYFormatter(input)).toBe(expected);
    });
});