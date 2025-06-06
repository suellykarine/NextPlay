# NextPlay

Uma plataforma para visualização de vídeos com autenticação e gerenciamento de favoritos.

## Funcionalidades Principais

- ✅ **Cadastro de usuários**
- 🔑 **Login**
- 📺 **Dashboard com listagem e visualização de vídeos**
- ❤️ **Favoritar vídeos e visualizá-los**
- 📺 **Filtragem de vídeos**
- 🖱️ **Scroll infinito**
- 🚪 **Logout**

## Tecnologias Utilizadas

### Frontend

- **Next.js** (v15.3.3)
- **React 19**
- **Styled Components** (v6.1.18)
- **React Query** (v5.80.3)
- **React Hook Form + Yup**
- **typescript**

### Backend

- **NextAuth.js** (v4.24.11)
- **Prisma** (v6.9.0)
- **SQLite**


### Utilitários

- **React Icons**
- **React Toastify**
- **BcryptJS**

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/suellykarine/nextPlay
```

2. Instale as dependências:

```
npm install
```

3. Configure o banco de dados (SQLite):

```
npx prisma generate
npx prisma migrate dev
```

4. Inicie o servidor de desenvolvimento:

```
npm run dev
```

5. Acesse a aplicação no navegador:

```
http://localhost:3000
```

### Estrutura de Dependências

### Principais Dependências

Autenticação: next-auth, bcryptjs, @auth/prisma-adapter

Formulários: react-hook-form, yup, @hookform/resolvers

Estado: @tanstack/react-query

UI: react-icons, react-toastify, styled-components

Banco de Dados: @prisma/client, sqlite3

### Dependências de Desenvolvimento

TypeScript e tipagens

ESLint para padronização de código

Babel plugin para Styled Components

Prisma CLI
