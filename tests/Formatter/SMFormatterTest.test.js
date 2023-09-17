import SMFormatter from "../../src/Formatter/SMFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['47889', null],
            ['47890', '47890'],
            ['47891', '47891'],
            ['47898', '47898'],
            ['47899', '47899'],
            ['47900', null],
            ['123456', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(SMFormatter(input)).toBe(expected);
    });
});