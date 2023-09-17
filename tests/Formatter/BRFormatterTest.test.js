import BRFormatter from "../../src/Formatter/BRFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],
            ['1234567', null],
            ['12345678', '12345-678'],
            ['123456789', null],

            ['ABCDEFGH', null],
            ['1234567A', null],
            ['A1234567', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(BRFormatter(input)).toBe(expected);
    });
});