// ============================================
// db.js — Conexão com o SQLite
// ============================================
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tarefas.db', (erro) => {
  if (erro) return console.error('Erro ao abrir:', erro.message);
  console.log('✅ Conectado ao SQLite!');
});

// Cria a tabela (IF NOT EXISTS evita erro se já existir)
db.run(`CREATE TABLE IF NOT EXISTS tarefas (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo     TEXT NOT NULL,
  descricao  TEXT
)`, (erro) => {
  if (erro) return console.error(erro.message);
  console.log('✅ Tabela pronta!');
});

module.exports = db;
