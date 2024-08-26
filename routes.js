const router = require('express').Router();
const TodoController = require('./src/controllers/TodoController');

// Rota para criar uma tarefa
router.post('/todos', TodoController.postMethod);

// Rota para ler as tarefas
router.get('/todos', TodoController.getMethod);

// Rota para ler uma tarefa específica
router.get('/todos/:id', TodoController.getOneMethod);

// Rota para atualizar uma tarefa específica
router.put('/todos/:id', TodoController.putMethod);

// Rota para deletar uma tarefa específica
router.delete('/todos/:id', TodoController.deleteMethod);

module.exports = router;