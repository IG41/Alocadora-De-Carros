<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Rental App</title>
</head>
<body>
    <h1>Alocadora De Carros 🚗🏢</h1>
    <p>Bem-vindo ao repositório do <strong>Car Rental App</strong>! Este projeto está em desenvolvimento e pode sofrer alterações ao longo do tempo. A aplicação tem como objetivo facilitar a reserva de carros através de uma plataforma web, oferecendo uma experiência intuitiva e segura tanto para usuários quanto para administradores.</p>
    
    <h2>🚀 Resumo de Como Fazer</h2>
    
    <h3>📦 Modelagem do Banco de Dados</h3>
    <p>Criar as tabelas necessárias usando PostgreSQL para armazenar informações sobre usuários, carros e reservas.</p>
    
    <h3>🔧 Backend (Node.js)</h3>
    <ul>
        <li>Estruturar o servidor com Express.js.</li>
        <li>Implementar autenticação segura com JWT.</li>
        <li>Utilizar bcrypt para encriptar senhas em SHA-256.</li>
        <li>Criar rotas para CRUD de carros e usuários.</li>
    </ul>
    
    <h3>🌐 Frontend (Vue.js)</h3>
    <ul>
        <li>Configurar o projeto com Vue CLI.</li>
        <li>Utilizar Vue Router para navegação.</li>
        <li>Implementar Bootstrap e VueSweetalert2 para o design e interações.</li>
        <li>Criar componentes para as funcionalidades principais.</li>
        <li>Implementar o painel admin para gerenciar carros e usuários.</li>
    </ul>
    
    <h2>📂 Pastas e Arquivos Necessários</h2>
    <pre>
        car-rental-app/
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
    </pre>
    
    <h2>📋 Modelagem do Banco de Dados</h2>
    <pre>
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
    </pre>
    
    <h2>🛠️ Criação das Tabelas</h2>
    <p>Você pode usar o pgAdmin para executar as queries SQL acima para criar as tabelas no banco de dados PostgreSQL.</p>
    
    <h2>🔑 Arquivo .env</h2>
    <pre>
        PORT=3000
        DB_HOST=localhost
        DB_PORT=5432
        DB_USER=seu_usuario
        DB_PASS=sua_senha
        DB_NAME=car_rental
        JWT_SECRET=sua_chave_secreta
    </pre>
    
    <p>Sinta-se à vontade para contribuir com o desenvolvimento deste projeto. Qualquer dúvida ou sugestão será muito bem-vinda! 🎉</p>
</body>
</html>
