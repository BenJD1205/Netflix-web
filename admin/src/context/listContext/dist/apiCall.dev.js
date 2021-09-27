"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteList = exports.createList = exports.getLists = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ListActions = require("./ListActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getLists = function getLists(dispatch) {
  var res;
  return regeneratorRuntime.async(function getLists$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _ListActions.getListsStart)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("/lists", {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          res = _context.sent;
          dispatch((0, _ListActions.getListsSuccess)(res.data));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch((0, _ListActions.getListsFailure)());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //create


exports.getLists = getLists;

var createList = function createList(list, dispatch) {
  var res;
  return regeneratorRuntime.async(function createList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch((0, _ListActions.createListStart)());
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("/lists", list, {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          res = _context2.sent;
          dispatch((0, _ListActions.createListSuccess)(res.data));
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          dispatch((0, _ListActions.createListFailure)());

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //delete 


exports.createList = createList;

var deleteList = function deleteList(id, dispatch) {
  return regeneratorRuntime.async(function deleteList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          dispatch((0, _ListActions.deleteListStart)());
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("/lists/" + id, {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          dispatch((0, _ListActions.deleteListSuccess)(id));
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          dispatch((0, _ListActions.deleteListFailure)());

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteList = deleteList;