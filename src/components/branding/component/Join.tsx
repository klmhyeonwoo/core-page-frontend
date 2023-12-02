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
import book from "../../../../images/book.png";

export default function Join() {
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
          text="합류 이야기"
          ref={blueTitleRef}
          scrollState={blueTitleState ? true : false}
        />
        <TitleOfBlack
          text={`혁신적인 서비스를 만들고 싶은데 \n 어떻게 해야할지를 잘 모르겠나요?`}
          ref={blackTitleRef}
          scrollState={blackTitleState ? true : false}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          `}
        >
          <Description
            text={`멋쟁이사자처럼은 창업과 서비스 개발에 대한 교육을 제공하고 있어요 \n
  또한 팀 빌딩과 해커톤을 통해 아이디어를 내 손으로 실현시킬 수 있는 기회를 제공한답니다. \n
  코딩에 관심이 있다면 누구나 참여할 수 있으며, 나의 아이디어를 실현시키겠다는 열정이 중요합니다. \n
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />

          <Description
            text={`아이디어를 실현할 수 있는 곳, 혁신적인 서비스를 만들 수 있는 곳, \n
  웹 개발에 열정과 관심이 있다면 지금 바로 멋쟁이사자처럼 강남대학교 팀에 합류할 수 있어요
  `}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />
        </div>
      </div>
      <BrandingImage
        src={book}
        ref={brandingImageRef}
        scrollState={brandingImageState}
        alt="책"
      />
    </article>
  );
}
