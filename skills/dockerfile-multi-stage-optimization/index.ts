/**
 * Template básico de Dockerfile Multi-stage.
 */
export function getOptimizedDockerfile() {
  return `
# Build Stage
FROM node:20-slim AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Production Stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]
  `.trim();
}
