import fs from 'fs';
import path from 'path';

const filePath = path.resolve('db.json');

// Leer datos de la db.Json
const ReadData = () =>{
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Obtener datos 

const getbById = (id) =>{
    const data = ReadData();
    return data.entradas.find(entry => entry.id === id)
}