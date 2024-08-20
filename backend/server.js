import express from 'express';
import cors from 'cors';
import db from './database/conexion';
import entradaRoutes from './routes/routes'


const app = express();
const port = 3006;


app.listen(port, () =>{
  console.log("corriendo bien");
})