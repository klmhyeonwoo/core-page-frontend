/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React from "react";
import { TitleOfBlack, TitleOfBlue } from "../common/component/component";
import { useInView } from "react-intersection-observer";

export default function Skill() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
  const [describeRef, describeState] = useInView();
  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10em;
        padding-bottom: 10em;
      `}
    >
      <article
        css={css`
          width: 1000px;
        `}
      >
        <TitleOfBlue
          text="기술 이야기"
          ref={blueTitleRef}
          scrollState={blueTitleState ? true : false}
        />
        <TitleOfBlack
          text={`우리는 프로젝트를 진행하면서 \n 트렌디한 다양한 기술 스택들을 배우고 있어요`}
          ref={blackTitleRef}
          scrollState={blackTitleState ? true : false}
        />
      </article>
    </section>
  );
}
