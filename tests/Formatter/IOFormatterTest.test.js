import IOFormatter from "../../src/Formatter/IOFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['BBND1ZX', null],
            ['BBND1ZZ', 'BBND 1ZZ'],
            ['ABBND1ZZ', null],
            ['BBND1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(IOFormatter(input)).toBe(expected);
    });
});