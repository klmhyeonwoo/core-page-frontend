/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { TitleOfBlack, TitleOfBlue } from "../common/component/component";
import { useInView } from "react-intersection-observer";
import lion from "../../../images/lion.gif";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setOpeningScroll } from "@/src/features/scrollSlice";

export default function Opening() {
  const openingRef = useRef<HTMLDivElement>(null);
  const [scrollRef, scrollState] = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setOpeningScroll({
        openingScroll: openingRef.current?.getBoundingClientRect().top,
      })
    );
  }, []);

  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10em;
        padding-bottom: 12em;
        background-color: #f9fafb;
      `}
      ref={openingRef}
    >
      <article
        css={css`
          width: 1000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-contents: center;
          row-gap: 1em;
          color: black;
          font-family: "Pretendard-Medium";
          letter-spacing: -0.03em;
          font-size: 25px;

          span {
            display: block;
          }
        `}
        ref={scrollRef}
      >
        <Image
          src={lion}
          alt="사자 이모지"
          css={css`
            width: 7em;
            height: auto;
          `}
        />
        <span>아이디어를 실현하고, 혁신적인 서비스를 만들 수 있는 곳</span>
        <span>
          다양한 팀원들과 네트워킹을 통해 서비스 플로우를 경험해보세요
        </span>
        <span>멋쟁이사자처럼과 함께라면 새로운 경험을 할 수 있을거에요</span>
      </article>
    </section>
  );
}
