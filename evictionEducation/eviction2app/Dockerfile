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

# # Serve stage
# FROM nginx:1.25.1

# # Copy the custom nginx.conf file to the container
# COPY .docker/nginx.conf /etc/nginx/nginx.conf

# # Copy the built React app from the build stage to the nginx container
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 3000
# EXPOSE 3000

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]