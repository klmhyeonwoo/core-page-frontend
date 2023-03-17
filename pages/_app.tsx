import GlobalStyles from "@/styles/GlobalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"
        />
        <title> 멋쟁이사자처럼 </title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
//gud dlrj gksrmffh djzp qkRnsms rjdpdy alcls aorqnr gkskeh ahfmrpTsp bb

//형 이거 안글러 어케 바꾸는 거에요 밈친 맥북 마나도 모르게ㅆ네 ㅠㅠ
