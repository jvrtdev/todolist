# Todo-list

Este projeto é um sistema de gerenciamento de tarefas que utiliza **NestJS** no backend e **Next.js** no frontend. Ele integra WebSockets para atualizações em tempo real e utiliza o TanStack Query para gerenciamento de estado no frontend.

---

## **Funcionalidades**

- Criação, edição e remoção de tarefas.
- Atualização em tempo real de tarefas usando WebSocket.
- Interface responsiva e amigável no frontend.
- API REST para operações CRUD de tarefas.

---

## **Tecnologias Utilizadas**

### **Backend**

- **NestJS**: Framework Node.js para construção de aplicações escaláveis.
- **WebSocket (Socket.IO)**: Para comunicação em tempo real.

### **Frontend**

- **Next.js 15**: Para construção da aplicação cliente.
- **TanStack Query**: Para gerenciamento de estado e sincronização de dados.
- **Shadcn/ui e TailwindCSS**: Para estilização da interface do sistema.

---

## **Instalação**

### **Requisitos**

- Node.js >= 18
- Yarn ou npm

### **Passos para Configuração**

#### **Backend**

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configure o banco de dados com Docker Compose:

   Crie e suba o container do PostgreSQL:

   ```bash
   docker compose up -d
   ```

   Certifique-se de que o banco de dados está acessível em localhost:5432 com as seguintes credenciais:

   Usuário: petronet

   Senha: petronet

   Banco de Dados: todolist

3. Inicie o servidor:

   ```bash
   npm run start:dev
   ```

O servidor estará rodando em `http://localhost:3001`.

#### **Frontend**

1. Navegue para a pasta do frontend:

   ```bash
   cd todolist
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```



1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O frontend estará rodando em `http://localhost:3000`.

---

## **Uso**

1. Acesse o frontend em `http://localhost:3000`.
2. Utilize a interface para criar, editar ou excluir tarefas.
3. As atualizações serão refletidas em tempo real para todos os clientes conectados.

---

## **Endpoints da API**

Documentação com Swagger no Endpoint `http://localhost:3001/api`


### **Base URL**: `http://localhost:3001/task`

#### **GET /task**

- Retorna todas as tarefas.

#### **POST /task**

- Cria uma nova tarefa.
- **Payload**:
  ```json
  {
    "title": "Nova tarefa"
  }
  ```

#### **PUT /task/:id**

- Atualiza uma tarefa existente.
- **Payload**:
  ```json
  {
    "title": "Tarefa atualizada"
  }
  ```

#### **DELETE /task/:id**

- Remove uma tarefa pelo ID.

---

## **Estrutura do Projeto**

### **Melhorias Futuras**

- Implementar autenticação de usuários.
- Adicionar filtros e ordenação nas tarefas.
- Criar notificações em tempo real para novas tarefas ou alterações importantes.

---

## **Contato**

Se tiver dúvidas ou sugestões, entre em contato pelo e-mail:  [jvrtdev@gmail.com](mailto\:jvrtdev@gmail.com).

