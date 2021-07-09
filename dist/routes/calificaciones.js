"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _calificacion = require("../controllers/calificacion.controller");

var router = (0, _express.Router)();
// /api/calificaciones/
router.post('/', _calificacion.createCalificacion);
router.get('/', _calificacion.getCalificaciones); // /api/calificaciones/:id

router.get('/:id', _calificacion.getOneCalificacion); // /api/calificaciones/centro/:center_id

router.get('/centro/:center_id', _calificacion.getCalificacionByCentro);
var _default = router;
exports["default"] = _default;