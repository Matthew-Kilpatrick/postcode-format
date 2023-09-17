import TCFormatter from "../../src/Formatter/TCFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['TKCA0ZZ', null],
            ['TKCA1ZZ', 'TKCA 1ZZ'],
            ['TKCA1AB', null],
            ['ATKCA1ZZ', null],
            ['TKCA1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(TCFormatter(input)).toBe(expected);
    });
});