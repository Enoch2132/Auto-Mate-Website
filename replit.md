# Replit.md

## Overview

This is a full-stack Express.js and React application that uses TypeScript throughout the stack. The project is structured as a monorepo with separate client and server directories, along with shared code for database schemas and types. The application appears to be an API integration platform with AI-driven natural language processing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight routing library)
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with hot module replacement
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx

### Build and Development Strategy
- **Development**: Vite dev server with Express backend running concurrently
- **Production**: Vite builds the frontend to `dist/public`, Express serves static files
- **TypeScript**: Shared configuration across client, server, and shared modules

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized in `shared/schema.ts` using Drizzle's table definitions
- **Migrations**: Managed through Drizzle Kit with migrations stored in `./migrations`
- **Current Schema**: Users table with id, username, and password fields

### Storage Interface
- **Abstraction**: IStorage interface for CRUD operations
- **Implementation**: DatabaseStorage class using PostgreSQL with Drizzle ORM
- **Database**: Neon PostgreSQL with serverless connection pooling
- **Design**: Full database integration with type-safe queries and transactions

### UI System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theming**: CSS variables with light/dark mode support
- **Components**: Comprehensive set including forms, navigation, dialogs, and data display
- **Responsive**: Mobile-first design with responsive breakpoints

### API Architecture
- **Pattern**: RESTful APIs with `/api` prefix
- **Error Handling**: Centralized error middleware with status code handling
- **Logging**: Request/response logging with performance metrics
- **Validation**: Zod schemas for type-safe validation

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with middleware pipeline
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses with error handling and logging

### Query Client Configuration
- **Error Handling**: Automatic retry and error boundaries
- **Authentication**: Cookie-based sessions with 401 handling
- **Caching**: Infinite stale time with manual invalidation
- **Network**: Fetch-based with credential inclusion

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **express**: Web framework for Node.js

### UI Dependencies
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development

## Deployment Strategy

### Environment Configuration
- **Development**: Vite dev server with Express backend, hot reload enabled
- **Production**: Static file serving with Express, single deployment artifact
- **Database**: Environment variable `DATABASE_URL` required for PostgreSQL connection

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Hosting Considerations
- **Static Assets**: Served by Express in production
- **Database**: Requires PostgreSQL-compatible database (configured for Neon)
- **Environment**: Node.js runtime with ES module support
- **Sessions**: PostgreSQL-backed session storage for scalability

The architecture is designed for scalability and maintainability, with clear separation between frontend and backend concerns while sharing common types and schemas through the shared directory.