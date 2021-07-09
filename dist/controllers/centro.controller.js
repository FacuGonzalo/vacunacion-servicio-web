"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCentros = getCentros;
exports.getOneCentro = getOneCentro;
exports.getImagen = getImagen;

var _Centro = _interopRequireDefault(require("../models/Centro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

function getCentros(_x, _x2) {
  return _getCentros.apply(this, arguments);
}

function _getCentros() {
  _getCentros = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var centros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Centro["default"].findAll();

          case 3:
            centros = _context.sent;
            centros.map(function (centro) {
              centro.imagen = process.env.URL_IMG + centro.id + '/imagen';
            });
            res.json({
              data: centros
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getCentros.apply(this, arguments);
}

function getOneCentro(_x3, _x4) {
  return _getOneCentro.apply(this, arguments);
}

function _getOneCentro() {
  _getOneCentro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, centro;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _Centro["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            centro = _context2.sent;
            centro.imagen = process.env.URL_IMG + centro.id + '/imagen';
            console.log(centro.imagen);
            res.json(centro);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getOneCentro.apply(this, arguments);
}

function getImagen(_x5, _x6) {
  return _getImagen.apply(this, arguments);
}

function _getImagen() {
  _getImagen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, centro, base64String, imagen;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Centro["default"].findOne({
              attributes: ['imagen'],
              where: {
                id: id
              }
            });

          case 3:
            centro = _context3.sent;
            base64String = centro.imagen.toString();
            imagen = Buffer.from(base64String, 'base64');
            res.writeHead(200, {
              "Content-type": "image/png"
            });
            res.end(imagen);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getImagen.apply(this, arguments);
}