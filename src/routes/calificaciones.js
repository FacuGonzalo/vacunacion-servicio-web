import { Router } from 'express';
const router = Router();

import { createCalificacion, getCalificaciones, getOneCalificacion, getCalificacionByCentro } from '../controllers/calificacion.controller';

// /api/calificaciones/
router.post('/', createCalificacion);
router.get('/', getCalificaciones);

// /api/calificaciones/:id
router.get('/:id', getOneCalificacion);

// /api/calificaciones/centro/:center_id
router.get('/centro/:center_id', getCalificacionByCentro);


export default router;