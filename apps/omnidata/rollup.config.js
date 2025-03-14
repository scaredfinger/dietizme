/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
// import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const pkg = require('./package.json');

const allDependencies = Object.entries(pkg.dependencies);

const externalPackagesEntries = allDependencies
  .filter(([dep,]) => !dep.startsWith('@otiuming/'))

const externalPackages = Object.fromEntries(externalPackagesEntries);
const externalPackagesKeys = Object.keys(externalPackages);

export default {
  input: 'functions/execute.ts',
  output: {
    file: 'dist/functions/execute.js',
    format: 'esm',
    sourcemap: false,
  },
  external: externalPackagesKeys,
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    generatePackageJson({
      outputFolder: 'dist/functions',
      additionalDependencies: externalPackages,
      baseContents: ({ }) => ({
        name: pkg.name,
        type: 'module',
        dependencies: {},
      }),
    }),
  ],
};
