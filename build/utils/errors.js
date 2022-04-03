"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("./logger"));

var notFound = function notFound(req, res, next) {
  var error = new Error("Not Found - ".concat(req.url));
  res.status(404);
  next(error);
}; // eslint-disable-next-line no-unused-vars


var errorHandler = function errorHandler(error, req, res, next) {
  var statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  _logger["default"].log.error(new Error(error.message));

  res.status(statusCode);
  res.send({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '💩' : error.stack
  });
};

var _default = {
  notFound: notFound,
  errorHandler: errorHandler
};
exports["default"] = _default;