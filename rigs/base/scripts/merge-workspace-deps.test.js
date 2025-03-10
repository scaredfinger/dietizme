import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Create mocks before any imports
vi.mock('fs', () => ({
  readFileSync: vi.fn(),
  existsSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

vi.mock('child_process', () => ({
  execSync: vi.fn(),
}));

vi.mock('path', () => ({
  resolve: vi.fn(),
  join: (...args) => args.join('/'),
}));

describe('merge-workspace-deps', () => {
  // Save original env
  const originalEnv = process.env;
  const originalCwd = process.cwd;

  // Setup before each test
  beforeEach(() => {
    // Reset all mocks
    vi.resetAllMocks();
    
    // Mock process.cwd
    process.cwd = vi.fn().mockReturnValue('/fake/project');
    
    // Reset process.env
    process.env = { ...originalEnv };
    
    // Set up path.resolve mock behavior
    path.resolve.mockImplementation((dir, file) => {
      if (file === 'package.json') return '/fake/project/package.json';
      if (file && file.includes('node_modules')) return `/fake/project/${file}`;
      return `${dir}/${file}`;
    });
    
    // Mock console methods
    console.log = vi.fn();
    console.error = vi.fn();
  });

  // Restore environment after each test
  afterEach(() => {
    process.env = originalEnv;
    process.cwd = originalCwd;
  });

  // Test helper to run the script in a controlled way
  const runScript = async () => {
    // Clear module cache before importing
    vi.resetModules();

    // Use direct import to test the script
    const scriptModule = await import('./merge-workspace-deps.js');
    return scriptModule.default;
  };

  test('should add missing dependencies from workspace packages', async () => {
    // Set up mock for package.json
    const mockPackageJson = {
      dependencies: {
        '@dietizme/utils-common': 'workspace:*'
      }
    };
    
    // Set up mock for workspace package.json
    const mockWorkspacePackageJson = {
      dependencies: {
        'lodash-es': '^4.17.21',
        'axios': '^1.3.4'
      }
    };
    
    // Configure mocks
    fs.readFileSync.mockImplementation((path) => {
      if (path === '/fake/project/package.json') {
        return JSON.stringify(mockPackageJson);
      }
      if (path.includes('utils-common')) {
        return JSON.stringify(mockWorkspacePackageJson);
      }
      throw new Error(`Unexpected path: ${path}`);
    });
    
    fs.existsSync.mockReturnValue(true);
    
    // Run the script
    await runScript();
    
    // Check if package.json was updated correctly
    expect(fs.writeFileSync).toHaveBeenCalled();
    const updatedJson = JSON.parse(fs.writeFileSync.mock.calls[0][1]);
    expect(updatedJson.dependencies['lodash-es']).toBe('^4.17.21');
    expect(updatedJson.dependencies['axios']).toBe('^1.3.4');
  });
  
  test('should not modify package.json if no new dependencies found', async () => {
    // Set up mock for package.json
    const mockPackageJson = {
      dependencies: {
        '@dietizme/utils-common': 'workspace:*',
        'lodash-es': '^4.17.21',
        'axios': '^1.3.4'
      }
    };
    
    // Set up mock for workspace package.json
    const mockWorkspacePackageJson = {
      dependencies: {
        'lodash-es': '^4.17.21',
        'axios': '^1.3.4'
      }
    };
    
    // Configure mocks
    fs.readFileSync.mockImplementation((path) => {
      if (path === '/fake/project/package.json') {
        return JSON.stringify(mockPackageJson);
      }
      if (path.includes('utils-common')) {
        return JSON.stringify(mockWorkspacePackageJson);
      }
      throw new Error(`Unexpected path: ${path}`);
    });
    
    fs.existsSync.mockReturnValue(true);
    
    // Run the script
    await runScript();
    
    // Check that writeFileSync was not called
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  test('should skip running pnpm install when already in an install process', async () => {
    // Set environment to simulate being in an install process
    process.env.MERGE_DEPS_RUNNING = 'true';
    
    // Set up mock for package.json
    const mockPackageJson = {
      dependencies: {
        '@dietizme/utils-common': 'workspace:*'
      }
    };
    
    // Set up mock for workspace package.json
    const mockWorkspacePackageJson = {
      dependencies: {
        'new-package': '^1.0.0'
      }
    };
    
    // Configure mocks
    fs.readFileSync.mockImplementation((path) => {
      if (path === '/fake/project/package.json') {
        return JSON.stringify(mockPackageJson);
      }
      if (path.includes('utils-common')) {
        return JSON.stringify(mockWorkspacePackageJson);
      }
      throw new Error(`Unexpected path: ${path}`);
    });
    
    fs.existsSync.mockReturnValue(true);
    
    // Run the script
    await runScript();
    
    // Verify pnpm install was not run
    expect(execSync).not.toHaveBeenCalled();
  });

  test('should run pnpm install when not in an install process', async () => {
    // Clear the environment variable
    process.env.MERGE_DEPS_RUNNING = undefined;
    
    // Set up mock for package.json
    const mockPackageJson = {
      dependencies: {
        '@dietizme/utils-common': 'workspace:*'
      }
    };
    
    // Set up mock for workspace package.json
    const mockWorkspacePackageJson = {
      dependencies: {
        'new-package': '^1.0.0'
      }
    };
    
    // Configure mocks
    fs.readFileSync.mockImplementation((path) => {
      if (path === '/fake/project/package.json') {
        return JSON.stringify(mockPackageJson);
      }
      if (path.includes('utils-common')) {
        return JSON.stringify(mockWorkspacePackageJson);
      }
      throw new Error(`Unexpected path: ${path}`);
    });
    
    fs.existsSync.mockReturnValue(true);
    
    // Run the script
    await runScript();
    
    // Verify pnpm install was run
    expect(execSync).toHaveBeenCalled();
    expect(execSync.mock.calls[0][0]).toContain('pnpm install');
  });

  test('should handle errors when workspace package.json cannot be found', async () => {
    // Set up mock for package.json
    const mockPackageJson = {
      dependencies: {
        '@dietizme/missing-package': 'workspace:*'
      }
    };
    
    // Configure mocks
    fs.readFileSync.mockImplementation((path) => {
      if (path === '/fake/project/package.json') {
        return JSON.stringify(mockPackageJson);
      }
      throw new Error(`Unexpected path: ${path}`);
    });
    
    fs.existsSync.mockReturnValue(false);
    
    // Run the script
    await runScript();
    
    // No errors should be thrown and no file should be written
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
