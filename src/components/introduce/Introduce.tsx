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
import { useMemo } from "react";

export default function Introduce() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
  const [describeRef, describeState] = useInView();

  return (
    <>
      <section
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 10em;
          padding-bottom: 10em;

          @media (max-width: 1100px) {
            padding: 3em;
            box-sizing: border-box;
          }
        `}
      >
        <article
          css={css`
            width: 62.5em;
          `}
        >
          <TitleOfBlue
            text="우리를 소개해요"
            ref={blueTitleRef}
            scrollState={blueTitleState ? true : false}
          />
          <TitleOfBlack
            text={`멋쟁이사자처럼 \n 우리는 무엇을 하는 단체일까요?`}
            ref={blackTitleRef}
            scrollState={blackTitleState ? true : false}
          />
          <Description
            text={`멋쟁이사자처럼은 현재 국내에서 가장 많은 학생들이 활동하고 있는 프로그래밍 교육 프로그램이에요 \n 
          전국의 대학이 함께 참여하는 연합 코딩 동아리로, 평소 기술의 장벽으로 실현하지 못한 여러 아이디어를 \n
          각종 스터디를 통해 배우며 도전해볼 수 있는 동아리에요`}
            ref={describeRef}
            scrollState={describeState ? true : false}
          />
          <Category />
        </article>
      </section>
    </>
  );
}
