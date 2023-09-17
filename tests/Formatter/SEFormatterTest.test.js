import SEFormatter from "../../src/Formatter/SEFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['09999', null],
            ['10000', '100 00'],
            ['12345', '123 45'],
            ['98499', '984 99'],
            ['98500', null],
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
        expect(SEFormatter(input)).toBe(expected);
    });
});