"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListsFailure = exports.getListsSuccess = exports.getListsStart = void 0;

var getListsStart = function getListsStart() {
  return {
    type: "GET_LISTS_START"
  };
};

exports.getListsStart = getListsStart;

var getListsSuccess = function getListsSuccess(lists) {
  return {
    type: "GET_LISTS_SUCCESS",
    payload: lists
  };
};

exports.getListsSuccess = getListsSuccess;

var getListsFailure = function getListsFailure() {
  return {
    type: "GET_LISTS_FAILURE"
  };
}; // //create
// export const createMovieStart = () => ({
//     type: "CREATE_MOVIE_START",
//   });
//   export const createMovieSuccess = (movie) => ({
//     type: "CREATE_MOVIE_SUCCESS",
//     payload: movie,
//   });
//   export const createMovieFailure = () => ({
//     type: "CREATE_MOVIE_FAILURE",
//   });
// //update
// export const updateMovieStart = () => ({
//   type: "UPDATE_MOVIE_START",
// });
// export const updateMovieSuccess = (movie) => ({
//   type: "UPDATE_MOVIE_SUCCESS",
//   payload: movie,
// });
// export const updateMovieFailure = () => ({
//   type: "UPDATE_MOVIE_FAILURE",
// });
// //delete
// export const deleteMovieStart = () => ({
//     type: "DELETE_MOVIE_START",
//   });
//   export const deleteMovieSuccess = (id) => ({
//     type: "DELETE_MOVIE_SUCCESS",
//     payload: id,
//   });
//   export const deleteMovieFailure = () => ({
//     type: "DELETE_MOVIE_FAILURE",
//   });


exports.getListsFailure = getListsFailure;