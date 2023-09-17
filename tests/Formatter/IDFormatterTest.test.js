import IDFormatter from "../../src/Formatter/IDFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['012', null],
            ['123', null],
            ['1234', null],
            ['01234', null],
            ['12345', '12345'],
            ['99999', '99999'],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(IDFormatter(input)).toBe(expected);
    });
});