# Base Image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./backend/

# Install dependencies
WORKDIR /app/backend
RUN npm install

# Copy the rest of the project
WORKDIR /app
COPY . .

# Expose your backend port
EXPOSE 3000

# Run backend server
WORKDIR /app/backend
CMD ["node", "server.js"]
