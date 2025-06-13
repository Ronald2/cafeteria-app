import express from 'express';
import padreController from '../controllers/padre.controller.js';
const router = express.Router();

router.get('/', padreController.getAllPadres);
router.post('/', padreController.createPadre);
router.put('/:id', padreController.updatePadre);
router.delete('/:id', padreController.deletePadre);

export default router;