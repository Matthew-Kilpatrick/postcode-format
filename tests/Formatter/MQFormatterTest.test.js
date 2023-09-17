import MQFormatter from "../../src/Formatter/MQFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['123456', null],

            ['97199', null],
            ['97200', '97200'],
            ['97201', '97201'],
            ['97289', '97289'],
            ['97290', '97290'],
            ['97291', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(MQFormatter(input)).toBe(expected);
    });
});