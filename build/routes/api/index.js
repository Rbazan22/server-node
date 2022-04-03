"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _todos = _interopRequireDefault(require("./todos"));

var router = (0, _express.Router)();
router.use('/todos', _todos["default"]);
var _default = router;
exports["default"] = _default;