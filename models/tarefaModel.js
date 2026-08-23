// ============================================
// models/tarefaModel.js — Model das tarefas
// ============================================
const db = require('../db');

const getAll = (callback) => {
  db.all('SELECT * FROM tarefas', [], callback);
};


const create = (titulo, descricao, callback) => {
  db.run(
    'INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)',
    [titulo, descricao],
    callback
  );
};

module.exports = { getAll, create };
