"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./utils/config"));

var _logger = _interopRequireDefault(require("./utils/logger"));

var _errors = _interopRequireDefault(require("./utils/errors"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_logger["default"].middleware);
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])({
  origin: _config["default"].origin
}));
app.use(_routes["default"]);
app.use(_errors["default"].notFound);
app.use(_errors["default"].errorHandler);
app.listen(_config["default"].port);