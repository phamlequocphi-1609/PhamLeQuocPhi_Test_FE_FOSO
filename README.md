# The OM Lounge - React + TypeScript + Vite

# PHAM LE QUOC PHI - TEST- FOSO_FE

A modern nail salon and spa booking application built with React, TypeScript, and Vite.

## Features

- **Home Page**: Landing page with hero section and service overview
- **Services Page**: Complete service catalog with categories and pricing
- **About Page**: Company information and team details
- **News Page**: Latest updates and announcements
- **Contact Page**: Contact information and location

## Tech Stack

### Frontend

- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint + Prettier** - Code formatting and linting

### UI Components

- **Shadcn/ui** - Modern component library
- **Lucide Icons** - Icon library
- **Class Variance Authority** - Component variants

### Testing

- **Vitest** - Unit testing framework
- **Testing Library** - React component testing
- **Coverage Reports** - Test coverage tracking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # Base UI components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   └── headers/        # Header components (HeaderNav, HeaderTop)
├── features/           # Feature-based modules
│   ├── home/           # Home page components
│   ├── services/        # Services feature pages
│   ├── booking/         # Booking system
│   ├── about/           # About page
│   ├── news/            # News page
│   └── contact/         # Contact page
├── router/             # Routing configuration
├── constants/          # App constants and data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── test/               # Unit tests
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start development server
npm run dev

# or
yarn dev
```

### Build

```bash
# Build for production
npm run build

# or
yarn build
```

### Testing

```bash
# Run unit tests
npm run test

# or
yarn test

# Run tests with coverage
npm run test --coverage

# or
yarn test --coverage
```

### Linting

```bash
# Run ESLint
npm run lint

# or
yarn lint

# Fix linting issues
npm run lint --fix

# or
yarn lint --fix
```

## Deployment

### GitHub Actions

The project includes automated CI/CD pipeline with:

- **Code Quality**: ESLint checks on every push
- **Testing**: Automated unit test execution
- **Build**: Production build verification
- **Coverage**: Test coverage reporting

### Environment Variables

Required environment variables for production:

```env
VITE_API_URL=your-api-url
VITE_APP_NAME=The OM Lounge
```

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run unit tests
- `lint` - Run ESLint
- `lint:fix` - Fix ESLint issues
- `type-check` - Run TypeScript compiler
