#!/usr/bin/env node

/**
 * This script helps migrate test files from Jest to Vitest
 * 
 * Run with: node migrate-test-files.js [path/to/test/dir]
 */

const fs = require('fs');
const path = require('path');

// Default directory to scan if none provided
const directoryToScan = process.argv[2] || '.';

// Import statements to add at the top of each file
const vitestImportStatement = `import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, vi } from 'vitest';
`;

// Function to process a file
async function processFile(filePath) {
  try {
    // Skip non-test files
    if (!filePath.match(/\.(test|spec)\.(ts|tsx|js|jsx)$/)) {
      return;
    }

    console.log(`Processing: ${filePath}`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip files that already have Vitest imports
    if (content.includes('from \'vitest\'')) {
      console.log(`  Already has Vitest imports, skipping`);
      return;
    }

    // Detect if file uses jest.mock
    const hasJestMock = content.includes('jest.mock(');
    
    // Special handling for files with jest.mock
    if (hasJestMock) {
      console.log(`  File contains jest.mock - requires manual migration`);
      
      // Save a backup of the original file
      fs.writeFileSync(`${filePath}.bak`, content);
      
      // Extract all jest.mock statements
      const mockRegex = /jest\.mock\(['"]([^'"]+)['"](,\s*\(\)\s*=>\s*\{[^}]+\})?\)/g;
      let mockMatches = [];
      let match;
      
      while ((match = mockRegex.exec(content)) !== null) {
        mockMatches.push({
          fullMatch: match[0],
          module: match[1],
          factory: match[2] || '',
        });
      }
      
      // Move all jest.mock statements to the top, converting to vi.mock
      if (mockMatches.length > 0) {
        // Remove all jest.mock statements from the content
        mockMatches.forEach(({ fullMatch }) => {
          content = content.replace(fullMatch, '/* MOCK MOVED TO TOP */');
        });
        
        // Create vi.mock statements
        const viMockStatements = mockMatches.map(({ module, factory }) => 
          `vi.mock('${module}'${factory.replace(/jest\./g, 'vi.')});`
        ).join('\n');
        
        // Add comments explaining the change
        const mockComment = `
// NOTE: These mocks were moved to the top because Vitest requires mocks to be
// defined before the module imports (unlike Jest's hoisting behavior)
${viMockStatements}
`;
        
        // Add mock statements after imports
        const importRegex = /^(import .+;\n)+/;
        if (importRegex.test(content)) {
          content = content.replace(importRegex, (match) => {
            return match + mockComment;
          });
        } else {
          content = mockComment + content;
        }
        
        // Add Vitest import at the top
        content = vitestImportStatement + content;
      }
    } else {
      // Normal replacement for files without jest.mock
      // Replace Jest mocks with Vitest
      content = content
        .replace(/jest\.fn/g, 'vi.fn')
        .replace(/jest\.spyOn/g, 'vi.spyOn')
        .replace(/jest\.clearAllMocks/g, 'vi.clearAllMocks')
        .replace(/jest\.resetAllMocks/g, 'vi.resetAllMocks')
        .replace(/jest\.useFakeTimers/g, 'vi.useFakeTimers')
        .replace(/jest\.useRealTimers/g, 'vi.useRealTimers')
        .replace(/jest\.advanceTimersByTime/g, 'vi.advanceTimersByTime')
        .replace(/jest\.runAllTimers/g, 'vi.runAllTimers');
        
      // Add import at the top of the file, after any other imports
      const importRegex = /^(import .+;\n)+/;
      if (importRegex.test(content)) {
        content = content.replace(importRegex, (match) => {
          return match + vitestImportStatement;
        });
      } else {
        content = vitestImportStatement + content;
      }
    }
    
    // Replace obsolete patterns
    content = content.replace(/fail\(/g, 'expect.fail(')
      .replace(/\.toBeTruthy\(\)/g, '.toBe(true)')
      .replace(/\.toBeFalsy\(\)/g, '.toBe(false)');
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`  Updated!`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to recursively scan a directory
async function scanDirectory(directory) {
  try {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules and .git directories
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
          await scanDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        await processFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning ${directory}:`, error);
  }
}

// Start the scan
console.log(`Starting scan of ${directoryToScan}`);
scanDirectory(directoryToScan).then(() => {
  console.log('Scan complete!');
});
