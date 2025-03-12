# DietizMe Backend

This is the backend service for the DietizMe application, built using Nhost, GraphQL, and serverless functions.

## Overview

The backend is structured as a containerized application using Docker and Nhost, which provides:

- GraphQL API (Hasura)
- PostgreSQL database
- Auth service
- Storage service
- Serverless functions

## Directory Structure

```
backend/
├── functions/              # Serverless functions
│   └── execute.ts          # Main entry point for serverless functions
├── nhost/                  # Nhost configuration (symlinked to dist)
├── nhost-config-template/  # Templates for Nhost setup
│   ├── data/               # Data configuration templates
│   └── traefik/            # Traefik routing configuration
├── docker-compose.yaml             # Main Docker Compose configuration
├── docker-compose.overrides.yaml   # Environment-specific overrides
├── rollup.config.js                # Rollup bundling configuration
├── package.json                    # Project dependencies and scripts
└── tsconfig.json                   # TypeScript configuration
```

## Build Process

The backend build process involves several steps to prepare the application for deployment:

1. **Link Nhost Configuration**: Creates symbolic links for Nhost configuration
2. **Generate Environment Files**: Creates necessary `.env` and `.secrets` files
3. **Clean Functions**: Removes previous function builds
4. **Build Functions**: Compiles TypeScript functions using Rollup
5. **Generate Package Lock**: Creates `package-lock.json` for functions
6. **Build Nhost Config**: Copies Nhost configuration templates
7. **Create Required Folders**: Ensures all necessary folders exist in the output

### Build Script Flow

```
1. pnpm link-nhost
2. pnpm generate-dot-files 
3. pnpm clean-functions
4. pnpm build-functions
5. pnpm build-packagelockjson
6. pnpm build-nhost-config
7. pnpm build-folders
```

## Function Bundling

Functions are bundled using Rollup with the following configuration:

1. The entry point is `functions/execute.ts`
2. TypeScript is transpiled using `@rollup/plugin-typescript`
3. Node modules are resolved using `@rollup/plugin-node-resolve`
4. External dependencies are excluded from the bundle:
   - All non-workspace dependencies are marked as external
   - Workspace dependencies (starting with `@dietizme`) are included in the bundle
5. A `package.json` is generated for the functions folder with the correct dependencies

## Environment Configuration

The backend requires several environment files to run:

1. `.env`: Contains environment variables for configuration
2. `.secrets`: Contains sensitive credentials and secrets

These files are generated during the build process but require templates to be available.

## Development Workflow

### Prerequisites

- Docker and Docker Compose installed
- Node.js and pnpm installed
- Nhost CLI (optional, for advanced usage)

### Building and Running

1. **Build the backend**:
   ```bash
   pnpm nx build backend
   ```
   
   Or from the project root:
   ```bash
   pnpm nx build apps/backend
   ```

2. **Start the backend services**:
   ```bash
   pnpm nx dev backend
   ```
   
   This will:
   - Build the backend
   - Start the Docker containers
   - Make services available at the configured endpoints

3. **Stop the backend services**:
   ```bash
   pnpm nx stop backend
   ```

### Accessing the Services

Once running, the services are available at:

- **GraphQL API**: http://local.graphql.nhost.run/v1/graphql
- **Hasura Console**: http://local.hasura.nhost.run
- **Auth Service**: http://local.auth.nhost.run
- **Functions**: http://local.functions.nhost.run
- **Storage**: http://local.storage.nhost.run

### Developing Functions

1. Create or modify functions in the `functions/` directory
2. Run `pnpm nx build backend` to compile changes
3. Test your function at `http://local.functions.nhost.run/[function-name]`

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure no other services are running on the ports required by the Docker containers.

2. **Missing environment files**: If you get errors about missing `.env` or `.secrets`, ensure you've followed the setup steps from the main README.

3. **Docker container issues**: If containers fail to start properly, try:
   ```bash
   pnpm nx clean backend
   pnpm nx dev backend
   ```

4. **Nhost configuration errors**: Check that the Nhost configuration templates are properly set up.

## Advanced Usage

### GraphQL Schema Management

To export the current GraphQL schema:
```bash
pnpm export-schema
```

To generate TypeScript types from the GraphQL schema:
```bash
pnpm generate-functions-graphql
```

### Manual Container Management

You can manage the Docker containers directly:

```bash
# Start containers
docker compose --file docker-compose.yaml --file docker-compose.overrides.yaml --project-name ${NHOST_PROJECT_NAME} up --detach

# Stop containers
docker compose --file docker-compose.yaml --file docker-compose.overrides.yaml --project-name ${NHOST_PROJECT_NAME} down

# View logs
docker compose --file docker-compose.yaml --file docker-compose.overrides.yaml --project-name ${NHOST_PROJECT_NAME} logs -f
```

## Integration with Frontend

The backend exposes APIs that are consumed by the frontend applications. The main integration points are:

1. **GraphQL API**: The primary data interface, used for querying and mutating data
2. **Auth Service**: Handles user authentication and authorization
3. **Functions**: Custom business logic endpoints
4. **Storage**: File upload and retrieval

Frontend applications connect to these services using the appropriate client libraries.