import express from 'express';
import { getAllEntradas } from '../controllers/ControllersEntrada.js';
import { getEntrada } from '../controllers/ControllersEntrada.js';
import { createEntrada } from '../controllers/ControllersEntrada.js';

const router = express.Router();

router.get('/', getAllEntradas);
router.get('/:id', getEntrada);
router.post('/', createEntrada);





export default router;
