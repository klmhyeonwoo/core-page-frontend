/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React from "react";
import { TitleOfBlack, TitleOfBlue } from "../common/component/component";
import { useInView } from "react-intersection-observer";
import { SkillSection, SkillTitle } from "./component/component";
import { IdealTitle } from "../ideal/component/component";

export default function Skill() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
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
      `}
    >
      <article
        css={css`
          max-width: 62.5em;
          width: auto;

          @media (max-width: 1100px) {
            padding: 3em;
          }
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
        <SkillSection
          skill="프론트엔드"
          ref={skillRef}
          scrollState={skillState}
        />
        <SkillSection skill="백엔드" ref={skillRef} scrollState={skillState} />
        <SkillSection skill="디자인" ref={skillRef} scrollState={skillState} />
      </article>
    </section>
  );
}
