import express from 'express';
import cors from 'cors';
import db from './database/conexion.js';
import entradaRoute from './routes/routes.js'


const app = express();
const port = 3006;

app.use(cors());
app.use(express.json());
app.use('/Entradas', entradaRoute);




try{
  await db.authenticate()
  console.log('Conexion correcta');
}catch (error){
   console.log(`Error ${error}`)
}

app.get('/', (req, res) =>{
  res.send('Hola mundo');
})

app.listen(port, () =>{
  console.log('Sever up runnig  in http://localhost:3006/');
});

