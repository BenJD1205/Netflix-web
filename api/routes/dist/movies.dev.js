"use strict";

var router = require('express').Router();

var Movie = require('../models/Movie');

var CryptoJS = require("crypto-js");

var _require = require('./verifyToken'),
    verify = _require.verify; //Create


router.post("/", verify, function _callee(req, res) {
  var newMovie, savedMovie;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context.next = 14;
            break;
          }

          newMovie = new Movie(req.body);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(newMovie.save());

        case 5:
          savedMovie = _context.sent;
          res.status(200).json(savedMovie);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          res.status(500).json(_context.t0);

        case 12:
          _context.next = 15;
          break;

        case 14:
          res.status(403).json("You are not allowed");

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); //update

router.put("/:id", verify, function _callee2(req, res) {
  var updateddMovie;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context2.next = 13;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Movie.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 4:
          updateddMovie = _context2.sent;
          res.status(200).json(updateddMovie);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json(_context2.t0);

        case 11:
          _context2.next = 14;
          break;

        case 13:
          res.status(403).json("You are not allowed");

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); //Delete

router["delete"]("/:id", verify, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context3.next = 12;
            break;
          }

          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Movie.findByIdAndDelete(req.params.id));

        case 4:
          res.status(200).json("Movie has been deleted...");
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json(_context3.t0);

        case 10:
          _context3.next = 13;
          break;

        case 12:
          res.status(403).json("You are not allowed");

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); //Get a movie

router.get("/find/:id", verify, function _callee4(req, res) {
  var movie;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Movie.findById(req.params.id));

        case 3:
          movie = _context4.sent;
          res.status(200).json(movie);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Get random

router.get("/random", verify, function _callee5(req, res) {
  var type, movie;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          type = req.query.type;
          _context5.prev = 1;

          if (!(type === "series")) {
            _context5.next = 8;
            break;
          }

          _context5.next = 5;
          return regeneratorRuntime.awrap(Movie.aggregate([{
            $match: {
              isSeries: true
            }
          }, {
            $sample: {
              size: 1
            }
          }]));

        case 5:
          movie = _context5.sent;
          _context5.next = 11;
          break;

        case 8:
          _context5.next = 10;
          return regeneratorRuntime.awrap(Movie.aggregate([{
            $match: {
              isSeries: false
            }
          }, {
            $sample: {
              size: 1
            }
          }]));

        case 10:
          movie = _context5.sent;

        case 11:
          res.status(200).json(movie);
          _context5.next = 17;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json(_context5.t0);

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 14]]);
}); //Get all

router.get("/", verify, function _callee6(req, res) {
  var movies;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context6.next = 13;
            break;
          }

          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(Movie.find());

        case 4:
          movies = _context6.sent;
          res.status(200).json(movies.reverse());
          _context6.next = 11;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.status(500).json(_context6.t0);

        case 11:
          _context6.next = 14;
          break;

        case 13:
          res.status(403).json("You are not allowed");

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;