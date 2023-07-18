import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/auth.js';
import blogRoutes from './routes/blog.js';
import cors from 'cors';

// Loading environment variables from .env file
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors())

// Connecting to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected successfully to MONGODB!")
    } catch (err) {
        throw err;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MONGODB disconnected!!!")
})

mongoose.connection.on("connected", () => {
    console.log("MONGODB connected!!!")
})


app.use('/user', userRoutes)
app.use('/blog', blogRoutes)


app.get('/', (req, res) => {
    res.send('Welcome to Blogs')
})

app.listen(8080, () => {
    connect();
    console.log("Connected successfully to Backend!")
})