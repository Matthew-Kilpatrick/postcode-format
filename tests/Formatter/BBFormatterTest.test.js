import BBFormatter from "../../src/Formatter/BBFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', 'BB12345'],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],

            ['BB', null],
            ['BB1', null],
            ['BB123', null],
            ['BB1234', null],
            ['BB11000', 'BB11000'],
            ['BB110000', null],
            ['XBB11000', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(BBFormatter(input)).toBe(expected);
    });
});