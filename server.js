const express = require('express');
const app = express();
const cors = require('cors');
const todos = require('./data.js');

app.use(cors());



function randomTodos() {
    const randomIndex = Math.floor(Math.random() * todos.length) + 1;
    const shuffledTodos = todos.slice().sort(() => Math.random() - Math.random());
    return shuffledTodos.slice(1, randomIndex);
}


app.get('/todos', (req,res)=>{
    res.send(randomTodos());
})

app.listen(3000, ()=>{
    console.log("running...")
})