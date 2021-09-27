"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyCdUS0LrPiLIcruCM0EUbK7Y-rJ6VVm7cE",
  authDomain: "netflix-6133a.firebaseapp.com",
  projectId: "netflix-6133a",
  storageBucket: "netflix-6133a.appspot.com",
  messagingSenderId: "564928455424",
  appId: "1:564928455424:web:df71bf68bfbdce513009e5",
  measurementId: "G-QCBG8RD3FX"
};

_firebase["default"].initializeApp(firebaseConfig);

var storage = _firebase["default"].storage();

var _default = storage;
exports["default"] = _default;