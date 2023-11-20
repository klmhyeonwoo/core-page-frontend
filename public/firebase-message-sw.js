import firebase from "firebase/app";

if (typeof self !== "undefined") {
  firebase.initializeApp({
    apiKey: "AIzaSyB0zrzrPWYpJ_d0MOwud5_LycrKQU_yj_E",
    authDomain: "likelioncore.firebaseapp.com",
    projectId: "likelioncore",
    storageBucket: "likelioncore.appspot.com",
    messagingSenderId: "703936799586",
    appId: "1:703936799586:web:b0a3d4a01b659a10d1023b",
    measurementId: "G-Q75L9HS341",
  });

  const messaging = firebase.messaging();
}
