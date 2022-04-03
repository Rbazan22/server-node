"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _httpStatusCodes = require("http-status-codes");

var _todos = require("../../utils/todos");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  var todos = (0, _todos.getTodos)(req.query.completed);
  res.send(todos);
});
router.get('/:id', function (req, res, next) {
  var todo = (0, _todos.getTodo)(req.params.id);

  if (todo) {
    res.send(todo);
  } else {
    res.status(_httpStatusCodes.StatusCodes.NOT_FOUND);
    next(new Error("Not Found To do with ID: ".concat(req.params.id)));
  }
});
router.post('/', function (req, res, next) {
  var todo = req.body;
  var response = (0, _todos.addTodo)(todo);

  if (response.error) {
    res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST);
    next(response.error);
  } else {
    res.status(_httpStatusCodes.StatusCodes.CREATED);
    res.send(response.newTodo);
  }
});
router.put('/:id', function (req, res, next) {
  var todo = req.body;
  var response = (0, _todos.updateTodo)(req.params.id, todo);

  if (response.error) {
    res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST);
    next(response.error);
  } else {
    res.status(_httpStatusCodes.StatusCodes.OK);
    res.send(response.updatedTodo);
  }
});
var _default = router;
exports["default"] = _default;