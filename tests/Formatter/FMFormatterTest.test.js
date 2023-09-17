import FMFormatter from "../../src/Formatter/FMFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['12345', null],
            ['96940', null],
            ['96941', '96941'],
            ['96942', '96942'],
            ['96943', '96943'],
            ['96944', '96944'],
            ['96945', null],
            ['123456', null],
            ['1234567', null],
            ['12345678', null],
            ['123456789', null],
            ['969400000', null],
            ['969411234', '96941-1234'],
            ['969449999', '96944-9999'],
            ['969450000', null],
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
        expect(FMFormatter(input)).toBe(expected);
    });
});