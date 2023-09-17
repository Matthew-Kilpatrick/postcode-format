import REFormatter from "../../src/Formatter/REFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],

            ['97000', null],
            ['97399', null],
            ['97400', '97400'],
            ['97412', '97412'],
            ['97499', '97499'],
            ['97500', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(REFormatter(input)).toBe(expected);
    });
});