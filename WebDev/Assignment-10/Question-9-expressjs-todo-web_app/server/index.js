import bodyParser from 'body-parser';
import express from 'express'

const app = express()

app.use(bodyParser.json())

let todos = [];

const middleware = (req, res, next) => {
    if (!req.body.task) {
        return res.status(400).json({message: 'Validation Error: Task is required'})
    }
    next();
}

app.post('/add', middleware, (req, res) => {
    const todo = {
        id: todos.length + 1,
        task: req.body.task
    }
    todos.push(todo);
    res.json({message: 'Todo is created successflly'})
})

app.put('/update/:id', middleware, (req, res) => {
    const todoId = parseInt(req.params.id)
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return res.json({message: 'Todo is not found'})
    }
    todos[todoIndex].task = req.body.task;
    res.json({message: 'Todo is updated successfully'})
})

app.delete('/delete/:id', (req, res) => {
    const todoId = parseInt(req.params.id)
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
        return res.json({message: 'Todo is not found'})
    }
    todos.splice(todoIndex, 1)
    res.json({message: 'Todo is deleted successfully'})
})

app.get('/', (req, res) => {
    res.json({
        todos
    })
})

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Successfully connected to server using PORT: ${PORT}`);
})