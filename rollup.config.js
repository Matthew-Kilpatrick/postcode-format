import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const config = {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'iife',
        name: 'postcodeFormat',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
};

export default config;