"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _AuthActions = require("./AuthActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(user, dispatch) {
  var res;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _AuthActions.loginStart)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("auth/login", user));

        case 4:
          res = _context.sent;
          dispatch((0, _AuthActions.loginSuccess)(res.data));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch((0, _AuthActions.loginFailure)());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.login = login;