# TDD with AI

Um projeto React com Bootstrap e TDD (Test-Driven Development), desenvolvido com Vite.

## 📋 Stack Técnico

- **React** 19.2.4 - UI library
- **Vite** 8.0.0 - Dev server e build tool
- **Bootstrap** 5.3.8 - CSS framework
- **Sass** 1.70.0 - CSS preprocessor
- **Vitest** 4.1.0 - Unit testing framework
- **React Router** 6.20.0 - Client-side routing
- **@testing-library/react** 16.3.2 - Testing utilities

## 🚀 Quick Start

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### Testes

```bash
npm run test          # Executa testes em watch mode
npm run test -- run   # Executa testes uma única vez
npm run test:ui       # Abre interface visual do Vitest
```

### Build

```bash
npm run build         # Build para produção
npm run preview       # Preview do build
```

### Linting

```bash
npm run lint          # Verifica código com ESLint
```

## 📁 Estrutura de Pastas

```
src/
├── components/           # Componentes reutilizáveis
│   ├── app-header/      # Header
│   ├── app-footer/      # Footer
│   └── app-main/        # Conteúdo principal
├── pages/               # Páginas (Components de rota)
│   └── home/            # Página inicial
├── route/               # Configuração de rotas
├── assets/
│   └── styles/          # Arquivos SCSS
│       ├── variables.scss  # Variáveis customizadas
│       └── main.scss       # Estilos principais
├── tests/               # Utilitários de teste
│   └── test-utils.jsx  # Custom render com providers
├── App.jsx              # Componente raiz
├── Layout.jsx           # Layout principal
└── main.jsx            # Entrada da aplicação
```

## 📝 Padrões de Código

### Componentes

- **Um componente por arquivo** - Cada `.jsx` contém um único componente
- **Componentes funcionais** - Sempre use hooks (useState, useEffect, etc.)
- **PascalCase para nomes** - `Header.jsx`, `HomePage.jsx`
- **Importações de Bootstrap** - Use classes diretamente: `.btn`, `.container`, `.mt-4`

### Exemplo de Componente

```jsx
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Brand
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
```

### Testes (TDD)

- **Testes junto aos componentes** - `ComponentName.spec.jsx` na mesma pasta
- **Use test-utils.jsx** - Wrapper customizado com providers
- **Teste comportamento** - Não teste CSS, teste funcionalidade

```jsx
import { render, screen } from "../../tests/test-utils";
import Header from "./Header";

test("Header renders brand text", () => {
  render(<Header />);
  expect(screen.getByText("Brand")).toBeTruthy();
});
```

## 🎨 Styling com Bootstrap

### Importações (src/main.jsx)

```jsx
import "bootstrap";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
```

### Utilizando Classes Bootstrap

- **Grid**: `.container`, `.row`, `.col-md-6`
- **Spacing**: `.mt-4`, `.mb-2`, `.p-3`
- **Flex**: `.d-flex`, `.justify-content-center`, `.align-items-center`
- **Buttons**: `.btn`, `.btn-primary`, `.btn-sm`
- **Forms**: `.form-control`, `.form-label`, `.form-check`

Para mais: [Bootstrap 5.3 Docs](https://getbootstrap.com/docs/5.3/)

## 🧪 Workflow TDD

1. Escreva o teste primeiro (defina o comportamento esperado)
2. Execute o teste - ele vai falhar
3. Implemente a funcionalidade
4. Execute o teste - deve passar
5. Refatore se necessário

Exemplo:

```jsx
// 1. Teste (Header.spec.jsx)
test("Header renders brand text", () => {
  render(<Header />);
  expect(screen.getByText("Brand")).toBeTruthy();
});

// 2. npm run test (FAIL)

// 3. Componente (Header.jsx)
function Header() {
  return <a className="navbar-brand">Brand</a>;
}

// 4. npm run test (PASS)
```

## 📦 Adicionando Dependências

```bash
npm install package-name                    # Dependência de produção
npm install --save-dev package-name         # Dependência de desenvolvimento
```

## 🔗 Links Úteis

- [React Docs](https://react.dev/)
- [Vite Docs](https://vite.dev/)
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/)
- [Vitest Docs](https://vitest.dev/)
- [React Router Docs](https://reactrouter.com/)

## 📄 Licença

MIT

---

**Stack Version**: React 19.2.4 + Bootstrap 5.3.8 + Vitest 4.1.0
**Data**: Março 23, 2026
