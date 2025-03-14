#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import process from 'process';
import { mergePackageDependencies, readPackageJson } from './merge-package-dependencies.js';

// Main function that can be imported for testing
const mergeWorkspaceDeps = () => {
  // Check if we're already in a dependency installation process
  const isInInstallProcess = process.env.MERGE_DEPS_RUNNING === 'true';

  // Path to the main package.json - using process.cwd() to work from any project
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');

  // Read the original file content as a string
  const originalContent = fs.readFileSync(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(originalContent);

  // Extract workspace dependencies with version containing 'workspace'
  const workspaceDependencies = Object.entries(packageJson.dependencies || {})
    .filter(([, version]) => typeof version === 'string' && version.includes('workspace'))
    .map(([dep]) => dep);

  console.log(`Found ${workspaceDependencies.length} workspace dependencies to analyze`);

  // Create a map of all workspace packages
  const allPackageJsons = {};
  workspaceDependencies.forEach(dep => {
    const pkg = readPackageJson(dep, process.cwd());
    if (pkg) {
      allPackageJsons[dep] = pkg;
      console.log(`Loaded package.json for ${dep}`);
    }
  });

  // Use the dedicated function to merge dependencies
  const updatedPackageJson = mergePackageDependencies(allPackageJsons, packageJson);

  // Create modified content
  const modifiedContent = JSON.stringify(updatedPackageJson, null, 2) + '\n';
  
  // Only write if content has actually changed
  if (originalContent !== modifiedContent) {
    fs.writeFileSync(packageJsonPath, modifiedContent, 'utf8');
    console.log(`Updated package.json with new dependencies`);
    
    // Run pnpm install to update node_modules, but only if we're not already in an install process
    if (!isInInstallProcess) {
      console.log('Running pnpm install to update dependencies...');
      try {
        // Set the environment variable to prevent recursion
        execSync('MERGE_DEPS_RUNNING=true pnpm install', {
          stdio: 'inherit',
          env: {
            ...process.env,
            MERGE_DEPS_RUNNING: 'true'
          }
        });
        console.log('Dependencies updated successfully');
      } catch (error) {
        console.error('Failed to update dependencies:', error.message);
      }
    } else {
      console.log('Skipping dependency installation as we are already in an install process');
    }
  } else {
    console.log('Dependencies already properly configured, no changes needed');
  }
};

// Run the function directly if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  mergeWorkspaceDeps();
}

// Export for testing
export default mergeWorkspaceDeps;
