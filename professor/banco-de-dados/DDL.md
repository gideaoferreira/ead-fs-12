# Banco de dados

## DDL - Data Definition Language

DDL é um subconjunto da linguagem SQL que é usado para definir a estrutura do
banco de dados. Ele inclui comandos para criar, alterar e excluir tabelas, índices,
visões(views) e outros objetos de banco de dados.

### Comandos DDL

- `CREATE`: Usado para criar um novo objeto de banco de dados, como uma tabela ou índice.
- `ALTER`: Usado para modificar a estrutura de um objeto de banco de dados existente,
  como adicionar ou remover colunas de uma tabela.
- `DROP`: Usado para excluir um objeto de banco de dados, como uma tabela ou
  índice.
- `TRUNCATE`: Usado para remover todos os registros de uma tabela, mas mantém a
  estrutura da tabela intacta.
- `RENAME`: Usado para renomear um objeto de banco de dados, como uma tabela ou
  coluna.
- `COMMENT`: Usado para adicionar comentários a um objeto de banco de dados, como
  uma tabela ou coluna.

### Exemplo de uso

```sql
-- Criar um banco de dados chamado "meu_banco"
CREATE DATABASE meu_banco;
```

```sql
-- Selecionar o banco de dados "meu_banco" para uso
USE meu_banco;
```

```sql
-- Criar uma tabela de clientes
CREATE TABLE clientes (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE
);
```

```sql
-- Renomear a tabela de clientes para clientes_novos
RENAME TABLE clientes TO clientes_novos;
```

```sql
-- Excluir a tabela de clientes - Apaga a tabela e todos os seus dados
DROP TABLE clientes;
```

```sql
-- Truncar a tabela de clientes - Apaga todos os registros,
-- mas mantém a estrutura da tabela
TRUNCATE TABLE clientes;
```

```sql
-- Alterar a tabela de clientes para adicionar uma nova coluna
ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20);
```

```sql
-- Excluir a coluna "phone" da tabela de users
ALTER TABLE users DROP COLUMN phone;
```

```sql
-- Alterar o nome da coluna "name" para "full_name" na tabela de users
ALTER TABLE users RENAME COLUMN name TO full_name;
```

```sql
-- Alterar o tipo da coluna phone de VARCHAR para INTEGER na tabela de users
ALTER TABLE users MODIFY COLUMN phone INTEGER;
```
