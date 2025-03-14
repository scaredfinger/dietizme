import fs from 'fs';
import path from 'path';

/**
 * Reads a package.json file from node_modules
 * 
 * @param {string} packageName - The name of the package
 * @param {string} basePath - The base path to node_modules
 * @returns {Object|null} - The package.json object or null if not found
 */
export const readPackageJson = (packageName, basePath) => {
  const packagePath = path.resolve(basePath, `node_modules/${packageName}/package.json`);
  if (fs.existsSync(packagePath)) {
    const content = fs.readFileSync(packagePath, 'utf8');
    return JSON.parse(content);
  }
  return null;
};

/**
 * Merges workspace dependencies recursively
 * 
 * @param {Object} allPackageJsons - All package.json objects in the solution
 * @param {Object} targetPackageJson - The package.json to merge dependencies into (immutable)
 * @returns {Object} - A new package.json object with all dependencies merged
 */
export const mergePackageDependencies = (allPackageJsons, targetPackageJson) => {
  // Create a deep copy of the target package.json to avoid mutation
  const result = JSON.parse(JSON.stringify(targetPackageJson));
  
  // Ensure dependencies object exists
  if (!result.dependencies) {
    result.dependencies = {};
  }
  
  // Set to track processed packages to avoid circular dependencies
  const processed = new Set();
  
  // Function to recursively collect dependencies
  const collectDependencies = (packageName) => {
    if (processed.has(packageName)) return {};
    processed.add(packageName);
    
    const pkg = allPackageJsons[packageName];
    if (!pkg || !pkg.dependencies) return {};
    
    const collectedDeps = {};
    
    // Process all dependencies
    Object.entries(pkg.dependencies).forEach(([dep, version]) => {
      // Skip if already in the target
      if (targetPackageJson.dependencies[dep]) return;
      
      // Add to collected dependencies
      collectedDeps[dep] = version;
      
      // If this is a workspace dependency (contains 'workspace' in version), recursively collect
      if (typeof version === 'string' && version.includes('workspace')) {
        const nestedDeps = collectDependencies(dep);
        Object.assign(collectedDeps, nestedDeps);
      }
    });
    
    return collectedDeps;
  };
  
  // Extract workspace dependencies (version contains 'workspace')
  const workspaceDeps = Object.entries(targetPackageJson.dependencies || {})
    .filter(([, version]) => typeof version === 'string' && version.includes('workspace'))
    .map(([dep]) => dep);
  
  // Collect all recursive dependencies
  const allDependencies = {};
  workspaceDeps.forEach(dep => {
    const deps = collectDependencies(dep);
    Object.assign(allDependencies, deps);
  });
  
  // Merge with the result
  result.dependencies = {
    ...result.dependencies,
    ...allDependencies
  };
  
  return result;
};

export default mergePackageDependencies;
