/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import idea from "../../../../images/idea.png";
import hackerton from "../../../../images/hackerton.png";
import study from "../../../../images/study.png";
import education from "../../../../images/education.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect, useRef } from "react";
import { TextfadeUp, fadeIn, fadeUp } from "@/styles/effect";

export const TitleOfBlue = forwardRef(
  ({ text, scrollState }: textProps, ref: any) => {
    const blueRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (scrollState && blueRef.current) {
        blueRef.current.style.display = "block";
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        <span
          css={css`
            display: none;
            color: #4f85e8;
            font-family: "Pretendard-Bold";
            letter-spacing: -0.03em;
            font-size: 23px;
            animation: ${TextfadeUp} 1s ease-in-out;
          `}
          ref={blueRef}
        >
          {text}
        </span>
      </div>
    );
  }
);

// eslint 오류로, displayName이 없으면 리턴에 따른 값만 출력하기 때문에 디버깅이 어려워진다. 따라서 출력할 이름을 명시해주어야한다.
TitleOfBlue.displayName = "TitleOfBlue";

export const TitleOfBlack = forwardRef(
  ({ text, scrollState }: textProps, ref: any) => {
    const topText = text.split("\n")[0];
    const bottomText = text.split("\n")[1];
    const blackRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (scrollState && blackRef.current) {
        blackRef.current.style.display = "block";
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        <span
          css={css`
            display: none;
            color: #333d4b;
            font-family: "Pretendard-Black";
            letter-spacing: -0.03em;
            font-size: 34px;
            margin-top: 0.5em;
            line-height: 1.3em;
            animation: ${TextfadeUp} 1.3s ease-in-out;
          `}
          ref={blackRef}
        >
          {topText} <br />
          {bottomText}
        </span>
      </div>
    );
  }
);

TitleOfBlack.displayName = "TitleOfBlack";

export const Description = forwardRef(
  ({ text, scrollState }: textProps, ref: any) => {
    const descriptionRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (scrollState && descriptionRef.current) {
        descriptionRef.current.style.display = "block";
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        <span
          css={css`
            display: none;
            color: #333d4b;
            font-family: "Pretendard-Medium";
            letter-spacing: -0.03em;
            font-size: 18px;
            margin-top: 3em;
            line-height: 1.5em;
            animation: ${TextfadeUp} 1.5s ease-in-out;
          `}
          ref={descriptionRef}
        >
          {text.split("\n").map((item) => {
            return (
              <div key={item}>
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
      </div>
    );
  }
);

Description.displayName = "Description";

export const ItemOfCategory = forwardRef(
  ({ text, src, alt, scrollState }: catergoryProps, ref: any) => {
    const topText = text.split("\n")[0];
    const bottomText = text.split("\n")[1];
    const categoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollState && categoryRef.current) {
        categoryRef.current.style.display = "flex";
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        <div
          css={css`
            display: none;
            box-sizing: border-box;
            height: 440px;
            border-radius: 40px;
            box-shadow: 5px 5px 15px 10px rgb(0, 0, 0, 0.16);
            padding: 2.5em;

            color: #333d4b;
            font-family: "Pretendard-ExtraBold";
            letter-spacing: -0.03em;
            font-size: 24px;

            flex-direction: column;
            align-items: center;
            animation: ${fadeUp} 1.7s ease-in-out;
          `}
          ref={categoryRef}
        >
          <span
            css={css`
              float: left;
              margin-right: auto;
              margin-bottom: 2.5em;
            `}
          >
            {topText} <br />
            {bottomText}
          </span>
          <Image
            src={src}
            css={css`
              width: 300px;
              height: auto;
              // 학습의 경우, 크기를 맞춰주기 위해 다른 width 사이즈 값을 주어줍니다.
              ${alt === "학습" &&
              css`
                width: 270px;
              `}
            `}
            alt={alt}
          />
        </div>
      </div>
    );
  }
);

ItemOfCategory.displayName = "ItemOfCategory";

export function Category() {
  const [studyRef, studyState] = useInView();
  const [educationRef, educationState] = useInView();
  const [ideaRef, ideaState] = useInView();
  const [hackertonRef, hackertonState] = useInView();

  return (
    <article
      css={css`
        width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-box: box-sizing;
        row-gap: 4em;
        column-gap: 4em;
        margin-top: 4em;
      `}
    >
      <ItemOfCategory
        text={`다양한 학생들의 코딩 입문을 위해 \n 온 · 오프라인 학습을 지원해요`}
        src={study}
        alt="학습"
        ref={studyRef}
        scrollState={studyState}
      />
      <ItemOfCategory
        text={`서비스 빌딩을 위한 \n 입체적인 교육을 진행해요`}
        src={education}
        alt="교육"
        ref={educationRef}
        scrollState={educationState}
      />
      <ItemOfCategory
        text={`아이디어 빌딩을 위한 \n 아이디어 톤을 진행해요`}
        src={idea}
        alt="아이디어톤"
        ref={ideaRef}
        scrollState={ideaState}
      />
      <ItemOfCategory
        text={`혁신적인 서비스 개발을 위한 \n 해커톤을 진행해요`}
        src={hackerton}
        alt="해커톤"
        ref={hackertonRef}
        scrollState={hackertonState}
      />
    </article>
  );
}
