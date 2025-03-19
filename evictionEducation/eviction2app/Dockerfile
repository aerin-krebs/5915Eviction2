# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port
EXPOSE 3000

# Build and run
CMD [ "npm", "start" ]