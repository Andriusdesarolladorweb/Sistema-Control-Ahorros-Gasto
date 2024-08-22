import express from 'express';
import { getAllEntradas } from '../controllers/ControllersEntrada.js';
import { getEntrada } from '../controllers/ControllersEntrada.js';

const router = express.Router();

router.get('/', getAllEntradas);
router.get('/:id', getEntrada);



export default router;
