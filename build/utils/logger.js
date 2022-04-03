"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _consola = _interopRequireDefault(require("consola"));

var middleware = (0, _morgan["default"])('dev');
var log = _consola["default"];
var _default = {
  middleware: middleware,
  log: log
};
exports["default"] = _default;