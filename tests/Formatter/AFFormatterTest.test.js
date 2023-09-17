import AFFormatter from "../../src/Formatter/AFFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['0950', null],
            ['0000', null],
            ['1050', '1050'],
            ['1234', '1234'],
            ['4399', '4399'],
            ['9999', null],
            ['4400', null],
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
        expect(AFFormatter(input)).toBe(expected);
    });
});