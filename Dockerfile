# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/personal-website

# Copy package.json and package-lock.json to the working directory
COPY personal-website/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY personal-website ./

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]