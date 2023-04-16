/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import welcome from "../../../../images/procedure/welcome.png";
import procedure from "../../../../images/procedure/procedure.png";
import Image from "next/image";
import { TextfadeUp } from "@/styles/effect";
import { ApplyButton } from "../../main/component/component";

export const FAQContent = () => {
  return (
    <section
      css={css`
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <article
        css={css`
          width: 1000px;
          display: flex;
          flex-direction: column;
          row-gap: 1em;
        `}
      >
        <QuestionBox text={`전형에 대한 피드백을 받을 수 있을까요?`} />
        <QuestionBox
          text={`지원서 제출 후, 추가 서류 업데이트는 어떻게 하나요?`}
        />
        <QuestionBox text={`불합격한 이력이 있어도 재지원이 가능한가요?`} />
        <QuestionBox
          text={`지원서 제출 중 오류가 발생하면 어떻게 대응하면 될까요?`}
        />
        <QuestionBox
          text={`면접 확인서와 지원 확인서는 어떻게 발급 받을 수 있을까요?`}
        />
      </article>
    </section>
  );
};

const QuestionBox = ({ text }: textProps) => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 0.7em;
        justify-content: left;
        align-items: center;
        width: 100%;
        height: 60px;
        transition: 0.4s all;
        cursor: pointer;
        padding-left: 1em;
        box-sizing: border-box;

        &:hover {
          background-color: rgba(2, 32, 71, 0.05);
          border-radius: 8px;
        }
      `}
    >
      <QuestionSymbol />
      <Title text={text} />
    </div>
  );
};

const QuestionSymbol = () => {
  return (
    <span
      css={css`
        display: block;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        font-size: 19px;
        color: rgb(176, 184, 193);
      `}
    >
      Q
    </span>
  );
};

const Title = ({ text }: textProps) => {
  return (
    <span
      css={css`
        display: block;
        color: rgb(78, 89, 104);
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 18px;
        // animation: ${TextfadeUp} 1.3s ease-in-out;
      `}
    >
      {text}
    </span>
  );
};
