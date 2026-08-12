# 🐾 OngPet - Sistema de Cadastro e Gestão de Animais Resgatados

![Expo](https://img.shields.io/badge/Expo-54.0-000000?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Sequelize_6-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-orange?style=for-the-badge)

---

## 📌 Sobre o Projeto

O **OngPet** é uma plataforma completa (Mobile + Backend API) desenvolvida para auxiliar **Organizações Não Governamentais (ONGs)** e abrigos no gerenciamento, controle e acompanhamento de animais resgatados. 

O sistema automatiza processos operacionais essenciais, desde o cadastro e acompanhamento da saúde dos animais (vacinas e procedimentos veterinários) até o controle de acesso de voluntários e funcionários.

---

## ✨ Principais Funcionalidades

### 📱 App Mobile (React Native + Expo)
- 🔐 **Autenticação Segura**: Login via CPF e Senha.
- 🐶 **Gestão de Animais**:
  - Cadastro completo de animais resgatados (Nome, Espécie, Data de Nascimento, Data de Resgate, etc.).
  - Consulta e busca rápida de animais.
  - Ficha detalhada do animal com prontuário e histórico de saúde.
- 💉 **Controle Veterinário e de Saúde**:
  - Registro e acompanhamento da carteira de vacinação.
  - Agendamento e histórico de procedimentos médicos/veterinários (consultas, exames, cirurgias).
- 👥 **Gestão de Equipe e Usuários**:
  - Cadastro de usuários/funcionários com foto de perfil (integração com galeria/câmera).
  - Listagem, edição e exclusão de colaboradores.
- 🎨 **Experiência do Usuário**:
  - Suporte a Tema Claro e Escuro (Dark/Light mode via React Native Paper).

### ⚙️ Backend API (Node.js + Express + Sequelize)
- 🗄️ **ORM Sequelize & MySQL**: Modelagem relacional para Usuários, Animais, Vacinas, Procedimentos e tabelas de associação N:N (`VacinaAnimal` e `ProcedimentoAnimal`).
- 🔒 **Segurança**: Hashing de senhas com `bcrypt`.
- 🖼️ **Gerenciamento de Mídias**: Upload de imagens integrado via `Multer` e `Cloudinary`.
- 🌐 **Arquitetura em Camadas**: Separação clara entre Rotas (`routes`), Controladores (`controllers`), Serviços (`services`) e Modelos (`models`).

---

## 🏗️ Arquitetura e Estrutura de Pastas

```text
OngPet/
├── backend/                  # Servidor API Node.js & Express
│   ├── config/               # Configuração do banco de dados (Sequelize)
│   ├── controllers/          # Controladores das rotas HTTP
│   ├── migrations/           # Migrações do banco de dados MySQL
│   ├── models/               # Modelos relacionais (User, Animal, Vacina, etc.)
│   ├── routes/               # Definição das rotas RESTful (/users, /animals, etc.)
│   ├── services/             # Regras de negócio e integração (Auth, Cloudinary, etc.)
│   └── App.js                # Ponto de entrada do servidor backend (Porta 3000)
│
├── mobile/                   # Aplicativo React Native (Expo)
│   ├── assets/               # Imagens, fontes e estilos (CSS global)
│   ├── components/           # Componentes reutilizáveis de UI
│   ├── services/             # Cliente HTTP (Axios) configurado para a API
│   ├── themes/               # Provedor de temas (Light & Dark theme)
│   └── views/                # Telas do aplicativo (Login, CadastroAnimal, etc.)
│
├── config/                   # Configuração global de banco de dados
├── seeders/                  # Dados iniciais de teste (População de banco)
├── App.js                    # Ponto de entrada do React Native & React Navigation
├── app.json                  # Configurações do Expo
└── package.json              # Dependências do projeto
```

---

## 🛠️ Tecnologias Utilizadas

### **Frontend / Mobile**
- **React Native** & **Expo SDK 54**
- **React Navigation** (Stack Navigation v7)
- **React Native Paper** (Componentes de UI & Tema)
- **Axios** (Integração HTTP)
- **Expo Image Picker** (Captura/Seleção de fotos)
- **React Native Masked Text** (Formatação de campos de CPF e Telefone)

### **Backend**
- **Node.js** com **Express 5**
- **Sequelize ORM** & **MySQL2**
- **Bcrypt** (Criptografia de senhas)
- **Cloudinary** & **Multer** (Upload de arquivos e armazenamento em nuvem)
- **CORS** & **Body-Parser**

---

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [MySQL Server](https://www.mysql.com/) rodando localmente ou em container
- [Expo Go app](https://expo.dev/client) no celular (ou um emulador Android/iOS)
- [Git](https://git-scm.com/)

---

### 1️⃣ Configuração e Inicialização do Backend

1. Navegue até a raiz do projeto ou diretório `backend`:
   ```bash
   npm install
   ```

2. Configure as credenciais do seu banco de dados MySQL em `config/config.json`:
   ```json
   {
     "development": {
       "username": "devlusca",
       "password": "sua_senha_mysql",
       "database": "ongpet",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

3. Crie o banco de dados e execute as migrações (se utilizar o Sequelize CLI):
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

4. Inicie o servidor backend:
   ```bash
   node backend/App.js
   ```
   *O backend estará rodando em `http://localhost:3000` (ou na porta configurada).*

---

### 2️⃣ Configuração e Inicialização do App Mobile

1. Abra o arquivo `mobile/services/api.js` e ajuste a `baseURL` para o IP local da sua máquina na rede:
   ```javascript
   export const api = axios.create({
     baseURL: 'http://<SEU_IP_LOCAL>:3000',
     headers: { Accept: 'application/json' },
   });
   ```

2. Inicie o aplicativo Expo na raiz do projeto:
   ```bash
   npm run start
   # ou
   npx expo start
   ```

3. Escaneie o **QR Code** exibido no terminal utilizando o aplicativo **Expo Go** no seu smartphone ou pressione `a` para abrir no emulador Android / `i` para o emulador iOS.

---

## 📡 Visão Geral das Rotas da API (Endpoints)

| Módulo | Método | Endpoint | Descrição |
|---|---|---|---|
| **Usuários** | `POST` | `/users/login` | Autentica um usuário via CPF e senha |
| **Usuários** | `POST` | `/users/register` | Cadastra um novo voluntário/funcionário |
| **Usuários** | `GET` | `/users/all` | Lista todos os usuários cadastrados |
| **Usuários** | `PUT` | `/users/update/:id` | Atualiza os dados de um usuário |
| **Usuários** | `DELETE` | `/users/delete/:id` | Remove um usuário do sistema |
| **Animais** | `POST` | `/animals/cadastro` | Cadastra um novo animal resgatado |
| **Animais** | `GET` | `/animals/complete/:id` | Retorna o histórico completo do animal |
| **Vacinas** | `POST` | `/vacinas/cadastro` | Registra aplicação de vacina |
| **Procedimentos** | `POST` | `/procedimentos/cadastro` | Registra procedimento médico no animal |

---

## 📝 Licença

Este projeto é desenvolvido para fins acadêmicos/sociais voltados ao apoio de causas de proteção animal. 🐾

---
*Desenvolvido com 💚 para ajudar ONGs a salvarem vidas.*
