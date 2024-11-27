const express = require('express');
const app = express();
const cors = require('cors');
const todos = require('./data.js');

// function getRandomTodo() { 
//     const randomIndex = Math.floor(Math.random() * todos.length);
//      return todos[randomIndex]; 
// }

// const randomTodo = getRandomTodo();

app.get('/todos', (req,res)=>{
    res.send(todos);
})

app.listen(3000, ()=>{
    console.log("running...")
})