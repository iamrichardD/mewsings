# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./
COPY packages/core/package*.json ./packages/core/
COPY packages/frontend/package*.json ./packages/frontend/

# Install dependencies
RUN npm install

# Copy source code
COPY packages/core/ ./packages/core/
COPY packages/frontend/ ./packages/frontend/

# Build the applications
RUN npm run build -w @mewsings/core
RUN npm run build -w @mewsings/frontend

# Production stage
FROM nginx:alpine

# Copy built frontend assets to nginx
COPY --from=build /app/packages/frontend/dist /usr/share/nginx/html

# Copy custom nginx configuration if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
