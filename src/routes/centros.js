import { Router } from 'express';

const router = Router();

import { getCentros, getOneCentro, getImagen } from '../controllers/centro.controller';

// /api/centros/
router.get('/', getCentros);

// /api/centros/:id
router.get('/:id', getOneCentro);

// /api/centros/:id/imagen
router.get('/:id/imagen', getImagen);

export default router;