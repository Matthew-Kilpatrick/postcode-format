import ADFormatter from "../../src/Formatter/ADFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', 'AD123'],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],

            ['AD', null],
            ['AD1', null],
            ['AD12', null],
            ['AD123', 'AD123'],
            ['AD1234', null],
            ['AB123', null],
            ['ADZ12', null],
            ['A1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(ADFormatter(input)).toBe(expected);
    });
});