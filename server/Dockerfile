FROM node:18-alpine

WORKDIR /app

# Install OpenSSL and other dependencies required for Prisma
RUN apk add --no-cache openssl openssl-dev

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Start with nodemon for hot reload
CMD ["npm", "run", "dev"]
