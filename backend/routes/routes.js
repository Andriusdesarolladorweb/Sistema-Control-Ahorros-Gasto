import express from 'express';
import { getAllEntrada } from '../controllers/controllersEntrada.js';

const router = express.Router();

router.get('/', getAllEntrada);
