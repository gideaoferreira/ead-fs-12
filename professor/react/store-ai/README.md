# Store AI

A modern e-commerce platform powered by AI using React, Bootstrap, and Tailwind CSS.

## Project Structure

```
src/
├── assets/
│   ├── imagens/          # Image files
│   ├── icons/            # Icon files
│   ├── style/            # CSS and styling files
│   └── fonts/            # Font files
├── services/             # API and external service calls
├── shared/
│   └── components/       # Reusable components used globally
├── utils/                # Helper functions (date formatting, text manipulation, etc.)
└── views/                # Page components
    ├── home/             # Home page
    │   └── components/   # Components specific to home page
    └── products/         # Products page
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview production build:

```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap** - UI component library
- **Tailwind CSS** - Utility-first CSS framework

## Code Standards

- Code should be written in English
- Use camelCase for variable names
- Font family: Verdana
- Default font size: 14px for body text
- Icons from Bootstrap

## Utilities

### Date Formatting

- `toDatePtBr()` - Convert from USA format (YYYY-MM-DD) to PT-BR format (DD/MM/YYYY)
- `toDateUSA()` - Convert from PT-BR format (DD/MM/YYYY) to USA format (YYYY-MM-DD)

### Text Formatting

- `truncateText()` - Truncate text to a maximum length with ellipsis

## API Service

The `services/api.js` module provides utility functions for HTTP requests:

- `get()` - GET request
- `post()` - POST request
- `put()` - PUT request
- `deleteRequest()` - DELETE request

## License

Copyright © 2026 Store AI. All rights reserved.
