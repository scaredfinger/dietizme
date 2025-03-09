#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Main function that can be imported for testing
const mergeWorkspaceDeps = () => {
  // Check if we're already in a dependency installation process
  // This helps prevent infinite recursion
  const isInInstallProcess = process.env.MERGE_DEPS_RUNNING === 'true';

  // Path to the main package.json - using process.cwd() to work from any project
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');

  // Read the original file content as a string
  const originalContent = fs.readFileSync(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(originalContent);

  // Extract @dietizme/* workspace dependencies
  const workspaceDependencies = Object.keys(packageJson.dependencies || {})
    .filter(dep => dep.startsWith('@dietizme/'));

  console.log(`Found ${workspaceDependencies.length} workspace dependencies to analyze`);

  // Function to get workspace package.json
  const getWorkspacePackageJson = (packageName) => {
    const packagePath = path.resolve(process.cwd(), `node_modules/${packageName}/package.json`);
    if (fs.existsSync(packagePath)) {
      // Use direct file reading for ES modules
      const packageJsonContent = fs.readFileSync(packagePath, 'utf8');
      return JSON.parse(packageJsonContent);
    }
    return null;
  };

  // Collect all dependencies from workspace packages
  const collectedDependencies = {};

  workspaceDependencies.forEach(dep => {
    const workspacePackage = getWorkspacePackageJson(dep);
    if (workspacePackage && workspacePackage.dependencies) {
      console.log(`Processing dependencies for ${dep}`);
      
      Object.entries(workspacePackage.dependencies).forEach(([subDep, version]) => {
        if (!packageJson.dependencies[subDep]) {
          collectedDependencies[subDep] = version;
          console.log(`- Adding ${subDep}@${version}`);
        }
      });
    }
  });

  // Only update if we found new dependencies
  if (Object.keys(collectedDependencies).length > 0) {
    // Update dependencies
    packageJson.dependencies = {
      ...packageJson.dependencies,
      ...collectedDependencies
    };

    // Create modified content
    const modifiedContent = JSON.stringify(packageJson, null, 2) + '\n';
    
    // Only write if content has actually changed
    if (originalContent !== modifiedContent) {
      fs.writeFileSync(packageJsonPath, modifiedContent, 'utf8');
      console.log(`Updated package.json with ${Object.keys(collectedDependencies).length} new dependencies`);
      
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
  } else {
    console.log('No new dependencies to add');
  }
};

// Run the function directly if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  mergeWorkspaceDeps();
}

// Export for testing
export default mergeWorkspaceDeps;
