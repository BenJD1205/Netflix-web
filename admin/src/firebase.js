import firebase from 'firebase';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCdUS0LrPiLIcruCM0EUbK7Y-rJ6VVm7cE",
    authDomain: "netflix-6133a.firebaseapp.com",
    projectId: "netflix-6133a",
    storageBucket: "netflix-6133a.appspot.com",
    messagingSenderId: "564928455424",
    appId: "1:564928455424:web:df71bf68bfbdce513009e5",
    measurementId: "G-QCBG8RD3FX"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();


export default storage;