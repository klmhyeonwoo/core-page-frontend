import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  Header,
  SideHeader,
} from "../src/components/common/component/component";
import wrapper from "@/src/app/store";

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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
            />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://knu-likelion.org/" />
            <meta property="og:title" content="멋쟁이사자처럼 강남대학교" />
            <meta property="og:image" content="https://url.kr/mzrxb6" />
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
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <title> 멋쟁이사자처럼 </title>
          </Head>
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
            />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://knu-likelion.org/" />
            <meta property="og:title" content="멋쟁이사자처럼 강남대학교" />
            <meta property="og:image" content="https://url.kr/mzrxb6" />
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
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
              as="font"
              type="font/woff"
              crossOrigin=""
            />
            <title> 멋쟁이사자처럼 </title>
          </Head>
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
