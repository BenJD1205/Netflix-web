"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.loginFailure = exports.loginSuccess = exports.loginStart = void 0;

var loginStart = function loginStart() {
  return {
    type: "LOGIN_START"
  };
};

exports.loginStart = loginStart;

var loginSuccess = function loginSuccess(user) {
  return {
    type: "LOGIN_SUCCESS",
    payload: user
  };
};

exports.loginSuccess = loginSuccess;

var loginFailure = function loginFailure() {
  return {
    type: "LOGIN_FAILURE"
  };
}; //logout


exports.loginFailure = loginFailure;

var logout = function logout() {
  return {
    type: "LOGOUT"
  };
};

exports.logout = logout;