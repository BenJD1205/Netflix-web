"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListFailure = exports.deleteListSuccess = exports.deleteListStart = exports.updateListFailure = exports.updateListSuccess = exports.updateListStart = exports.createListFailure = exports.createListSuccess = exports.createListStart = exports.getListsFailure = exports.getListsSuccess = exports.getListsStart = void 0;

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


exports.getListsFailure = getListsFailure;

var createListStart = function createListStart() {
  return {
    type: "CREATE_LIST_START"
  };
};

exports.createListStart = createListStart;

var createListSuccess = function createListSuccess(list) {
  return {
    type: "CREATE_LIST_SUCCESS",
    payload: list
  };
};

exports.createListSuccess = createListSuccess;

var createListFailure = function createListFailure() {
  return {
    type: "CREATE_LIST_FAILURE"
  };
}; // //update


exports.createListFailure = createListFailure;

var updateListStart = function updateListStart() {
  return {
    type: "UPDATE_MOVIE_START"
  };
};

exports.updateListStart = updateListStart;

var updateListSuccess = function updateListSuccess(list) {
  return {
    type: "UPDATE_MOVIE_SUCCESS",
    payload: list
  };
};

exports.updateListSuccess = updateListSuccess;

var updateListFailure = function updateListFailure() {
  return {
    type: "UPDATE_MOVIE_FAILURE"
  };
}; //delete


exports.updateListFailure = updateListFailure;

var deleteListStart = function deleteListStart() {
  return {
    type: "DELETE_LIST_START"
  };
};

exports.deleteListStart = deleteListStart;

var deleteListSuccess = function deleteListSuccess(id) {
  return {
    type: "DELETE_LIST_SUCCESS",
    payload: id
  };
};

exports.deleteListSuccess = deleteListSuccess;

var deleteListFailure = function deleteListFailure() {
  return {
    type: "DELETE_LIST_FAILURE"
  };
};

exports.deleteListFailure = deleteListFailure;