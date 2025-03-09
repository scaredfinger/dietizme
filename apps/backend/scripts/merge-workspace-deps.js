#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to the main package.json
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

// Extract @dietizme/* workspace dependencies
const workspaceDependencies = Object.keys(packageJson.dependencies || {})
  .filter(dep => dep.startsWith('@dietizme/'));

console.log(`Found ${workspaceDependencies.length} workspace dependencies to analyze`);

// Function to get workspace package.json
const getWorkspacePackageJson = (packageName) => {
  const packagePath = path.resolve(__dirname, `../node_modules/${packageName}/package.json`);
  if (fs.existsSync(packagePath)) {
    return require(packagePath);
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
      if (!packageJson.dependencies[subDep] && !packageJson.peerDependencies[subDep]) {
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

  // Update peerDependencies to match
  Object.entries(collectedDependencies).forEach(([dep, version]) => {
    if (!packageJson.peerDependencies[dep]) {
      packageJson.peerDependencies[dep] = version;
    }
  });

  // Write updated package.json
  fs.writeFileSync(
    packageJsonPath, 
    JSON.stringify(packageJson, null, 2) + '\n', 
    'utf8'
  );
  
  console.log(`Updated package.json with ${Object.keys(collectedDependencies).length} new dependencies`);
} else {
  console.log('No new dependencies to add');
}
