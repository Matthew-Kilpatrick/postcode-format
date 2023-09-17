import YTFormatter from "../../src/Formatter/YTFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['97599', null],
            ['97600', '97600'],
            ['97601', '97601'],
            ['97689', '97689'],
            ['97690', '97690'],
            ['97691', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(YTFormatter(input)).toBe(expected);
    });
});