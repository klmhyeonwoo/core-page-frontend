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
import profileIcon from "../../../images/profileIcon.png";

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

        @media (max-width: 1000px) {
          padding-left: 3em;
          padding-right: 3em;
          box-sizing: border-box;
        }
      `}
      ref={openingRef}
    >
      <article
        css={css`
          width: 62.5em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-contents: center;
          row-gap: 0.8em;
          color: black;
          font-family: "Pretendard-Medium";
          letter-spacing: -0.03em;
          font-size: 1.56em;
          color: #404040;

          @media (max-width: 481px) {
            font-size: 1.2em;
          }
          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 1.5em;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 1.56em;
          }

          span {
            font-size: 1em;
            display: block;
            text-align: center;
            line-height: 1.5em;
          }
        `}
      >
        <Image
          src={profileIcon}
          alt="사자 이모지"
          css={css`
            width: 12em;
            height: auto;
          `}
        />
        <span>
          다양한 네트워킹을 통해 우리가 만들어가는 서비스의 플로우를
          경험해보세요
        </span>
        <span>
          아이디어를 실현하고 혁신적인 나만의 서비스를 만들 수 있는 팀
        </span>
        <span>멋쟁이사자처럼과 함께라면 새로운 경험을 할 수 있을거에요</span>
      </article>
    </section>
  );
}
