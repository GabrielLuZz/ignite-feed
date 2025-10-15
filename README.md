# Ignite Feed

---

## 🇧🇷 Seção em Português

### Descrição
Projeto de feed social desenvolvido com React, TypeScript e Vite, inspirado no curso Ignite da Rocketseat. Este repositório contém uma aplicação simples para treinar as primeiras habilidades em React, utilizando CSS Modules para estilos escopados, dados mockados e bibliotecas auxiliares para ícones e formatação de datas.

Este projeto é um feed em React feito no curso Ignite da Rocketseat (início da trilha nova). Ele é o primeiro projeto para treinar as primeiras habilidades em React. A estilização foi feita com CSS Modules para garantir um CSS escopado, feito com TypeScript, com dados mockados.

Foram utilizadas as bibliotecas:
- `phosphor-react` (ícones)
- `date-fns` (formatação de datas)

### Funcionalidades

- Exibição de posts com autor, conteúdo e data de publicação.
- Formatação de datas em português (pt-BR) usando `date-fns`.
- Campo para criar novo comentário com validação (mensagem personalizada: "Esse campo é obrigatório!").
- Listagem de comentários com opção de excluir.
- Botão de "Aplaudir" (like) por comentário com contagem local.
- Componentes de UI modulares (Header, Sidebar, Post, Comment, Avatar).
- Estilos com CSS Modules e variáveis globais de tema.

### Tecnologias e Dependências

- React 18
- TypeScript 5
- Vite 4
- CSS Modules
- `date-fns` para datas
- `phosphor-react` para ícones
- ESLint com regras para React Hooks e TypeScript

### Estrutura do Projeto

Principais arquivos e pastas:
- `src/main.tsx` – ponto de entrada da aplicação.
- `src/App.tsx` – composição dos componentes principais.
- `src/components/` – componentes de UI:
  - `Header.tsx`, `Sidebar.tsx`, `Post.tsx`, `Comment.tsx`, `Avatar.tsx` e seus respectivos `.module.css`.
- `src/mocks/` – dados mockados de posts e comentários.
- `src/types/post.ts` – tipos TypeScript do domínio.
- `src/assets/` – imagens (logo e cover).
- `src/global.css` – estilos e variáveis globais.
- `vite.config.ts` – configuração do Vite.

### Como Executar

Pré-requisitos:
- Node.js 16+ (Vite 4 requer Node ^14.18 ou >=16; recomendado 16+)
- npm ou yarn

Passos:
1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
2. Ambiente de desenvolvimento:
   ```bash
   npm run dev
   # Vite abrirá um servidor local (por padrão em http://localhost:5173/)
   ```
3. Lint (opcional):
   ```bash
   npm run lint
   ```
4. Build de produção:
   ```bash
   npm run build
   ```
5. Preview do build:
   ```bash
   npm run preview
   ```

### Observações Importantes

- Locale: A formatação de datas usa `pt-BR` (arquivo `Post.tsx`).
- Dados: Os posts e comentários são mockados em `src/mocks/`.
- Ícones: São importados de `phosphor-react`.
- Estilos: CSS Modules por componente e `global.css` para variáveis.
- Possível ajuste: Se o dev falhar, verifique o import do `App` em `src/main.tsx`. O arquivo correto é `App.tsx`. Use:
  ```ts
  import { App } from './App'
  ```

### Scripts (package.json)

- `dev` – inicia o Vite.
- `build` – compila TypeScript e gera o build com Vite.
- `preview` – serve o build gerado para preview.
- `lint` – roda ESLint na pasta `src`.

### Licença

Este repositório é para fins de estudo. Nenhuma licença explícita foi definida. Se desejar publicar, adicione um arquivo `LICENSE` apropriado.

### Créditos

- Curso Ignite – Rocketseat.
- Autor do projeto: Gabriel Luz.

---

## 🇺🇸 English Section

### Description

This is a React feed project built during Rocketseat's Ignite course (new track starter). It’s an introductory project to practice core React skills. Styling is done with CSS Modules for scoped CSS, written in TypeScript, and uses mocked data.

Libraries used:
- `phosphor-react` (icon library)
- `date-fns` (date formatting)

### Features

- Display posts with author, content, and publish date.
- Date formatting in Portuguese (pt-BR) using `date-fns`.
- Create a new comment with validation (custom message: "Esse campo é obrigatório!").
- Comment list with delete option.
- "Applaud" (like) button per comment with local count.
- Modular UI components (Header, Sidebar, Post, Comment, Avatar).
- Styling with CSS Modules and global theme variables.

### Tech Stack & Dependencies

- React 18
- TypeScript 5
- Vite 4
- CSS Modules
- `date-fns` for date handling
- `phosphor-react` for icons
- ESLint with React Hooks and TypeScript rules

### Project Structure

Key files and folders:
- `src/main.tsx` – app entry point.
- `src/App.tsx` – app composition.
- `src/components/` – UI components:
  - `Header.tsx`, `Sidebar.tsx`, `Post.tsx`, `Comment.tsx`, `Avatar.tsx` and their `.module.css` files.
- `src/mocks/` – mocked posts and comments data.
- `src/types/post.ts` – TypeScript domain types.
- `src/assets/` – images (logo and cover).
- `src/global.css` – global styles and variables.
- `vite.config.ts` – Vite configuration.

### Getting Started

Prerequisites:
- Node.js 16+ (Vite 4 requires Node ^14.18 or >=16; recommended 16+)
- npm or yarn

Steps:
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
2. Development server:
   ```bash
   npm run dev
   # Vite will start a local server (default http://localhost:5173/)
   ```
3. Lint (optional):
   ```bash
   npm run lint
   ```
4. Production build:
   ```bash
   npm run build
   ```
5. Preview the build:
   ```bash
   npm run preview
   ```

### Notes

- Locale: Dates use `pt-BR` locale in `Post.tsx`.
- Data: Posts and comments are mocked in `src/mocks/`.
- Icons: Imported from `phosphor-react`.
- Styles: Component-level CSS Modules and `global.css` for variables.
- Potential fix: If dev fails, check `src/main.tsx` import for `App`. The correct file is `App.tsx`. Use:
  ```ts
  import { App } from './App'
  ```

### Scripts (package.json)

- `dev` – start Vite.
- `build` – compile TypeScript and build with Vite.
- `preview` – serve the built app for preview.
- `lint` – run ESLint on `src`.

### License

This repository is for study purposes. No explicit license has been set. If you plan to publish, add an appropriate `LICENSE` file.

### Credits

- Ignite Course – Rocketseat.
- Project author: Gabriel Luz.