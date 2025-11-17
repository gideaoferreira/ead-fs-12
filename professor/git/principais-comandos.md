# Pricipais comandos do Git

## Configuração inicial

Este comando configura o nome de usuário e o e-mail para todos os repositórios no sistema.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "
```

Este comando clona um repositório remoto para o seu computador local.

```bash
git clone url-do-repositorio
```

Este comando mostra o status atual do repositório.

```bash
git status
```

Este comando lista as branchs disponíveis no repositório local.

```bash
git branch
```

Este comando cria uma nova branch e troca para ela.

```bash
git switch -c nome-da-branch
git checkout -b nome-da-branch
```

Este comando adiciona arquivos ao stage para o próximo commit.

```bash
git add .
git add nome-do-arquivo.extensão
```

Este comando cria um commit com as mudanças staged.

```bash
git commit -m "Mensagem do commit"
```

Este comando envia as mudanças para o repositório remoto.

```bash
git push origin nome-da-branch
```

Este comando puxa as mudanças do repositório remoto para o repositório local.

```bash
git pull origin nome-da-branch
```
