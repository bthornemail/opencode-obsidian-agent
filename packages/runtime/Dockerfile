# ---- Builder Stage ----
FROM node:20 as builder

WORKDIR /app

# Copy workspace configs and package sources
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY packages/core packages/core
COPY runtime runtime

# Install dependencies and build the runtime
RUN pnpm install --prod --filter runtime...
RUN pnpm --filter runtime build

# ---- Final Stage ----
FROM node:20-alpine

WORKDIR /app

# Copy only the necessary built artifacts and dependencies from the builder stage
COPY --from=builder /app/runtime/dist ./dist
COPY --from=builder /app/runtime/node_modules ./node_modules
COPY --from=builder /app/packages/core/node_modules ./packages/core/node_modules

ENV NODE_ENV=production

# The runtime will listen on port 4201 inside the container
EXPOSE 4201

# The command to run the application
CMD ["node", "dist/index.js"]
