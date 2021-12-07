import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import visualizer from 'rollup-plugin-visualizer'

const plugins = [
  external(),
  nodeResolve(),
  postcss({}),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['jsx'],
  }),
  commonjs(),
]

const esmConfig = {
  input: 'src/example.js',
  external: ['prop-types'],
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: plugins.concat(visualizer({ filename: 'stats/esm.html' })),
}

const m = [esmConfig]
export default m
