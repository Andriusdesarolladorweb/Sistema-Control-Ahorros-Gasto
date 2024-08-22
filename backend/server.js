import express from 'express';
import cors from 'cors';
import db from './database/conexion';
import entradaRoutes from './routes/routes'


const app = express();
const port = 3006;


app.listen(3006, () =>{
  console.log("corriendo bien");
})

