# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./
COPY packages/core/package*.json ./packages/core/
COPY packages/backend/package*.json ./packages/backend/

# Install dependencies
RUN npm install

# Copy source code
COPY packages/core/ ./packages/core/
COPY packages/backend/ ./packages/backend/

# Build the applications
RUN npm run build -w @mewsings/core
RUN npm run build -w @mewsings/backend

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install production dependencies
COPY --from=build /app/package*.json ./
COPY --from=build /app/packages/core/package*.json ./packages/core/
COPY --from=build /app/packages/backend/package*.json ./packages/backend/

RUN npm install --production

# Copy built applications
COPY --from=build /app/packages/core/dist ./packages/core/dist
COPY --from=build /app/packages/backend/dist ./packages/backend/dist

EXPOSE 3000

CMD ["node", "packages/backend/dist/main"]
