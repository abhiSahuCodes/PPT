import express from 'express';

const app = express()

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    res.json({random: randomNumber})
})


const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Connected successfully to Backend using PORT: ${PORT}`)
})
