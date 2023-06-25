/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Description,
  TitleOfBlack,
  TitleOfBlue,
} from "../../common/component/component";
import { BrandingImage } from "./component";
import earth from "../../../../images/earth.png";

export default function Network() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
  const [describeRef, describeState] = useInView();
  const [brandingImageRef, brandingImageState] = useInView();
  return (
    <article
      css={css`
        width: 62.5em;
        display: flex;
        box-sizing: border-box;
        align-items: center;

        @media (max-width: 1100px) {
          padding-left: 3em;
          padding-right: 3em;
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          z-index: 1;
        `}
      >
        <TitleOfBlue
          text="활발한 네트워킹"
          ref={blueTitleRef}
          scrollState={blueTitleState ? true : false}
        />
        <TitleOfBlack
          text={`우리는 선한 영향력을 \n 전파하는 네트워킹을 만들고있어요`}
          ref={blackTitleRef}
          scrollState={blackTitleState ? true : false}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 2.6em;
          `}
        >
          <Description
            text={`멋쟁이사자처럼은 다양한 대학교와의 해커톤을 통해 웹 기술에 대한 네트워킹을 제공하고 있어요 \n
            물론 멋쟁이사자처럼 강남대학교 내에서도 다양한 프로젝트와 네트워킹을 진행하고 있어요 \n
            기수별 졸업생들과 함께 진행하는 '강남 멋사인들의 밤' 세션이 궁금하시지 않나요? \n
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />

          <Description
            text={`우리는 기수별 기술 블로그 및 SNS 활동을 통해 멋쟁이사자처럼 자취에 대한 기록을 남기고 있어요 \n
            우리가 남기는 기록을 통해 추후 웹 개발자를 꿈꾸는 자신의 발자취에 도움을 받을 수 있어요!
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />
        </div>
      </div>
      <BrandingImage
        src={earth}
        ref={brandingImageRef}
        scrollState={brandingImageState}
        alt="지구"
      />
    </article>
  );
}
