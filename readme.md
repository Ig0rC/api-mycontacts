# API do Projeto MyContact

## Sobre o projeto

Desenvolvimento de uma API, utilizando apenas Express, PG e Node.js.

## Como executar o projeto

### Etapa 01 - Instalação
```bash
npm install ou yarn
```

### Etapa 02 - Crie um arquivo .env na raiz do projeto com essas seguintes variáveis de ambiente.

```bash
HOST_DATABASE=YOUR_HOST_DATABASE
PORT_DATABASE=YOUR_PORT_DATABASE
USER_DATABASE=YOUR_USER_DATABASE
PASSWORD_DATABASE=YOUR_PASSWORD_DATABASE
NAME_DATABASE=YOUR_NAME_DATABASE
PORT_APP=YOUR_PORT_APPLICATION
```

### Etapa 03 - Execute o schema do projeto no banco de dados manualmente.

```bash
CREATE DATABASE mycontacts;

create extension IF NOT EXISTS "uuid-ossp";

create table IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
);

create table if not exists contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name varchar NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) references categories(id)
);
```

### Etapa 04 - Execute o projeto.

```bash
yarn start ou npm run start
```

### Etapa 05 - Após a execução da API do projeto, vá até o link do repositório do frontend.

https://github.com/Ig0rC/my-contacts-react






