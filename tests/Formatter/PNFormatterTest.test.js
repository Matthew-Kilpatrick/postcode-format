import PNFormatter from "../../src/Formatter/PNFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['PCRN1ZX', null],
            ['PCRN1ZZ', 'PCRN 1ZZ'],
            ['APCRN1ZZ', null],
            ['PCRN1ZZA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(PNFormatter(input)).toBe(expected);
    });
});