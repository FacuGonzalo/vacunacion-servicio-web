"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _centros = _interopRequireDefault(require("./routes/centros"));

var _calificaciones = _interopRequireDefault(require("./routes/calificaciones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing Routes
// Initialization
var app = (0, _express["default"])();

var swaggerUi = require('swagger-ui-express');

var swaggerDocument = require('../swagger.json');

app.set('port', process.env.PORT || 4000); // Middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); // Routes

app.use('/api/centros', _centros["default"]);
app.use('/api/calificaciones', _calificaciones["default"]);
app.use('/api', swaggerUi.serve);
app.get('/api', swaggerUi.setup(swaggerDocument));
var _default = app;
exports["default"] = _default;