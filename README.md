# SoundStream

A modern, public-facing website built with React, TypeScript, and Webpack.

## Tech Stack

- **Language**: TypeScript (strict mode)
- **Framework**: React 18+ with functional components and hooks
- **Build Tool**: Webpack 5
- **Unit Testing**: Jest with React Testing Library
- **Styling**: SCSS modules
- **State Management**: React hooks (Context API, useState, useReducer)
- **Routing**: React Router v6
- **Package Manager**: npm

## Project Structure

```
soundstream/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   └── Header.test.tsx
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   └── Layout/
│   │       ├── Layout.tsx
│   │       └── Layout.module.scss
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.module.scss
│   │   │   └── Home.test.tsx
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── About.module.scss
│   │   │   └── About.test.tsx
│   │   └── NotFound/
│   │       ├── NotFound.tsx
│   │       └── NotFound.module.scss
│   ├── styles/
│   │   └── global.scss
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.tsx
│   └── setupTests.ts
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000).

### Building

Create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Features

- ✅ TypeScript with strict mode enabled
- ✅ React 18 with functional components
- ✅ React Router v6 for navigation
- ✅ SCSS modules for component styling
- ✅ Webpack 5 with development and production configurations
- ✅ Jest and React Testing Library setup
- ✅ ESLint configuration
- ✅ Path aliases for cleaner imports
- ✅ Hot Module Replacement (HMR)
- ✅ Responsive layout with Header and Footer

## Available Routes

- `/` - Home page
- `/about` - About page
- `*` - 404 Not Found page

## Development Guidelines

- Use functional components with hooks
- Follow TypeScript strict mode
- Use SCSS modules for styling (avoid CSS-in-JS)
- Write tests for all components
- Use path aliases for imports (e.g., `@components/`, `@pages/`)
- Keep components small and focused
- Use proper semantic HTML

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features

## License

ISC
