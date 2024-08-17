import express from 'express';
import { getAllEntrada } from '../controllers/controllersEntrada';

const router = express.Router();

router.get('/', getAllEntrada);
