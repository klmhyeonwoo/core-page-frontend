/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import {
  Category,
  Description,
  TitleOfBlack,
  TitleOfBlue,
} from "../common/component/component";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ending from "../../../images/ending/ending.png";

export default function Ending() {
  // const [blueTitleRef, blueTitleState] = useInView();
  // const [blackTitleRef, blackTitleState] = useInView();
  // const [describeRef, describeState] = useInView();
  const [endingRef, endingState] = useInView();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<boolean>(false);
  let scroll = 0;
  let scaledScroll = 0;

  const handleScroll = () => {
    if (backgroundRef.current) {
      scaledScroll = Math.abs(window.scrollY - scroll);
      console.log("background:", backgroundRef.current.offsetWidth);
      console.log("현재 스크롤:", scaledScroll);
      console.log(window.innerWidth);
      if (backgroundRef.current.offsetWidth <= window.innerWidth) {
        backgroundRef.current.style.width = `${1000 + scaledScroll}px`;
      }
      console.log(backgroundRef.current.style);
    }
  };

  useEffect(() => {
    // endingState로 넣은 Ref 값을 가지고 있을 경우

    if (endingState && backgroundRef.current) {
      // console.log("현재 값은 참이고, 찾았어요");
      // console.log("scrollHeight", backgroundRef.current.scrollHeight);
      // console.log("clientHeight", backgroundRef.current.clientHeight);
      // console.log("window.scrollY", window.scrollY);
      // console.log(endingScroll);
      scroll = window.scrollY;

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); //clean up
      };
    }
  }, [endingState]);

  return (
    <>
      <section
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
        ref={endingRef}
      >
        <article
          css={css`
            width: 1000px;
            height: 800px;
            background-image: url(${ending.src});

            display: flex;
            justify-content: center;
            align-items: center;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          `}
          ref={backgroundRef}
        >
          {/* <Image
            src={ending}
            alt="사자 이미지"
            css={css`
              width: 100%;
              height: auto;
              z-index: 0;
            `}
          /> */}
          <span
            css={css`
              color: #4f85e8;
              font-family: "Pretendard-Bold";
              letter-spacing: -0.03em;
              font-size: 30px;
              color: white;
              z-index: 1;
            `}
          >
            지금 이제 우리는 새로운 브랜딩을 펼쳐갑니다.
          </span>
        </article>
      </section>
    </>
  );
}
