# New instructions

## Prereqs

Make sure you have a ssh configuration in your `~/.ssh`
Make sure you have the Dev Containers extension in VsCode. Make sure you open the project in a Dev Container.

## Actual steps

Download `.secrets` and `.env` and copy to root directory.

Add the following records to your host file.

```text
127.0.0.1 host.docker.internal
127.0.0.1 local.auth.nhost.run
127.0.0.1 local.dashboard.nhost.run
127.0.0.1 local.db.nhost.run
127.0.0.1 local.functions.nhost.run
127.0.0.1 local.graphql.nhost.run
127.0.0.1 local.hasura.nhost.run
127.0.0.1 local.storage.nhost.run
```

## Main steps

For building the whole project. Needed before you run any of the apps

```bash
pnpm nx run-many --target build --all
```

For running omnidata

```bash
pnpm nx dev omnidata
```

For stopping it omnidata

```bash
pnpm nx stop omnidata
```

For cleanning all data

```bash
pnpm nx clean omnidata
```

## Sample data

Open file `generate-sample-organizations.spec.ts` run the whole file.

# We need to review all instructions from this point (Consider obsolete for the time being)

## Quick start

Download `.secrets`, `.env.staging`, `.env` and copy to root directory.

```bash
./dev.sh
```

If you see errors, most of the times is due to permissions.

```bash
./fix-permissions.sh
```

If you want to clean up

```bash
./clean-up.sh
```

To manually run projects

```bash
pnpm dev omnidata
pnpm dev owners
pnpm dev white-labels-default
```

To build manually

```bash
pnpm build omnidata
pnpm build owners
pnpm build white-labels-default
```

## Web sites structure

We are still moving in that direction.

```yaml
  pages:
    some_page_yada_yada:
      _deps: &this_is_where_all_deps_go
      some_nested_page:
        // ....
      index.page.tsx
```

The `_deps` folder. No better name yet, but the underscore ensures it's the first one.

```yaml
  _deps:
    components:
      // ...
    data-source:
      query.graphql
      // graphql files, hooks
    server.ts
    types.ts
```

## Components structure

There is always a top level components folder. There may be a optional category intermediate folder (e.g: buttons). Then there is the
components or their folders. For simple components create a file, for components that have sub components, create folders.

```yaml
  components:
    buttons:
      - SimpleButton.tsx
      - ComplexButton:
        components:
          - InnerPiece1.tsx
          - InnerPiece2.tsx
        index.tsx
```

## Check dependencies

```
npx depcheck
```

```
npx syncpack list-mismatches
```

## Troubleshooting with

Guide
https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj

Tools
https://rollupjs.org/introduction/
https://pnpm.io/pnpm-workspace_yaml
https://typescript-eslint.io/getting-started/
https://prettier.io/docs/en/install

Errors

### 1. 'jsx' is not exported by node_modules

This is because of missing commonjs import in rollup
import commonjs from '@rollup/plugin-commonjs';

### 2. 'React' refers to a UMD global

"jsx": "react-jsx" or import React from 'react'
https://www.totaltypescript.com/react-refers-to-a-umd-global

### 3. Module not found: ESM packages (X) need to be imported.

Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals
