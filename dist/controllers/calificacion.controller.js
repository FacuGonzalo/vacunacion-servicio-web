"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCalificacion = createCalificacion;
exports.getCalificaciones = getCalificaciones;
exports.getOneCalificacion = getOneCalificacion;
exports.getCalificacionByCentro = getCalificacionByCentro;

var _Calificacion = _interopRequireDefault(require("../models/Calificacion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createCalificacion(_x, _x2) {
  return _createCalificacion.apply(this, arguments);
}

function _createCalificacion() {
  _createCalificacion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var newCalificacion;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Calificacion["default"].create(req.body);

          case 2:
            newCalificacion = _context.sent;
            res.json({
              message: "Calificacion creada con exito"
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createCalificacion.apply(this, arguments);
}

function getCalificaciones(_x3, _x4) {
  return _getCalificaciones.apply(this, arguments);
}

function _getCalificaciones() {
  _getCalificaciones = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var calificaciones;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Calificacion["default"].findAll();

          case 2:
            calificaciones = _context2.sent;
            res.json({
              data: calificaciones
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCalificaciones.apply(this, arguments);
}

function getOneCalificacion(_x5, _x6) {
  return _getOneCalificacion.apply(this, arguments);
}

function _getOneCalificacion() {
  _getOneCalificacion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, calificacion;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Calificacion["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            calificacion = _context3.sent;
            res.json(calificacion);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneCalificacion.apply(this, arguments);
}

function getCalificacionByCentro(_x7, _x8) {
  return _getCalificacionByCentro.apply(this, arguments);
}

function _getCalificacionByCentro() {
  _getCalificacionByCentro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var center_id, calificaciones;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            center_id = req.params.center_id;
            _context4.next = 3;
            return _Calificacion["default"].findAll({
              where: {
                center_id: center_id
              }
            });

          case 3:
            calificaciones = _context4.sent;
            res.json(calificaciones);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getCalificacionByCentro.apply(this, arguments);
}