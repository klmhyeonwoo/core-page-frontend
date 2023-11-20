import firebase from "firebase/app";
import "firebase/messaging";

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
}

export function requestToken() {
  if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging();
    void Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        messaging
          .getToken({
            vapidKey:
              "BEBh6zX-B3s59zdxByEpojY4NBxsJF8i6xKOA2jcKijeGRiQfvsGQVuzQ8jyGJESACNRtiySgQQjEk6rvPd67nc",
          })
          .then((token) => {
            console.log(`푸시 토큰 발급 완료 : ${token}`);
          })
          .catch((err) => {
            console.log(err);
            console.log("푸시 토큰 가져오는 중에 에러 발생");
          });
      } else if (permission === "denied") {
        console.log("푸시 권한 차단");
      }
    });
  }
}
