import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
if(!process.env.LE) dotenv.config();

// Import files
import mainRouter from './api/routes/main.route'

// Const
const app = express();
const port = process.env.PORT || 3000;

// Start mongoose
import './database/mongodb.connection';

// app use
app.use(json());
app.use(cors());

// Router
app.get('/', (req,res) => res.status(200).send('Funcionando'));
app.use('/user', mainRouter);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});