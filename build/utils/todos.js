"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTodo = exports.getTodos = exports.getTodo = exports.addTodo = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _nanoid = require("nanoid");

var _joi = _interopRequireDefault(require("joi"));

var _logger = _interopRequireDefault(require("./logger"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var todos = [];

var todoSchema = _joi["default"].object({
  text: _joi["default"].string().min(10).required(),
  completed: _joi["default"]["boolean"]().required()
});

var baseTodo = {
  id: (0, _nanoid.nanoid)(),
  text: 'Test To Do item',
  completed: false
};
todos.push(baseTodo);

var getTodos = function getTodos() {
  var completed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (completed === null) {
    _logger["default"].log.success('Getting all todos');

    return todos;
  }

  _logger["default"].log.success('Getting by completion todos'); // eslint-disable-next-line no-unneeded-ternary


  var isCompleted = completed === 'true' ? true : false;
  return todos.filter(function (todo) {
    return todo.completed === isCompleted;
  });
};

exports.getTodos = getTodos;

var getTodo = function getTodo(id) {
  _logger["default"].log.success("Getting todo with id: ".concat(id));

  return todos.find(function (todo) {
    return todo.id === id;
  });
};

exports.getTodo = getTodo;

var addTodo = function addTodo(todo) {
  _logger["default"].log.info("Validating ".concat(todo, " to add"));

  var _todoSchema$validate = todoSchema.validate(todo),
      error = _todoSchema$validate.error;

  if (error) {
    _logger["default"].log.error(new Error("Validation error: ".concat(error.message)));

    return {
      error: error
    };
  }

  _logger["default"].log.success("Validated: ".concat(todo));

  var newTodo = _objectSpread({
    id: (0, _nanoid.nanoid)()
  }, todo);

  todos.push(newTodo);
  return {
    newTodo: newTodo
  };
};

exports.addTodo = addTodo;

var updateTodo = function updateTodo(id, todo) {
  _logger["default"].log.info("Validating ".concat(todo, " for update"));

  var _todoSchema$validate2 = todoSchema.validate(todo),
      error = _todoSchema$validate2.error;

  if (error) {
    _logger["default"].log.error(new Error("Validation error: ".concat(error.message)));

    return {
      error: error
    };
  }

  _logger["default"].log.success("Validated: ".concat(todo));

  var todoIndex = todos.findIndex(function (t) {
    return t.id === id;
  });
  todos[todoIndex] = _objectSpread({
    id: id
  }, todo);
  var updatedTodo = todos[todoIndex];
  return {
    updatedTodo: updatedTodo
  };
};

exports.updateTodo = updateTodo;