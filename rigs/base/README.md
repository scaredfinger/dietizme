# Base Configuration Package

This package contains shared configuration files for the dietizme monorepo.

## Available Configurations

- **TypeScript**: `tsconfig.json`
- **ESLint**: `.eslintrc.json`
- **Prettier**: `.prettierrc.json`
- **EditorConfig**: `.editorconfig`
- **Vitest**: `vitest.config.ts`, `vitest.setup.ts`, `vitest.workspace.js`

## How to Use

### In Root Project

The root project extends these configurations like this:

```json
// tsconfig.json
{
  "extends": "./rigs/base/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@otiuming/*": ["libs/*"]
    }
  }
}
```

```json
// .eslintrc.json
{
  "extends": ["./rigs/base/.eslintrc.json"]
}
```

```json
// .prettierrc.json
{
  "extends": "./rigs/base/.prettierrc.json"
}
```

```js
// vitest.config.js
import baseConfig from './rigs/base/vitest.config'
export default baseConfig
```

### In Library/App Packages

In a package directory, extend the base configurations as follows:

```json
// tsconfig.json
{
  "extends": "../../../rigs/base/tsconfig.json",
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
```

```json
// .eslintrc.json
{
  "extends": ["../../../rigs/base/.eslintrc.json"]
}
```

```json
// .prettierrc.json
{
  "extends": "../../../rigs/base/.prettierrc.json"
}
```

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import baseConfig from '../../../rigs/base/vitest.config'

export default defineConfig({
  ...baseConfig.test,
  test: {
    ...baseConfig.test,
    // Add any package-specific overrides here
  },
})
```

## Benefits

- Centralized configuration management
- Consistent settings across all projects
- Easy updates to global configurations
- Simplified package configuration
