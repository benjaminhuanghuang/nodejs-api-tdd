const express = require('express');

const Todo = require('../models/todo');

const todoRoute = express.Router();

const TodoController = require('../controllers/todoController')(Todo);

todoRoute.get('/api/todos', TodoController.GetTodo);

todoRoute.post('/api/todos', TodoController.PostTodo);

todoRoute.put('/api/todos/:todo_id', TodoController.UpdateTodo);

todoRoute.delete('/api/todos/:todo_id', TodoController.DeleteTodo);

module.exports = todoRoute;