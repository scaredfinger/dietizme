cp .secrets apps/omnidata
pnpm install
pnpm build-libs
pnpm nx build omnidata
pnpm dev