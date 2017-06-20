const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  var todoList = []
  todoList.push({text: 'Learn Node basics'})
  todoList.push({text: 'Learn Express basics'})
  todoList.push({text: 'Learn Mustache'})
  todoList.push({text: 'Learn HTML forms with Express'})
  todoList.push({text: 'Learn about authentication'})
  todoList.push({text: 'Learn how to connect to PostgreSQL'})
  todoList.push({text: 'Learn how to create databases'})
  todoList.push({text: 'Learn SQL'})
  todoList.push({text: 'Learn how to connect to PostgreSQL from Node'})
  todoList.push({text: 'Learn how to use Sequelize'})
  res.render('todo', {todoList :todoList})
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
