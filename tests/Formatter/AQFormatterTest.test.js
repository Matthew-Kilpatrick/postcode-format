import AQFormatter from "../../src/Formatter/AQFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['BIQQ1ZX', null],
            ['BIQQ1ZZ', 'BIQQ 1ZZ'],
            ['ABIQQ1ZZ', null],
            ['BIQQ1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(AQFormatter(input)).toBe(expected);
    });
});