# 1 - Instalar as libs para testes

npm install -D eslint vitest jsdom @testing-library/react @testing-library/jest-dom

# 2 - Criar a pasta `test` dentro da pasta `src` para adicionar o setup da lib de testes dentro do arquivo setup.js

```json
  /src
    /test
      - setup.js
```

Dentro do aquivo setup.js importar a lib conforme abaixo

```javascript
import "@testing-library/jest-dom";
```

# 3 - Adicionar as configurações de testes ao aquivo do vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
  },
});
```

# 4 - Adicionar o script de testes no arquivo package.json na chave `scripts`

```json
  "scripts": {
    "dev": "vite",
    "test": "vitest", // <-- ADICIONAR ESSE SCRIPT
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

# 5 - Documentação com os ações/act e asserts

# 6 - Roles, nomes semanticos das tags que usamos para os testes

https://www.w3.org/TR/html-aria/#docconformance
