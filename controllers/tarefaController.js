// ============================================
// controllers/tarefaController.js
// ============================================
const Tarefa = require('../models/tarefaModel');

// GET / — lista todas as tarefas
const list = (req, res) => {
  Tarefa.getAll((erro, linhas) => {
    if (erro) return res.status(500).send('Erro ao buscar tarefas');
    res.render('index', { tarefas: linhas });
  });
};

// POST /tarefas — cadastra uma nova tarefa
const create = (req, res) => {
  const { titulo, descricao } = req.body;
  Tarefa.create(titulo, descricao, (erro) => {
    if (erro) return res.status(500).send('Erro ao salvar tarefa');
    res.redirect('/');
  });
};

module.exports = { list, create };
