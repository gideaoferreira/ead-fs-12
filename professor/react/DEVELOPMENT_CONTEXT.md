# Development Context: React + Bootstrap + TDD

This document is a **permanent reference guide** for developing in this workspace. Use it as the foundation for any development task.

---

## 1. Stack Técnico (Technical Stack)

### Core Framework

- **React** 19.2.4 - UI library
- **Vite** 8.0.0 - Dev server and build tool
- **Vitest** 4.1.0 - Unit testing framework
- **@testing-library/react** 16.3.2 - Testing utilities

### Styling

- **Bootstrap** 5.3.8 - CSS framework
- **Sass** 1.70.0 - CSS preprocessor
- **Popper.js** 2.11.8 - Positioning engine for Bootstrap interactivity

### Navigation

- **React Router** 6.20.0 - Client-side routing

### Development Tools

- **ESLint** 9.39.4 - Code linting

---

## 2. Estrutura Padrão de Pastas (Standard Folder Structure)

```
Use o Padrão o react
```

---

## 3. Padrões de Código (Code Patterns)

### Component Structure

- **One component per file** - Each `.jsx` file contains exactly one component
- **Functional components only** - Use React hooks (useState, useEffect, etc.)
- **PascalCase filenames** - `Header.jsx`, `ProductCard.jsx`
- **Simple logic** - Keep business logic minimal; composition over complexity

### Example Component

```jsx
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Brand
          </a>
          {/* navbar content */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
```

### Styling with Bootstrap

- **Use Bootstrap classes directly** - No CSS-in-JS or wrapper components
- **Custom styles in SCSS only** - For unique designs not covered by Bootstrap
- **Override Bootstrap in variables.scss** - Customize colors, spacing, fonts as needed

### Testing Pattern

- **Co-locate tests** - `ComponentName.spec.jsx` in same folder as component
- **Use test-utils.jsx** - Custom render wrapper with global providers
- **Test behavior, not styling** - CSS classes are implementation details

Example test:

```jsx
import { render, screen } from "../../tests/test-utils";
import Header from "./Header";

test("Header renders brand text", () => {
  render(<Header />);
  expect(screen.getByText("Brand")).toBeTruthy();
});
```

---

## 4. Convenções de Nomes (Naming Conventions)

| Type                | Convention             | Example                            |
| ------------------- | ---------------------- | ---------------------------------- |
| **Components**      | PascalCase             | `Header.jsx`, `ProductCard.jsx`    |
| **Component Files** | PascalCase             | `Header.jsx`, `Footer.jsx`         |
| **Folders**         | kebab-case             | `src/components/app-header/`       |
| **Functions**       | camelCase              | `handleClick()`, `fetchProducts()` |
| **Constants**       | UPPER_SNAKE_CASE       | `API_BASE_URL`, `DEFAULT_TIMEOUT`  |
| **CSS Classes**     | Bootstrap convention   | `.navbar`, `.btn-primary`, `.mt-4` |
| **Test Files**      | ComponentName.spec.jsx | `Header.spec.jsx`                  |

---

## 5. Comandos Essenciais (Essential Commands)

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Testing
npm run test         # Run tests with Vitest in watch mode
npm run test -- run  # Run tests once

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

## 6. Bootstrap + React Pattern

### Setup (src/main.jsx)

```jsx
use @import "./node_modules/bootstrap/dist/css/bootstrap.min.css"; For bootstrap css import
import "./assets/styles/main.scss";
import "bootstrap";
import "@popperjs/core";
```

### Styling Structure (src/assets/styles/)

- `bootstrap.scss` - Empty or contains custom variable overrides (Bootstrap CSS not imported here)
- `variables.scss` - Custom Bootstrap variable overrides
- `main.scss` - Aggregates custom stylesheets

**Important**: Bootstrap is imported directly in `src/main.jsx` via JavaScript, not in SCSS files. This is the correct approach for Vite bundling.

### Usage in Components

Use Bootstrap utility classes directly:

- **Grid**: `.container`, `.row`, `.col-md-6`
- **Spacing**: `.mt-4`, `.mb-2`, `.p-3`
- **Flex**: `.d-flex`, `.justify-content-center`, `.align-items-center`
- **Buttons**: `.btn`, `.btn-primary`, `.btn-sm`
- **Forms**: `.form-control`, `.form-label`, `.form-check`

---

## 7. Project Initialization

### New Project Setup

```bash
# Create project react using vite
npm create vite@latest

# Install dependencies (from package.json)
npm install

# Start development
npm run dev

# Run tests
npm run test
```

### Quick Commands

```bash
npm run dev       # Local development
npm run test      # Unit tests
npm run build     # Production build
npm run lint      # Check code quality
```

---

## 8. TDD Workflow

1. **Write test first** - Define expected behavior in `.spec.jsx`
2. **Run test** - See it fail (`npm run test`)
3. **Write component** - Implement to satisfy test
4. **Run test** - See it pass
5. **Refactor** - Improve code quality while keeping tests green

### Example TDD Cycle

```jsx
// 1. Write test (Header.spec.jsx)
test("Header renders brand text", () => {
  render(<Header />);
  expect(screen.getByText("Brand")).toBeTruthy();
});

// 2. Run: npm run test (FAIL)

// 3. Write component (Header.jsx)
function Header() {
  return <a className="navbar-brand">Brand</a>;
}

// 4. Run: npm run test (PASS)

// 5. Refactor as needed
```

---

## 9. Key Principles

✅ **Simplicity First** - Start simple, add complexity only when needed
✅ **Components Are Presentational** - Keep business logic in tests and utilities
✅ **Bootstrap Does Styling** - Use utility classes; custom CSS only when necessary
✅ **Tests Guide Development** - Write tests before implementation
✅ **Consistent Naming** - Follow conventions to make code predictable
✅ **One Responsibility** - Each component does one thing well

---

## 10. Common Patterns

### Layout Component (wraps pages)

```jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

### Page Component (routed)

```jsx
function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Page content here</p>
    </div>
  );
}
```

### Form Component

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form className="row g-3">
      <div className="col-12">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
```

---

## 11. Bootstrap Resources

- **Official Docs**: https://getbootstrap.com/docs/5.3/
- **Grid System**: https://getbootstrap.com/docs/5.3/layout/grid/
- **Utilities**: https://getbootstrap.com/docs/5.3/utilities/
- **Components**: https://getbootstrap.com/docs/5.3/components/

---

## 12. When to Create New Components

Create a new component when:

- ✅ Multiple pages/components need the same UI consistently
- ✅ Component has specific behavior/state
- ✅ Makes code more readable and maintainable

Don't create components for:

- ❌ Single-use UI snippets
- ❌ Thin wrappers around Bootstrap classes
- ❌ Things better solved with composition

---

**Last Updated**: March 23, 2026
**Stack Version**: React 19.2.4 + Bootstrap 5.3.8 + Vitest 4.1.0
