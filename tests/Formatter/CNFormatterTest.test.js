import CNFormatter from "../../src/Formatter/CNFormatter.js";

const tests = [
            ['', null],

            ['1', null],
            ['12', null],
            ['123', null],
            ['1234', null],
            ['12345', null],
            ['000000', null],
            ['010000', '010000'],
            ['100000', '100000'],
            ['123456', '123456'],
            ['12345X', null],
            ['X12345', null],

            ['A', null],
            ['AB', null],
            ['ABC', null],
            ['ABCD', null],
            ['ABCDE', null],
            ['ABCDEF', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(CNFormatter(input)).toBe(expected);
    });
});