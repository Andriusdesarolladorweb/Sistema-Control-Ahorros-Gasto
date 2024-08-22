import express from 'express';
import { getAllEntrada } from '../controllers/ControllersEntrada.js';

const router = express.Router();

router.get('/', getAllEntrada);


export default router;
