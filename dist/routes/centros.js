"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _centro = require("../controllers/centro.controller");

var router = (0, _express.Router)();
// /api/centros/
router.get('/', _centro.getCentros); // /api/centros/:id

router.get('/:id', _centro.getOneCentro); // /api/centros/:id/imagen

router.get('/:id/imagen', _centro.getImagen);
var _default = router;
exports["default"] = _default;