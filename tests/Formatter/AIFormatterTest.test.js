import AIFormatter from "../../src/Formatter/AIFormatter.js";

const tests = [
            ['', null],
            ['2640', 'AI-2640'],
            ['2641', null],
            ['AI', null],
            ['AB2650', null],
            ['AI2640', 'AI-2640'],
            ['AI2641', null],
            ['AI26401', null],
            ['0AI2640', null],
        ];
describe.each(tests)('.format("%s")', (input, expected) => {
    test(`Should be detected as ${expected === null ? 'invalid' : 'valid'}`, () => { 
        expect(AIFormatter(input)).toBe(expected);
    });
});