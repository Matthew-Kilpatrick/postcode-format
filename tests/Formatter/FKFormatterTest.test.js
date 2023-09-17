import FKFormatter from "../../src/Formatter/FKFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['FIQQ1ZX', null],
            ['FIQQ1ZZ', 'FIQQ 1ZZ'],
            ['AIQQ1ZZ', null],
            ['FIQQ1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(FKFormatter(input)).toBe(expected);
    });
});