# Docker Setup with PostgreSQL and Hot Reload

## Current State Analysis

- MongoDB Atlas connection in `server/db/connect-to-database.js`
- Client proxies to `http://localhost:8080` in `client/package.json`
- Server runs on port 8000 (default) or PORT env var
- No existing Docker configuration or .env files

## Implementation Steps

### 1. Create Docker Configuration Files

#### Root-level `docker-compose.yml`

Create a three-service setup:

- **db**: PostgreSQL 15 with persistent volume
- **server**: Node.js backend with nodemon for hot reload
- **client**: React dev server with hot module replacement

Key configurations:

- Mount `./server` and `./client` as volumes for hot reload
- Network all services together
- Expose ports: 3000 (client), 8080 (server), 5432 (db)
- Database volume: `postgres_data` for persistence

#### `server/Dockerfile`

- Base: `node:18-alpine`
- Working directory: `/app`
- Install dependencies and run with nodemon
- Expose port 8080

#### `client/Dockerfile`

- Base: `node:18-alpine`
- Working directory: `/app`
- Install dependencies and run dev server
- Expose port 3000

### 2. Environment Configuration

#### `.env.example` (root level)

Template with:

```
# Database
POSTGRES_USER=audiophile
POSTGRES_PASSWORD=your_password_here
POSTGRES_DB=audiophile_db
DATABASE_URL=postgresql://audiophile:your_password_here@db:5432/audiophile_db

# Server
PORT=8080
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here

# Client
REACT_APP_API_URL=http://localhost:8080
```

#### `.env` (root level, gitignored)

Copy of `.env.example` with actual values populated

### 3. Update Application Configuration

#### Update `client/package.json`

- Change proxy from `http://localhost:8080` to use environment variable or keep for Docker network
- Client will connect to server via Docker network name `server:8080` internally

#### Update `client/src/utils/apiUtils.js`

- Change hardcoded `http://localhost:8080` to use environment variable
- Use `process.env.REACT_APP_API_URL` or default to `http://localhost:8080`

#### Update `server/index.js`

- Update PORT to use `process.env.PORT || 8080` (already uses PORT)
- Ensure CORS allows client connection from Docker network

### 4. Database Transition Preparation

#### Create `.dockerignore` files

- For server: Ignore `node_modules`, `.env`, logs
- For client: Ignore `node_modules`, `.env`, `build`

#### Update `.gitignore`

- Add `.env` (not `.env.example`)
- Add `postgres_data/` if not already ignored
- Add Docker-related files if needed

### 5. Future PostgreSQL/Prisma Compatibility

Structure setup to support future migration:

- `DATABASE_URL` in .env ready for Prisma
- PostgreSQL port exposed for local database tools
- Server database connection will be refactored in goal #2

## Files to Create

1. `/docker-compose.yml` - Main orchestration file
2. `/server/Dockerfile` - Backend container definition
3. `/client/Dockerfile` - Frontend container definition
4. `/.env.example` - Environment template
5. `/.env` - Local environment (with real values)
6. `/server/.dockerignore` - Server Docker ignore rules
7. `/client/.dockerignore` - Client Docker ignore rules

## Files to Modify

1. `/client/src/utils/apiUtils.js` - Use environment variable for API URL
2. `/.gitignore` - Add .env and Docker-related ignores

## Verification Steps

