import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  Header,
  SideHeader,
} from "../src/components/common/component/component";
import wrapper from "@/src/app/store";
import ScrollToTop from "@/src/hook/ScrollToTop";

function App({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="viewport" content="width=device-width" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://knu-likelion.org/" />
            <meta property="og:title" content="멋쟁이사자처럼 강남대학교" />
            <meta
              property="og:image"
              content="https://github.com/likelionknu/Archive/blob/1751b00aff65db0336b2da3db1316f7052368921/%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3%20%E2%80%93%2014.png?raw=true"
            />
            <meta
              property="og:description"
              content="멋쟁이사자처럼 강남대학교"
            />
            <meta property="og:site_name" content="멋쟁이사자처럼 강남대학교" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="description" content="멋쟁이사자처럼 강남대학교" />
            <meta
              name="google-adsense-account"
              content="ca-pub-1550225145364569"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
            />
            <title> 멋쟁이사자처럼 </title>
          </Head>
          <ScrollToTop />
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </>
      );
    }
    default: {
      return (
        <>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="viewport" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://knu-likelion.org/" />
            <meta property="og:title" content="멋쟁이사자처럼 강남대학교" />
            <meta
              property="og:image"
              content="https://github.com/likelionknu/Archive/blob/1751b00aff65db0336b2da3db1316f7052368921/%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%87%E1%85%A9%E1%84%83%E1%85%B3%20%E2%80%93%2014.png?raw=true"
            />
            <meta
              property="og:description"
              content="멋쟁이사자처럼 강남대학교"
            />
            <meta property="og:site_name" content="멋쟁이사자처럼 강남대학교" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="description" content="멋쟁이사자처럼 강남대학교" />

            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
            />
            <title> 멋쟁이사자처럼 </title>
          </Head>
          <ScrollToTop />
          <GlobalStyles />
          <SideHeader />
          <Component {...pageProps} />
        </>
      );
    }
  }
}

export default wrapper.withRedux(App);
//gud dlrj gksrmffh djzp qkRnsms rjdpdy alcls aorqnr gkskeh ahfmrpTsp bb

//형 이거 안글러 어케 바꾸는 거에요 밈친 맥북 마나도 모르게ㅆ네 ㅠㅠ
