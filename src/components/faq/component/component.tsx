/** @jsxImportSource @emotion/react */
import {
  catergoryProps,
  imgProps,
  questionProps,
  textProps,
} from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import welcome from "../../../../images/procedure/welcome.png";
import procedure from "../../../../images/procedure/procedure.png";
import Image from "next/image";
import { TextfadeUp } from "@/styles/effect";
import { ApplyButton } from "../../main/component/component";
import { question } from "./question";
import { useState } from "react";

export const FAQContent = () => {
  const titleOfQuestion = Object.keys(question);
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
          height: 600px;
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          overflow: auto;

          @media (max-width: 1100px) {
            padding-left: 1em;
            padding-right: 1em;
          }
        `}
      >
        {titleOfQuestion.map((item, key) => {
          return (
            <QuestionBox
              key={key}
              question={`${question[item].question}`}
              answer={`${question[item].answer}`}
            />
          );
        })}

        {/* <QuestionBox text={`전형에 대한 피드백을 받을 수 있을까요?`} />
        <QuestionBox
          text={`지원서 제출 후, 추가 서류 업데이트는 어떻게 하나요?`}
        />
        <QuestionBox text={`불합격한 이력이 있어도 재지원이 가능한가요?`} />
        <QuestionBox
          text={`지원서 제출 중 오류가 발생하면 어떻게 대응하면 될까요?`}
        />
        <QuestionBox
          text={`면접 확인서와 지원 확인서는 어떻게 발급 받을 수 있을까요?`}
        /> */}
      </article>
    </section>
  );
};

const QuestionBox = ({ question, answer }: questionProps) => {
  const [clickState, SetClickState] = useState(false);

  const displayAnswer = () => {
    SetClickState(!clickState);
  };

  return (
    <section>
      <div
        css={css`
          display: flex;
          column-gap: 0.7em;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 80px;
          transition: 0.4s all;
          cursor: pointer;
          padding-left: 1em;
          padding-right: 1em;
          box-sizing: border-box;

          &:hover {
            background-color: rgba(2, 32, 71, 0.05);
            border-radius: 8px;
          }
        `}
        onClick={displayAnswer}
      >
        <QuestionSymbol />
        <Title question={question} />
      </div>
      <div
        css={css`
          ${clickState
            ? css`
                display: flex;
              `
            : css`
                display: none;
              `}
          margin-top: 1em;
          column-gap: 0.7em;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 80px;
          transition: 0.4s all;
          cursor: pointer;
          padding-left: 1em;
          box-sizing: border-box;
          background-color: #e8f3ff;
          border-radius: 8px;
          padding-right: 1em;
          box-sizing: border-box;
        `}
      >
        <AnswerSymbol />
        <Answer answer={answer} />
      </div>
    </section>
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

        @media (max-width: 388px) {
          font-size: 11px;
        }
        @media (min-width: 388px) and (max-width: 481px) {
          font-size: 13px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          font-size: 15px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 16px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 19px;
        }
      `}
    >
      Q
    </span>
  );
};

const AnswerSymbol = () => {
  return (
    <span
      css={css`
        display: block;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;
        font-size: 19px;
        color: #1b64da;

        @media (max-width: 388px) {
          font-size: 11px;
        }
        @media (min-width: 388px) and (max-width: 481px) {
          font-size: 13px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          font-size: 15px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 16px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 19px;
        }
      `}
    >
      A
    </span>
  );
};

const Title = ({ question }: questionProps) => {
  return (
    <span
      css={css`
        display: block;
        color: rgb(78, 89, 104);
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 16px;
        // animation: ${TextfadeUp} 1.3s ease-in-out;

        @media (max-width: 388px) {
          font-size: 11px;
        }
        @media (min-width: 388px) and (max-width: 481px) {
          font-size: 12px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          font-size: 15px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 16px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 16px;
        }
      `}
    >
      {question}
    </span>
  );
};

const Answer = ({ answer }: questionProps) => {
  return (
    <span
      css={css`
        display: block;
        color: rgb(78, 89, 104);
        font-family: "Pretendard-Regular";
        letter-spacing: -0.03em;
        font-size: 16px;
        // animation: ${TextfadeUp} 1.3s ease-in-out;

        @media (max-width: 388px) {
          font-size: 11px;
        }
        @media (min-width: 388px) and (max-width: 481px) {
          font-size: 12px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          font-size: 15px;
        }
        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 16px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 16px;
        }
      `}
    >
      {answer}
    </span>
  );
};
