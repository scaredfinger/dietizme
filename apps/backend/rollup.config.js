/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const pkg = require('./package.json');

const externalPackagesEntries = Object.entries(pkg.dependencies)
  .filter(([dep,]) => /^(?!@dietizme)/.test([dep]))

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
    // Allow node module resolution so you can bundle workspace packages
    nodeResolve(),
    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs(),
    // Compile TypeScript files
    typescript({ tsconfig: './tsconfig.json' }),
    // Generate a package.json in the output folder containing only peerDependencies
    generatePackageJson({
      outputFolder: 'dist',
      baseContents: ({ }) => ({
        dependencies: externalPackages,
      }),
    }),
  ],
};
