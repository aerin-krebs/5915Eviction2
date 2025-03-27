# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --omit-dev && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/cache/apk/*

# Copy the rest of the application code
COPY . .

RUN npm run build


# Expose the port
EXPOSE 3000

# Build and run
CMD [ "npm", "start" ]