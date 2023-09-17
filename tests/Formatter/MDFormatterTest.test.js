import MDFormatter from "../../src/Formatter/MDFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', 'MD-1234'],
            ['12345', null],
            ['123456', null],
            ['1234567', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
            ['ABCDEFG', null],

            ['MD', null],
            ['MD1', null],
            ['MD12', null],
            ['MD123', null],
            ['MD1234', 'MD-1234'],
            ['MD12345', null],
            ['XMD1234', null],
            ['XD1234', null],
            ['MX1234', null],
            ['MDX123', null],
            ['M1234', null],
            ['D1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(MDFormatter(input)).toBe(expected);
    });
});