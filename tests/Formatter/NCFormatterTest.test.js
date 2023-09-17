import NCFormatter from "../../src/Formatter/NCFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['98799', null],
            ['98800', '98800'],
            ['98801', '98801'],
            ['98889', '98889'],
            ['98890', '98890'],
            ['98891', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(NCFormatter(input)).toBe(expected);
    });
});