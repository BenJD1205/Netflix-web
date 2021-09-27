"use strict";

var router = require('express').Router();

var List = require('../models/List');

var _require = require('./verifyToken'),
    verify = _require.verify; //Create


router.post("/", verify, function _callee(req, res) {
  var newList, savedList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context.next = 14;
            break;
          }

          newList = new List(req.body);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(newList.save());

        case 5:
          savedList = _context.sent;
          res.status(201).json(savedList);
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
          res.status(403).json("You are not allowed!");

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); //update
// router.put("/:id",verify ,async (req,res) => {
//     if(req.user.isAdmin){
//         try{
//             const updateddMovie = await Movie.findByIdAndUpdate(req.params.id, {
//                 $set:req.body
//             }, {new:true});
//             res.status(200).json(updateddMovie);
//         }catch(err){
//             res.status(500).json(err)
//         }
//     }else{
//         res.status(403).json("You are not allowed");
//     }
// })
//Delete

router["delete"]("/:id", verify, function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!req.user.isAdmin) {
            _context2.next = 12;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(List.findByIdAndDelete(req.params.id));

        case 4:
          res.status(200).json("List has been deleted...");
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json(_context2.t0);

        case 10:
          _context2.next = 13;
          break;

        case 12:
          res.status(403).json("You are not allowed");

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); //Get all

router.get("/", verify, function _callee3(req, res) {
  var typeQuery, genreQuery, list;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          typeQuery = req.query.type;
          genreQuery = req.query.genre;
          list = [];
          _context3.prev = 3;

          if (!typeQuery) {
            _context3.next = 16;
            break;
          }

          if (!genreQuery) {
            _context3.next = 11;
            break;
          }

          _context3.next = 8;
          return regeneratorRuntime.awrap(List.aggregate([{
            $sample: {
              size: 10
            }
          }, {
            $match: {
              type: typeQuery,
              genre: genreQuery
            }
          }]));

        case 8:
          list = _context3.sent;
          _context3.next = 14;
          break;

        case 11:
          _context3.next = 13;
          return regeneratorRuntime.awrap(List.aggregate([{
            $sample: {
              size: 10
            }
          }, {
            $match: {
              type: typeQuery
            }
          }]));

        case 13:
          list = _context3.sent;

        case 14:
          _context3.next = 19;
          break;

        case 16:
          _context3.next = 18;
          return regeneratorRuntime.awrap(List.aggregate([{
            $sample: {
              size: 10
            }
          }]));

        case 18:
          list = _context3.sent;

        case 19:
          res.status(200).json(list);
          _context3.next = 25;
          break;

        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](3);
          res.status(500).json(_context3.t0);

        case 25:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 22]]);
});
module.exports = router;