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
    if(req.query.id){
        const id = parseInt(req.query.id)-1;
        if(id>=0 && id<todos.length){
            res.send(todos[id])
        }else{
            res.status(404).send({ error: 'Todo not found' });
        }
    } else{
        res.send(randomTodos());
    }
});





app.listen(3000, ()=>{
    console.log("running...")
})