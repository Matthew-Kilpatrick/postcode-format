import MHFormatter from "../../src/Formatter/MHFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['12345', null],
            ['96959', null],
            ['96960', '96960'],
            ['96965', '96965'],
            ['96970', '96970'],
            ['96971', null],
            ['123456', null],
            ['1234567', null],
            ['12345678', null],
            ['123456789', null],
            ['969590000', null],
            ['969601234', '96960-1234'],
            ['969709999', '96970-9999'],
            ['969710000', null],
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
        expect(MHFormatter(input)).toBe(expected);
    });
});