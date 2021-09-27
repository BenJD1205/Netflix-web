"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMovie = exports.createMovie = exports.getMovies = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _MovieActions = require("./MovieActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getMovies = function getMovies(dispatch) {
  var res;
  return regeneratorRuntime.async(function getMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _MovieActions.getMoviesStart)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].get("/movies", {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          res = _context.sent;
          dispatch((0, _MovieActions.getMoviesSuccess)(res.data));
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch((0, _MovieActions.getMoviesFailure)());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //create


exports.getMovies = getMovies;

var createMovie = function createMovie(movie, dispatch) {
  var res;
  return regeneratorRuntime.async(function createMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          dispatch((0, _MovieActions.createMovieStart)());
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("/movies", movie, {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          res = _context2.sent;
          dispatch((0, _MovieActions.createMovieSuccess)(res.data));
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          dispatch((0, _MovieActions.createMovieFailure)());

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //delete 


exports.createMovie = createMovie;

var deleteMovie = function deleteMovie(id, dispatch) {
  return regeneratorRuntime.async(function deleteMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          dispatch((0, _MovieActions.deleteMovieStart)());
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("/movies/" + id, {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
          }));

        case 4:
          dispatch((0, _MovieActions.deleteMovieSuccess)(id));
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          dispatch((0, _MovieActions.deleteMovieFailure)());

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteMovie = deleteMovie;