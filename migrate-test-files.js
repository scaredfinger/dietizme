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

    // Replace Jest mocks with Vitest
    content = content
      // Replace jest.mock with vi.mock
      .replace(/jest\.mock/g, 'vi.mock')
      .replace(/jest\.fn/g, 'vi.fn')
      .replace(/jest\.spyOn/g, 'vi.spyOn')
      .replace(/jest\.clearAllMocks/g, 'vi.clearAllMocks')
      .replace(/jest\.resetAllMocks/g, 'vi.resetAllMocks')
      // Add any other replacements here

    // Add import at the top of the file, after any other imports
    const importRegex = /^(import .+;\n)+/;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match) => {
        return match + vitestImportStatement;
      });
    } else {
      content = vitestImportStatement + content;
    }

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
        if (entry.name !== 'node_modules' && entry.name !== '.git') {
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
