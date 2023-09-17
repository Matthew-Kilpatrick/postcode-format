import ARFormatter from "../../src/Formatter/ARFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', '1234'],
            ['12345', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],

            ['A1234', null],
            ['A1234B', null],
            ['A1234BC', null],
            ['A1234BCD', 'A1234BCD'],
            ['A1234BCDE', null],
            ['A12345BC', null],
            ['A12345BCD', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(ARFormatter(input)).toBe(expected);
    });
});