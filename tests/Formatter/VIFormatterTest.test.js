import VIFormatter from "../../src/Formatter/VIFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['12345', null],
            ['00800', null],
            ['00801', '00801'],
            ['00851', '00851'],
            ['00852', null],
            ['123456', null],
            ['1234567', null],
            ['12345678', null],
            ['123456789', null],
            ['008000000', null],
            ['008011234', '00801-1234'],
            ['008519999', '00851-9999'],
            ['008520000', null],
            ['1234567890', null],

            ['000801', null],
            ['008510', null],
            ['0008011234', null],
            ['0085199990', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
            ['ABCDEFG', null],
            ['ABCDEFGH', null],
            ['ABCDEFGHI', null],
            ['ABCDEFGHIJ', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(VIFormatter(input)).toBe(expected);
    });
});