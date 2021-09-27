"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMovieFailure = exports.deleteMovieSuccess = exports.deleteMovieStart = exports.updateMovieFailure = exports.updateMovieSuccess = exports.updateMovieStart = exports.createMovieFailure = exports.createMovieSuccess = exports.createMovieStart = exports.getMoviesFailure = exports.getMoviesSuccess = exports.getMoviesStart = void 0;

var getMoviesStart = function getMoviesStart() {
  return {
    type: "GET_MOVIES_START"
  };
};

exports.getMoviesStart = getMoviesStart;

var getMoviesSuccess = function getMoviesSuccess(movies) {
  return {
    type: "GET_MOVIES_SUCCESS",
    payload: movies
  };
};

exports.getMoviesSuccess = getMoviesSuccess;

var getMoviesFailure = function getMoviesFailure() {
  return {
    type: "GET_MOVIES_FAILURE"
  };
}; //create


exports.getMoviesFailure = getMoviesFailure;

var createMovieStart = function createMovieStart() {
  return {
    type: "CREATE_MOVIE_START"
  };
};

exports.createMovieStart = createMovieStart;

var createMovieSuccess = function createMovieSuccess(movie) {
  return {
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
  };
};

exports.createMovieSuccess = createMovieSuccess;

var createMovieFailure = function createMovieFailure() {
  return {
    type: "CREATE_MOVIE_FAILURE"
  };
}; //update


exports.createMovieFailure = createMovieFailure;

var updateMovieStart = function updateMovieStart() {
  return {
    type: "UPDATE_MOVIE_START"
  };
};

exports.updateMovieStart = updateMovieStart;

var updateMovieSuccess = function updateMovieSuccess(movie) {
  return {
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie
  };
};

exports.updateMovieSuccess = updateMovieSuccess;

var updateMovieFailure = function updateMovieFailure() {
  return {
    type: "UPDATE_MOVIE_FAILURE"
  };
}; //delete


exports.updateMovieFailure = updateMovieFailure;

var deleteMovieStart = function deleteMovieStart() {
  return {
    type: "DELETE_MOVIE_START"
  };
};

exports.deleteMovieStart = deleteMovieStart;

var deleteMovieSuccess = function deleteMovieSuccess(id) {
  return {
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
  };
};

exports.deleteMovieSuccess = deleteMovieSuccess;

var deleteMovieFailure = function deleteMovieFailure() {
  return {
    type: "DELETE_MOVIE_FAILURE"
  };
};

exports.deleteMovieFailure = deleteMovieFailure;