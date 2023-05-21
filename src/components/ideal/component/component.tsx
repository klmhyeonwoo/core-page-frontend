/** @jsxImportSource @emotion/react */
import {
  WrapperProps,
  imgProps,
  refProps,
  skillProps,
  textProps,
} from "@/@types/type";
import { TextfadeUp } from "@/styles/effect";
import { css, keyframes } from "@emotion/react";
import { forwardRef, useEffect, useRef } from "react";

export const IdealArticle = forwardRef(
  ({ scrollState }: refProps, ref: any) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollState && contentRef.current) {
        contentRef.current.style.display = "grid";
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        <article
          css={css`
            display: none;
            grid-template-columns: 1fr 1fr;
            row-gap: 4em;
            animation: ${TextfadeUp} 1.5s ease-in-out;
            column-gap: 1.3em;
          `}
          ref={contentRef}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: left;
              float: left;
              row-gap: 1em;
            `}
          >
            <IdealTitle text="기본적인 배려를 가진 팀원을 원해요" />
            <IdealContent
              text={`활동을 진행하면서 최대한 갈등상황을 만들지 않기 위해 \n
            상대방에 대한 배려를 가진 사람을 필요로 하고 있어요`}
            />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: left;
              float: left;
              row-gap: 1em;
            `}
          >
            <IdealTitle text="매사 열정을 가지고 임하는 팀원을 원해요" />
            <IdealContent
              text={`다양한 프로젝트에서 최고의 활약을 보여주기 보다, \n
          항상 열정을 가지고 열심히 임하는 팀원을 더 선호해요`}
            />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: left;
              float: left;
              row-gap: 1em;
            `}
          >
            <IdealTitle text="발전을 추구하는 팀원을 원해요" />
            <IdealContent
              text={`단순히 대외활동이라는 틀에서 벗어나, 팀원들과의 다양한 \n
          도전을 통해 성장하는 팀원을 필요로 하고 있어요`}
            />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: left;
              float: left;
              row-gap: 1em;
            `}
          >
            <IdealTitle text="자신만의 색깔을 가진 팀원을 원해요" />
            <IdealContent
              text={`현재 멋쟁이사자처럼 강남대학교는 열심히 브랜딩 중이에요, \n
          우리의 브랜딩 컬러에 또 하나의 색깔을 더해줄 팀원을 찾고 있어요`}
            />
          </div>
        </article>
      </div>
    );
  }
);

IdealArticle.displayName = "IdealArticle";

export const IdealTitle = ({ text }: textProps) => {
  return (
    <span
      css={css`
        text-align: left;
        font-family: "Pretendard-Bold";
        font-size: 24px;
        letter-spacing: -0.04em;
        color: #333d4b;
        z-index: 1;
        line-height: 1.3em;

        @media (max-width: 481px) {
          font-size: 18px;
        }
        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 20px;
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          font-size: 22px;
        }
      `}
    >
      {text}
    </span>
  );
};

export const IdealContent = ({ text }: textProps) => {
  return (
    <span
      css={css`
        text-align: left;
        font-family: "Pretendard-Medium";
        font-size: 18px;
        letter-spacing: -0.04em;
        color: #6b7684;
        z-index: 1;
        line-height: 1.3em;

        @media (max-width: 481px) {
          font-size: 15px;
        }
        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 16px;
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          font-size: 17px;
        }
      `}
    >
      {text.split("\n").map((item, key) => {
        return (
          <div key={key}>
            <span
              css={css`
                display: block;
              `}
            >
              {item}
            </span>
          </div>
        );
      })}
    </span>
  );
};
