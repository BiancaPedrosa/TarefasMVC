# Minhas Tarefas — SQLite + MVC

Gabarito da Avaliação Prática de **Desenvolvimento WEB Dinâmico** — 2º Trimestre, prof. Bianca Pedrosa (IFSP).

Aplicação web para registrar e visualizar tarefas, organizada no padrão **MVC** (Model-View-Controller) usando **SQLite** como banco de dados.

## Estrutura de pastas

```
TarefasMVC/
├── server.js               # monta o servidor e as rotas
├── package.json
├── db.js                   # conexão com o SQLite
├── models/
│   └── tarefaModel.js      # Model: acessa a tabela tarefas
├── controllers/
│   └── tarefaController.js # Controller: lógica das rotas
├── routes/
│   └── routes.js           # todas as rotas do site
├── public/
│   └── css/
│       └── style.css       # estilos do site
└── views/
    └── index.ejs           # formulário + lista de tarefas
```

## Papel de cada camada

- **Model** (`models/`) → conversa com o banco de dados. É o único lugar que sabe SQL.
- **View** (`views/`) → o que o usuário vê. Só recebe dados prontos e exibe.
- **Controller** (`controllers/`) → a "ponte": pede os dados ao Model e manda a View exibir.
- **Routes** (`routes/`) → decide qual Controller é chamado para cada URL.

## Banco de dados

O banco é um único arquivo `tarefas.db`, criado automaticamente na raiz do projeto na primeira vez que `node server.js` é executado.

```sql
CREATE TABLE IF NOT EXISTS tarefas (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo    TEXT NOT NULL,
  descricao TEXT
)
```

## Funcionalidades

- `GET /` — lista todas as tarefas cadastradas.
- `POST /tarefas` — cadastra uma nova tarefa (título + descrição).

### `models/tarefaModel.js`
- `getAll(callback)` — executa `SELECT * FROM tarefas` e repassa o resultado pelo callback.
- `create(titulo, descricao, callback)` — executa um `INSERT` usando Prepared Statements (`?, ?`) e repassa o resultado pelo callback.

### `controllers/tarefaController.js`
- `list(req, res)` — chama `Tarefa.getAll(...)` e renderiza `index` com as tarefas.
- `create(req, res)` — lê `req.body.titulo` e `req.body.descricao`, chama `Tarefa.create(...)` e redireciona para `/`.

## Como executar

```bash
npm install
node server.js
```

Servidor sobe em `http://localhost:3000`.

## Tecnologias

- Node.js + Express
- EJS (view engine)
- SQLite3 (`sqlite3` com callbacks)
