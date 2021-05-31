import mongoose from 'mongoose';
import dotenv from 'dotenv';

if(!process.env.LE) dotenv.config();

let dbUrl: string = (process.env.MONGODBURL as string);

mongoose.connect(dbUrl, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }).then((_) => {
    console.log('Conectado a mongodb');
},(err) => {
    console.log('Error ====== ' + err)
});