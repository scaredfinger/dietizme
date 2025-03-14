import { describe, test, expect } from 'vitest';
import { mergePackageDependencies } from './merge-package-dependencies.js';

describe('mergePackageDependencies', () => {
  test('should merge basic dependencies from workspace packages', () => {
    // Mock packages
    const allPackages = {
      '@otiuming/pkg-a': {
        name: '@otiuming/pkg-a',
        dependencies: {
          'lodash': '^4.17.21',
          'express': '^4.17.1'
        }
      }
    };
    
    // Target package with one workspace dependency
    const targetPackage = {
      name: 'main-package',
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    expect(result).toEqual({
      name: 'main-package',
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0',
        'lodash': '^4.17.21',
        'express': '^4.17.1'
      }
    });
  });
  
  test('should not override existing dependencies in target package', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        dependencies: {
          'lodash': '^4.17.21',
          'express': '^4.17.1'
        }
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0',
        'lodash': '^4.17.15' // Older version
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    expect(result.dependencies.lodash).toBe('^4.17.15'); // Should keep target version
    expect(result.dependencies.express).toBe('^4.17.1'); // Should add this dependency
  });
  
  test('should handle recursive dependencies', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        dependencies: {
          '@otiuming/pkg-b': 'workspace:^1.0.0',
          'lodash': '^4.17.21'
        }
      },
      '@otiuming/pkg-b': {
        dependencies: {
          'axios': '^0.21.1',
          'moment': '^2.29.1'
        }
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    expect(result.dependencies).toHaveProperty('lodash');
    expect(result.dependencies).toHaveProperty('axios');
    expect(result.dependencies).toHaveProperty('moment');
  });
  
  test('should handle circular dependencies', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        dependencies: {
          '@otiuming/pkg-b': 'workspace:^1.0.0',
          'dep-a': '^1.0.0'
        }
      },
      '@otiuming/pkg-b': {
        dependencies: {
          '@otiuming/pkg-a': 'workspace:^1.0.0', // Circular reference
          'dep-b': '^1.0.0'
        }
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    // Should include dependencies from both packages without infinite recursion
    expect(result.dependencies).toHaveProperty('dep-a');
    expect(result.dependencies).toHaveProperty('dep-b');
  });
  
  test('should only follow workspace dependencies for recursion', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        dependencies: {
          '@otiuming/pkg-b': 'workspace:^1.0.0',
          'regular-pkg': '^1.0.0'
        }
      },
      '@otiuming/pkg-b': {
        dependencies: {
          'deep-dep': '^1.0.0'
        }
      },
      'regular-pkg': {
        dependencies: {
          'should-not-be-included': '^1.0.0'
        }
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    expect(result.dependencies).toHaveProperty('deep-dep');
    expect(result.dependencies).toHaveProperty('regular-pkg');
    expect(result.dependencies).not.toHaveProperty('should-not-be-included');
  });
  
  test('should handle empty dependencies', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        // No dependencies property
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    // Should not throw and return the same dependencies
    expect(result).toEqual(targetPackage);
  });
  
  test('should handle target package without dependencies', () => {
    const allPackages = {};
    const targetPackage = {
      // No dependencies
    };
    
    const result = mergePackageDependencies(allPackages, targetPackage);
    
    // Should add an empty dependencies object
    expect(result).toHaveProperty('dependencies');
    expect(result.dependencies).toEqual({});
  });
  
  test('should not modify the original target package', () => {
    const allPackages = {
      '@otiuming/pkg-a': {
        dependencies: {
          'lodash': '^4.17.21'
        }
      }
    };
    
    const targetPackage = {
      dependencies: {
        '@otiuming/pkg-a': 'workspace:^1.0.0'
      }
    };
    
    const originalTarget = JSON.parse(JSON.stringify(targetPackage));
    
    mergePackageDependencies(allPackages, targetPackage);
    
    // Original should not be modified
    expect(targetPackage).toEqual(originalTarget);
  });
});
