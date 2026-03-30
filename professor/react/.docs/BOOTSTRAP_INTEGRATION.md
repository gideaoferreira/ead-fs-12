# Bootstrap Integration Across All React Projects

This document provides consistency patterns for using Bootstrap across all React projects in the workspace (basico, basico-02, basico-03, tdd-com-aux-id, tests, etc.).

## Consistent Setup Pattern

Every React project in this workspace follows the same Bootstrap integration pattern:

### 1. Installation

```bash
npm install bootstrap @popperjs/core sass
```

### 2. Folder Structure

```
src/
├── assets/
│   └── styles/
│       ├── bootstrap.scss  - Custom overrides only
│       ├── variables.scss  - Custom variables
│       └── main.scss       - Aggregator
└── ...
```

### 3. SCSS Files

**bootstrap.scss:**

```scss
/* Bootstrap is imported via JavaScript - this file is for overrides only */
```

**variables.scss:**

```scss
/* Custom Bootstrap variables */
```

**main.scss:**

```scss
@use "./variables.scss";
```

### 4. Main Entry Point (src/main.jsx)

```jsx
import "./assets/styles/main.scss";
import "bootstrap";
import "@popperjs/core";
```

## Component Patterns

All projects use **Bootstrap classes directly** in components without wrapper libraries:

```jsx
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Brand
        </a>
      </div>
    </nav>
  );
}
```

## Common Bootstrap Classes Reference

### Grid System

- `.container` - Fixed-width container
- `.row` - Row wrapper
- `.col-*`, `.col-md-*`, `.col-lg-*` - Responsive columns

### Spacing

- Margin: `.mt-*`, `.mb-*`, `.ms-*`, `.me-*`, `.m-*`
- Padding: `.pt-*`, `.pb-*`, `.ps-*`, `.pe-*`, `.p-*`
- Gap: `.gap-*` (for flex items)

### Display & Flex

- `.d-flex`, `.d-block`, `.d-inline`, `.d-none`
- `.justify-content-*`, `.align-items-*`, `.flex-column`

### Text

- `.text-center`, `.text-start`, `.text-end`
- `.text-muted`, `.text-danger`, `.text-success`

### Colors

- Text: `.text-primary`, `.text-secondary`, etc.
- Background: `.bg-primary`, `.bg-secondary`, etc.
- Border: `.border`, `.border-primary`, etc.

### Components

- Buttons: `.btn`, `.btn-primary`, `.btn-sm`, `.btn-outline-*`
- Forms: `.form-control`, `.form-label`, `.form-check`
- Cards: `.card`, `.card-body`, `.card-title`, `.card-text`
- Navbar: `.navbar`, `.navbar-brand`, `.navbar-nav`, `.nav-link`
- Alerts: `.alert`, `.alert-primary`, `.alert-danger`

## Project-Specific Differences

All projects follow the same pattern. Any project-specific customizations should be documented in that project's `README.md` and `BOOTSTRAP_GUIDE.md`.

## Updating Bootstrap Version

To update Bootstrap across projects:

1. Update `package.json`: `npm install bootstrap@latest`
2. No other changes needed (SCSS imports remain the same)
3. Run `npm run dev` to verify functionality

## Testing Bootstrap Components

Use `@testing-library/react` to test behavior, not CSS classes:

```jsx
test("Header renders navbar", () => {
  render(<Header />);
  expect(screen.getByRole("navigation")).toBeTruthy();
});
```

Avoid testing CSS class names directly; they're implementation details.

## For New Projects

When creating new React projects in this workspace:

1. Follow the folder structure from above
2. Use the same Bootstrap import pattern
3. Use classes directly in components
4. Create `BOOTSTRAP_GUIDE.md` in the project root
5. Update this document if introducing new patterns

---

**Last Updated**: March 23, 2026
**Bootstrap Version**: 5.3.8
**Pattern**: Direct class usage (no react-bootstrap or other wrappers)
