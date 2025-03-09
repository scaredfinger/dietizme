/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
// import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const pkg = require('./package.json');
const fs = require('fs');
const path = require('path');

const allDependencies = Object.entries(pkg.dependencies);

const externalPackagesEntries = allDependencies
  .filter(([dep,]) => /^(?!@dietizme)/.test([dep]))

const externalPackages = Object.fromEntries(externalPackagesEntries);
const externalPackagesKeys = Object.keys(externalPackages);

const workspacePackages = allDependencies
  .filter(([dep,]) => /^@dietizme/.test([dep]))

const getWorkspacePackageJson = (packageName) => {
  const packagePath = path.resolve(__dirname, `node_modules/@dietizme/${packageName.replace('@dietizme/', '')}/package.json`);
  if (fs.existsSync(packagePath)) {
    return require(packagePath);
  }
  return null;
};

const workspaceDependencies = workspacePackages.reduce((acc, [dep, version]) => {
  const packageJson = getWorkspacePackageJson(dep);
  if (packageJson && packageJson.dependencies) {
    Object.entries(packageJson.dependencies).forEach(([subDep, subVersion]) => {
      if (!acc[subDep]) {
        acc[subDep] = subVersion;
      }
    });
  }
  return acc;
}, {});

const allDependenciesMerged = { ...externalPackages, ...workspaceDependencies };
const allDependenciesKeys = Object.keys(allDependenciesMerged);

export default {
  input: 'functions/execute.ts',
  output: {
    file: 'dist/functions/execute.js',
    format: 'esm',
    sourcemap: false,
  },
  // Use allDependenciesKeys instead of just externalPackagesKeys to include 
  // dependencies from workspace packages
  external: allDependenciesKeys,
  plugins: [
    // Allow node module resolution so you can bundle workspace packages
    nodeResolve(),
    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    // commonjs(),
    // Compile TypeScript files
    typescript({ tsconfig: './tsconfig.json' }),
    // Generate a package.json in the output folder with all required dependencies
    generatePackageJson({
      outputFolder: 'dist',
      baseContents: ({ }) => ({
        // Include all dependencies (both direct external and from workspace packages)
        dependencies: allDependenciesMerged,
      }),
    }),
  ],
};
