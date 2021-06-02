import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
if(!process.env.LE) dotenv.config();

// Import files
import mainRoutes from './api/routes'

// Const
const app = express();
const port = process.env.PORT || 3000;

// Start mongoose
import './database/mongodb.connection';

// app use
app.use(json());
app.use(cors());

// Routes
app.use(mainRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});