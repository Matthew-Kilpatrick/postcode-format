import WSFormatter from "../../src/Formatter/WSFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', 'WS1234'],
            ['12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],

            ['WS', null],
            ['WS1', null],
            ['WS123', null],
            ['WS1234', 'WS1234'],
            ['WX1234', null],
            ['XS1234', null],
            ['WS12345', null],
            ['XWS1234', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(WSFormatter(input)).toBe(expected);
    });
});