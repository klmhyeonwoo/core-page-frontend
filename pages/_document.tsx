import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></Script>
        <Script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></Script>
        <Script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js"></Script>
      </body>
    </Html>
  );
}
