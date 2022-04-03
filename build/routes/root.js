"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _logger = _interopRequireDefault(require("../utils/logger"));

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  _logger["default"].log.success('Calling Root');

  res.send({
    msg: 'Rodrigo Bazan'
  });
});
var _default = router;
exports["default"] = _default;