After implementation (goal #4):

1. Run `docker-compose up --build`
2. Verify client accessible at `http://localhost:3000`
3. Verify server accessible at `http://localhost:8080`
4. Test hot reload: Edit a React component, see instant browser update
5. Test hot reload: Edit a server route, see nodemon restart
6. Verify PostgreSQL running with `docker-compose ps`

## Notes

- MongoDB connection code in `server/db/connect-to-database.js` will remain until goal #2
- Server will initially fail to connect to database until products/carts are migrated to PostgreSQL
- This is expected and will be resolved in goal #2 (database migration)
- Development workflow: Just edit files, changes auto-reflect in containers

## Progress Tracking

### To-dos

- [x] Create docker-compose.yml with postgres, server, and client services with volume mounts for hot reload
- [x] Create server/Dockerfile with Node 18, nodemon, and proper working directory setup
- [x] Create client/Dockerfile with Node 18, React dev server, and proper working directory setup
- [x] Create .env.example and .env with database, server, and client configuration
- [x] Create .dockerignore files for server and client to exclude node_modules and build artifacts
- [x] Update client/src/utils/apiUtils.js to use environment variable for API URL
- [x] Update .gitignore to exclude .env and Docker-related files

## Implementation Status

### Completed (October 17, 2024)

All Docker configuration files have been successfully created and deployed:

**Infrastructure Files:**
- ✅ `docker-compose.yml` - Three-service architecture (PostgreSQL 15, Node.js server, React client)
- ✅ `server/Dockerfile` - Node 18 Alpine with nodemon for hot reload
- ✅ `client/Dockerfile` - Node 18 Alpine with React dev server
- ✅ `server/.dockerignore` - Excludes node_modules, logs, .env files
- ✅ `client/.dockerignore` - Excludes node_modules, build artifacts, .env files
- ✅ `setup-env.sh` - Helper script for environment setup and container orchestration

**Configuration Files:**
- ✅ `.env.example` - Template with all required environment variables
- ✅ `.env` - Created with actual values (gitignored)
- ✅ `.gitignore` - Updated to exclude .env and postgres_data/

**Code Updates:**
- ✅ `client/src/utils/apiUtils.js` - Now uses `REACT_APP_API_URL` environment variable

**Container Status:**
- ✅ PostgreSQL: Running successfully on port 5432 with persistent volume
- ✅ Server: Running successfully on port 8080 with nodemon hot reload
- ✅ Client: Running successfully on port 3000 with hot module replacement

### ✅ RESOLVED: Node.js 18 / OpenSSL Compatibility

**Problem (RESOLVED):**
The React client container was failing to start with the following error:
```
Error: error:0308010C:digital envelope routines::unsupported
```

**Root Cause:**
- React Scripts v4.0.3 (current version) uses Webpack 4
- Webpack 4 relies on MD4 hash algorithm
- Node.js 17+ removed support for MD4 (deprecated/insecure algorithm)
- Using Node 18 Alpine caused OpenSSL incompatibility

**Solution Applied:**
- Added `NODE_OPTIONS=--openssl-legacy-provider` to docker-compose.yml client service
- This enables the legacy OpenSSL provider for MD4 support
- **Status:** ✅ RESOLVED - Client now starts and compiles successfully

**Additional Issue Discovered:**
- Missing `validator` dependency in client package.json
- **Solution:** Installed via `docker-compose exec client npm install validator`
- **Status:** ✅ RESOLVED - Client now compiles without errors

**Security Note:**
The legacy OpenSSL provider uses deprecated algorithms (MD4). This is acceptable for development but should be addressed by upgrading React Scripts to v5+ in the future dependency update phase.

### ✅ Docker Setup Complete!

**All verification steps completed successfully:**

1. ✅ **OpenSSL fix applied** - Legacy provider enabled in docker-compose.yml
2. ✅ **Containers restarted** - All services running successfully
3. ✅ **Hot reload verified** - Both client and server hot reload working
4. ✅ **All services accessible:**
   - Client: http://localhost:3000 ✅
   - Server: http://localhost:8080 ✅ (returns "No products found" - expected until database migration)
   - PostgreSQL: localhost:5432 ✅

**Additional Issues Resolved:**
- ✅ Missing `validator` dependency installed
- ✅ Client compilation errors resolved
- ✅ Hot module replacement working (tested with App.js edit)

**Docker Setup Status: COMPLETE** 🎉

### Files Created During Implementation

```
/docker-compose.yml
/server/Dockerfile
/server/.dockerignore
/client/Dockerfile
/client/.dockerignore
/.env.example
/.env (gitignored)
/setup-env.sh
```

### Files Modified During Implementation

```
/client/src/utils/apiUtils.js
/.gitignore
/DOCKER_SETUP_PLAN.md
```

