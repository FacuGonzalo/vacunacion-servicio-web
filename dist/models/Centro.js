"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Centro = _database.sequelize.define('centro_vacunacions', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  center_name: {
    type: _sequelize["default"].TEXT
  },
  center_adress: {
    type: _sequelize["default"].TEXT
  },
  center_phone: {
    type: _sequelize["default"].INTEGER
  },
  center_area: {
    type: _sequelize["default"].TEXT
  },
  center_timetable: {
    type: _sequelize["default"].TEXT
  },
  latitud: {
    type: _sequelize["default"].TEXT
  },
  longitud: {
    type: _sequelize["default"].TEXT
  },
  imagen: {
    type: _sequelize["default"].STRING.BINARY
  }
}, {
  timestamps: false
});

var _default = Centro;
exports["default"] = _default;