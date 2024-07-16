# Alocadora De Carros 🚗🏢

Bem-vindo ao repositório do **Car Rental App**! Este projeto está em desenvolvimento e pode sofrer alterações ao longo do tempo. A aplicação tem como objetivo facilitar a reserva de carros através de uma plataforma web, oferecendo uma experiência intuitiva e segura tanto para usuários quanto para administradores.

## 🚀 Resumo de Como Fazer

### 📦 Modelagem do Banco de Dados
Criar as tabelas necessárias usando PostgreSQL para armazenar informações sobre usuários, carros e reservas.

### 🔧 Backend (Node.js)
- Estruturar o servidor com Express.js.
- Implementar autenticação segura com JWT.
- Utilizar bcrypt para encriptar senhas em SHA-256.
- Criar rotas para CRUD de carros e usuários.

### 🌐 Frontend (Vue.js)
- Configurar o projeto com Vue CLI.
- Utilizar Vue Router para navegação.
- Implementar Bootstrap e VueSweetalert2 para o design e interações.
- Criar componentes para as funcionalidades principais.
- Implementar o painel admin para gerenciar carros e usuários.

## 📂 Pastas e Arquivos Necessários

```
├── backend/
│   ├── config/
│   │   └── database.js
│   │   └── auth.js
│   ├── controllers/
│   │   └── carController.js
│   │   └── userController.js
│   ├── models/
│   │   └── Car.js
│   │   └── User.js
│   ├── routes/
│   │   └── carRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── app.js
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   └── AdminPanel.vue
    │   │   └── CarList.vue
    │   │   └── Login.vue
    │   │   └── Signup.vue
    │   ├── router/
    │   │   └── index.js
    │   ├── store/
    │   │   └── index.js
    │   ├── views/
    │   │   └── Admin.vue
    │   │   └── Home.vue
    │   │   └── Login.vue
    │   └── App.vue
    ├── .env
    ├── package.json
    └── vue.config.js
```
📋 Modelagem do Banco de Dados

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    year INT,
    price_per_day DECIMAL(10, 2),
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    car_id INT REFERENCES cars(id),
    start_date DATE,
    end_date DATE,
    total_price DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'reserved',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 ```

## 🛠️ Criação das Tabelas

Você pode usar o pgAdmin para executar as queries SQL acima para criar as tabelas no banco de dados PostgreSQL.

## 🔑 Arquivo .env
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=car_rental
JWT_SECRET=sua_chave_secreta
```

