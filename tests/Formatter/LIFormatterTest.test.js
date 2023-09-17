import LIFormatter from "../../src/Formatter/LIFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['9484', null],
            ['9485', '9485'],
            ['9486', '9486'],
            ['9497', '9497'],
            ['9498', '9498'],
            ['9499', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(LIFormatter(input)).toBe(expected);
    });
});