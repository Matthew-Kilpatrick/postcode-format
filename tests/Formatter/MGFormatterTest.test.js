import MGFormatter from "../../src/Formatter/MGFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', '123'],
            ['1234', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(MGFormatter(input)).toBe(expected);
    });
});