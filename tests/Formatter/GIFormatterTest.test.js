import GIFormatter from "../../src/Formatter/GIFormatter.js";

const tests = [
            ['', null],

            ['1234567', null],
            ['GX110AA', null],
            ['GX111AA', 'GX11 1AA'],
            ['GX111AB', null],
            ['AX111AA', null],
            ['GX111AAA', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(GIFormatter(input)).toBe(expected);
    });
});