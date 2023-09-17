import GGFormatter from "../../src/Formatter/GGFormatter.js";

const tests = [
            ['', null],

            ['AA999AA', null],
            ['XY999AA', null],
            ['GX999AA', null],
            ['GY999AA', 'GY99 9AA'],
            ['GY123AB', 'GY12 3AB'],
            ['XGY123AB', null],
            ['GY123ABC', null],
            ['GY9999A', null],
            ['GY999A9', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(GGFormatter(input)).toBe(expected);
    });
});