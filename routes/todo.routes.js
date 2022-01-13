const express = require('express')

const router = express.Router()

const todosController = require('../controllers/todo.controller')

router.get('/',todosController.getAllTodos) // todos prefix added automatically

router.post('/', todosController.addTodo)

router.patch('/:id', todosController.updateTodo)

router.delete('/:id', todosController.deleteTodo)


module.exports = router