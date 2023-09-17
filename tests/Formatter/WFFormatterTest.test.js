import WFFormatter from "../../src/Formatter/WFFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['98599', null],
            ['98600', '98600'],
            ['98601', '98601'],
            ['98689', '98689'],
            ['98690', '98690'],
            ['98691', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(WFFormatter(input)).toBe(expected);
    });
});