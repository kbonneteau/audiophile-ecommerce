FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start development server with legacy OpenSSL provider for older React apps
CMD ["npm", "start", "--", "--openssl-legacy-provider"]
