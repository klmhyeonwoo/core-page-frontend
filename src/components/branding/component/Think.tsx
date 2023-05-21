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
import block from "../../../../images/block.png";

export default function Think() {
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

        @media all and (min-width: 0px) and (max-width: 1099px) {
          width: 80vw;
          display: flex;
          align-items: left;
          justify-content: left;
        }
      `}
    >
      {" "}
      <BrandingImage
        src={block}
        ref={brandingImageRef}
        scrollState={brandingImageState}
        alt="블록"
      />
      <div
        css={css`
          z-index: 1;
        `}
      >
        <TitleOfBlue
          text="생각의 미학"
          ref={blueTitleRef}
          scrollState={blueTitleState ? true : false}
        />
        <TitleOfBlack
          text={`멋쟁이사자처럼 강남대학교에서는 \n 다양한 프로젝트를 진행하고 있어요`}
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
            text={`멋쟁이사자처럼 팀원들이 자유로운 분위기에서 생각하도록 장려하고 있어요 \n
            기획된 아이디어를 통해 팀빌딩을 진행하고 서비스로 연계되는 과정을 경험하고 있답니다.
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />

          <Description
            text={`실제로 기획부터 디자인까지 진행해 자체 어플라이 서비스를 만들었고, \n
            이 서비스를 통해 멋쟁이사자처럼 여러분들의 모집을 성공적으로 마칠 수 있었어요
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />
        </div>
      </div>
    </article>
  );
}
