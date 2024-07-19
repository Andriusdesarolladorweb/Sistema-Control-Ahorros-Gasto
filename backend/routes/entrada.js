import express from 'express';
import Entrada from '../models/Entrada';


const router = express.Router();

    router.get('/Entrada', (req, res) =>{
        const entradas = Entrada.getAll();
        res.json(entradas);
    })