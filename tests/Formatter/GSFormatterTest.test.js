import GSFormatter from "../../src/Formatter/GSFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['SIQQ0ZZ', null],
            ['SIQQ1ZZ', 'SIQQ 1ZZ'],
            ['SIQQ1AB', null],
            ['AIQQ1ZZ', null],
            ['SIQQ1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(GSFormatter(input)).toBe(expected);
    });
});