"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContextProvider = exports.AuthContext = void 0;

var _react = require("react");

var _AuthReducer = _interopRequireDefault(require("./AuthReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false
};
var AuthContext = (0, _react.createContext)(INITIAL_STATE);
exports.AuthContext = AuthContext;

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(_AuthReducer["default"], INITIAL_STATE),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return;
};

exports.AuthContextProvider = AuthContextProvider;