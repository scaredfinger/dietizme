#!/usr/bin/env node

/**
 * generate-env.js - Generate a .env file from current environment variables
 *
 * Usage: node generate-env.js [filename]
 *   filename: Optional. The name of the file to generate (default: .env)
 */

import { writeFileSync, existsSync } from 'fs';
import { createInterface } from 'readline';
import { basename } from 'path';
import process from 'process';

// Default file name
let envFile = '.env';

// Show usage information
function showHelp() {
  const scriptName = basename(process.argv[1]);
  console.log(`Usage: ${scriptName} [filename]`);
  console.log('  Generate a .env file from current environment variables.');
  console.log('');
  console.log('  filename: Optional. The name of the file to generate (default: .env)');
  console.log('');
  console.log('Example:');
  console.log(`  ${scriptName} my.env`);
  process.exit(0);
}

// Check for help option
if (process.argv.includes('-h') || process.argv.includes('--help')) {
  showHelp();
}

// Check if a filename argument was provided
if (process.argv.length > 2) {
  envFile = process.argv[2];
}

// Function to write environment variables to file
function writeEnvFile() {
  // Get environment variables and sort them
  const envVars = Object.entries(process.env)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => `${key}='${value}'`)
    .join('\n');

  // Write to file
  writeFileSync(envFile, envVars);
  console.log(`Environment variables written to ${envFile}`);
}

// Check if file exists and handle overwrite
if (existsSync(envFile)) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`File ${envFile} already exists. Overwrite? (y/n): `, (answer) => {
    if (answer.toLowerCase() === 'y') {
      console.log(`Generating environment variables file: ${envFile}`);
      writeEnvFile();
    } else {
      console.log('Operation cancelled.');
    }
    rl.close();
  });
} else {
  console.log(`Generating environment variables file: ${envFile}`);
  writeEnvFile();
}
