import PWFormatter from "../../src/Formatter/PWFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['12345', null],
            ['96939', null],
            ['96940', '96940'],
            ['96941', null],
            ['123456', null],
            ['1234567', null],
            ['12345678', null],
            ['123456789', null],
            ['969390000', null],
            ['96940123', null],
            ['969401234', '96940-1234'],
            ['9694012345', null],
            ['969410000', null],
            ['1234567890', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
            ['ABCDEFG', null],
            ['ABCDEFGH', null],
            ['ABCDEFGHI', null],
            ['ABCDEFGHIJK', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(PWFormatter(input)).toBe(expected);
    });
});