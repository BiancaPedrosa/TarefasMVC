const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// GET / — lista todas as tarefas (chama Controller.list, que você vai criar)
router.get('/', tarefaController.list);

// POST /tarefas — cadastra uma nova tarefa (chama Controller.create, que você vai criar)
router.post('/tarefas', tarefaController.create);

module.exports = router;
