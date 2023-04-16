/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import welcome from "../../../../images/procedure/welcome.png";
import procedure from "../../../../images/procedure/procedure.png";
import Image from "next/image";
import { TextfadeUp } from "@/styles/effect";
import { ApplyButton } from "../../main/component/component";

export const ProcedureContent = () => {
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
      <Content />
    </section>
  );
};

const Content = () => {
  return (
    <article
      css={css`
        display: flex;
        column-gap: 5em;
        justify-content: center;
        align-items: center;
        width: 1000px;
      `}
    >
      <Image
        src={welcome}
        alt="합류 여정 기본 이미지"
        css={css`
          width: 25em;
          height: auto;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 3em;
        `}
      >
        <DescriptionTitle />
        <DescriptionProcedure />
      </div>
    </article>
  );
};

const DescriptionTitle = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      `}
    >
      <span
        css={css`
          display: block;
          color: #333d4b;
          font-family: "Pretendard-Bold";
          letter-spacing: -0.03em;
          font-size: 30px;
          // animation: ${TextfadeUp} 1.3s ease-in-out;
        `}
      >
        우리는 멋진 문화를 만들어가고 있어요
      </span>
      <span
        css={css`
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          line-height: 1.5em;
          color: #4e5968;
        `}
      >
        내가 생각한 아이디어를 어떻게 실현할지 고민을 하고 계신가요? <br />
        아이디어를 실현할 수 있는 곳, 혁신적인 서비스를 만들 수 있는 곳,
        <br />
        웹 개발에 대한 열정만 있다면, 언제든지 지원을 해주세요. <br />
        멋쟁이사자처럼에서 예비사자 여러분들을 기다립니다. <br />
      </span>
    </div>
  );
};

const DescriptionProcedure = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1em;
      `}
    >
      <span
        css={css`
          display: block;
          color: #333d4b;
          font-family: "Pretendard-Medium";
          letter-spacing: -0.03em;
          font-size: 25px;
          // animation: ${TextfadeUp} 1.3s ease-in-out;
        `}
      >
        시작하기에 앞서
      </span>
      <span
        css={css`
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          line-height: 1.5em;
          color: #4e5968;
        `}
      >
        멋쟁이사자처럼 합류를 결정하셨다면, <br />
        이제 멋쟁이사자처럼 합류 여정을 소개해 드릴게요. <br />
        여러분들의 혁신적인 아이디어가 곧 미래가 되는 그 과정을 함께해 주세요.
      </span>
      <Image
        src={procedure}
        css={css`
          width: 100%;
          height: auto;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        `}
        alt="합류 여정 이미지"
      />
      <span
        css={css`
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          font-size: 13px;
          color: #8b94a1;
        `}
      >
        * 각 트랙장 또는 대표진에 의해 일부 전형의 변경 사항이 있을 수도 있어요.
      </span>
    </div>
  );
};
