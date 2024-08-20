import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const resolve = file => path.resolve(__dirname, file)

export default {
  input: resolve('src/index.ts'),
  output: {
    format: 'iife',
    file: resolve('dist/bundle.js'),
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    ts({
      tsconfig: resolve('tsconfig.json')
    }),
    serve({
      port: 3000,
      openPage: '/public/index.html',
      open: true
    })
  ]
}
