#!/bin/bash

# Setup script for Docker environment
echo "Setting up Docker environment for Audiophile E-commerce..."

# Check if .env exists, if not create it from .env.example
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "✅ .env file created. Please update the values in .env as needed."
else
    echo "✅ .env file already exists."
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop and try again."
    exit 1
fi

echo "✅ Docker is running."

# Build and start containers
echo "Building and starting Docker containers..."
docker-compose up --build -d

echo "🎉 Setup complete!"
echo ""
echo "Your application should be available at:"
echo "  - Frontend: http://localhost:3000"
echo "  - Backend: http://localhost:8080"
echo "  - PostgreSQL: localhost:5432"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down"
echo "To restart: docker-compose up -d"
