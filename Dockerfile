# Step 1: We build the angular app using the production config
FROM node:16-alpine AS build
# Set the working directory
WORKDIR /app
# Copy the package. json and package-lock. json files
COPY package*.json ./
# Run a clean install of the dependencies and install Angular CLI globally
RUN npm ci && npm install -g @angular/cli@15.0.0
# Copy all files
COPY . .
# Expose port 4200
EXPOSE 80
CMD [ "npm", "start" ]
# Build: docker build -t process-ctrl-ui-nodejs .
# Run: docker run -d -p 4200:4200 process-ctrl-ui-nodejs
