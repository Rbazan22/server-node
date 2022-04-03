"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _joi = _interopRequireDefault(require("joi"));

var _logger = _interopRequireDefault(require("./logger"));

_dotenv["default"].config();

var envSchema = _joi["default"].object().keys({
  NODE_ENV: _joi["default"].string().valid('development', 'production').required(),
  PORT: _joi["default"].number().positive().required(),
  ORIGIN: _joi["default"].string().uri().required()
}).unknown();

var _envSchema$prefs$vali = envSchema.prefs({
  errors: {
    label: 'key'
  }
}).validate(process.env),
    env = _envSchema$prefs$vali.value,
    error = _envSchema$prefs$vali.error;

if (error) {
  _logger["default"].log.error(new Error('Config validation error: $(error.message)'));
}

var _default = {
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
  origin: env.ORIGIN
};
exports["default"] = _default;