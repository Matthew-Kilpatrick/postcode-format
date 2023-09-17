import SHFormatter from "../../src/Formatter/SHFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],

            ['STHL1ZX', null],
            ['STHL1ZZ', 'STHL 1ZZ'],
            ['ASTHL1ZZ', null],
            ['STHL1ZZA', null],

            ['ASCN1ZX', null],
            ['ASCN1ZZ', 'ASCN 1ZZ'],
            ['AASCN1ZZ', null],
            ['ASCN1ZZA', null],

            ['TDCU1ZX', null],
            ['TDCU1ZZ', 'TDCU 1ZZ'],
            ['ATDCU1ZZ', null],
            ['TDCU1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(SHFormatter(input)).toBe(expected);
    });
});