"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListReducer = function ListReducer(state, action) {
  switch (action.type) {
    case "GET_LISTS_START":
      return {
        lists: [],
        isFetching: true,
        error: false
      };

    case "GET_LISTS_SUCCESS":
      return {
        lists: action.payload,
        isFetching: false,
        error: false
      };

    case "GET_LISTS_FAILURE":
      return {
        lists: [],
        isFetching: false,
        error: true
      };
    // case "CREATE_MOVIE_START":
    //     return {
    //         ...state,
    //         isFetching:true,
    //         error:false,
    //     }
    // case "CREATE_MOVIE_SUCCESS":
    //     return {
    //         movies:[...state.movies,action.payload],
    //         isFetching:false,
    //         error:false,
    //     }
    // case "CREATE_MOVIE_FAILURE":
    //     return {
    //         ...state,
    //         isFetching:false,
    //         error:true,
    //     }
    //     case "UPLOAD_MOVIE_START":
    //         return {
    //           ...state,
    //           isFetching: true,
    //           error: false,
    //         };
    //     case "UPLOAD_MOVIE_SUCCESS":
    //     return {
    //         movies: state.movies.map(
    //         (movie) => movie._id === action.payload._id && action.payload
    //         ),
    //         isFetching: false,
    //         error: false,
    //     };
    //     case "UPLOAD_MOVIE_FAILURE":
    //     return {
    //         ...state,
    //         isFetching: false,
    //         error: true,
    //     };
    // case "DELETE_MOVIES_START":
    //     return {
    //         ...state,
    //         isFetching:true,
    //         error:false,
    //     }
    // case "DELETE_MOVIES_SUCCESS":
    //     return {
    //         movies:action.payload.filter((movie) => movie._id !== action.payload),
    //         isFetching:false,
    //         error:false,
    //     }
    // case "DELETE_MOVIES_FAILURE":
    //     return {
    //         ...state,
    //         isFetching:false,
    //         error:true,
    //     }

    default:
      return _objectSpread({}, state);
  }
};

var _default = ListReducer;
exports["default"] = _default;