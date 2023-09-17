import COFormatter from "../../src/Formatter/COFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['000000', null],
            ['123456', null],
            ['661001', '661001'],
            ['760002', '760002'],
            ['850000', null],
            ['850001', '850001'],
            ['990000', null],
            ['1234567', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(COFormatter(input)).toBe(expected);
    });
});