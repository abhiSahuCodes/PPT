import express from 'express'

const app = express()

let counter = 0;

app.get('/increment', (req, res) => {
    counter++;
    res.json({counter: counter})
})

app.get('/decrement', (req, res) => {
    counter--;
    res.json({counter: counter})
})

app.get('/', (req, res) => {
    res.json({counter: counter})
})

const PORT = 8081

app.listen(PORT, () => {
    console.log(`Connected to server successfully at the PORT:${PORT}`);
})