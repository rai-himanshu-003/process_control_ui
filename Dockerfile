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
# Build the application
RUN npm run build --configuration-prod
# Step 2: We use the nginx image to serve the application
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/process-ctrl-ui /usr/share/nginx/html
# Expose port 4200
EXPOSE 4200
CMD [ "nginx", "-g", "daemon off;" ]
# Build: docker build -t process-ctrl-ui-nodejs .
# Run: docker run -d -p 4200:4200 process-ctrl-ui-nodejs