import FOFormatter from "../../src/Formatter/FOFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', '123'],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(FOFormatter(input)).toBe(expected);
    });
});