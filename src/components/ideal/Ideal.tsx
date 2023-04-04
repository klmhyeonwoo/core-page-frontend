/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React from "react";
import { TitleOfBlack, TitleOfBlue } from "../common/component/component";
import { useInView } from "react-intersection-observer";
import { IdealArticle, IdealContent, IdealTitle } from "./component/component";

export default function Ideal() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
  const [idealRef, idealState] = useInView();
  const [skillRef, skillState] = useInView();
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
        background-color: #f9fafb;
      `}
    >
      <article
        css={css`
          width: 1000px;
        `}
      >
        <TitleOfBlue
          text="인재상"
          ref={blueTitleRef}
          scrollState={blueTitleState ? true : false}
        />
        <TitleOfBlack
          text={`우리는 상호공감을 중점으로 \n 항상 상호 간 존중을 토대로 움직이고 있어요`}
          ref={blackTitleRef}
          scrollState={blackTitleState ? true : false}
        />
        <IdealArticle ref={idealRef} scrollState={idealState ? true : false} />
      </article>
    </section>
  );
}
