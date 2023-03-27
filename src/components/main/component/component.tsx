/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import box from "../../../../images/box_main.png";
import glass from "../../../../images/glass_main.png";
import present from "../../../../images/present_main.png";
import ball from "../../../../images/ball_main.png";
import space from "../../../../images/space.png";
import lion from "../../../../images/lion.png";
import { fadeIn } from "@/styles/effect";
import { useRef } from "react";

const scrollEffect = keyframes`
	0% {
    margin-top: 0px;
    opacity: 40%;
  }
  25% {
    opacity: 60%;
  }
	50% {
    margin-top: 20px;
    opacity: 100%;
  }
  75% {
    opacity: 60%;
  }
  100% {
    margin-top: 0px;
    opacity: 40%;
  }
`;

const bounce = keyframes`
	0% {
    margin-top: 0px;
  }
	50% {
    margin-top: 15px;
  }

  100% {
    margin-top: 0px;
  }
`;

export const MainArticle = () => {
  const TitleRef = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (TitleRef.current) {
      TitleRef.current.style.display = "flex";
    }
  }, 2800);
  return (
    <div
      css={css`
        display: none;
        font-display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${fadeIn} 0.5s ease-in-out;

        flex-direction: column;
        align-items: center;
        z-index: 1;
      `}
      ref={TitleRef}
    >
      <MainTitle
        text={`우아하고 혁신적인 브랜딩을 실현하는 \n 우리는 멋쟁이사자처럼 입니다`}
      />
      <ApplyButton />
    </div>
  );
};

export const ApplyButton = () => {
  return (
    <div
      css={css`
        margin-top: 3em;
        width: 17em;
        height: 3.5em;
        border: none;
        border-radius: 0.7em;
        background-color: rgba(0, 12, 30, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        column-gap: 1em;
        padding-right: 0.1em;
        transition: 0.5s all;
        cursor: pointer;

        &:hover {
          background-color: rgb(78, 89, 104);
          color: rgb(255, 255, 255);
        }
      `}
    >
      <Image
        src={lion}
        alt="사자"
        css={css`
          margin-top: 0.3em;
          width: 3em;
          height: auto;
        `}
      />
      <span
        css={css`
          font-family: "Pretendard-Bold";
          letter-spacing: -0.03em;
          color: white;
        `}
      >
        팀에 합류하고 싶으신가요?
      </span>
    </div>
  );
};

export const IconBox = () => {
  return (
    <>
      <Icon src={box} alt="박스" />
      <Icon src={glass} alt="화분" />
      <Icon src={present} alt="선물" />
      <Icon src={ball} alt="공" />
      <Icon src={space} alt="메인 아이콘" />
    </>
  );
};

export const Icon = ({ src, alt }: imgProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  setTimeout(() => {
    if (imageRef.current) {
      imageRef.current.style.display = "block";
    }
  }, 1500);

  setTimeout(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = "40%";
    }
  }, 2500);

  return (
    <>
      <Image
        css={css`
          display: none;
          position: absolute !important;
          animation: ${fadeIn} 0.5s ease-in-out;
          transition: 1s all;
          ${alt === "메인 아이콘"
            ? css`
                width: 15em;
                // animation: ${bounce} 2.1s linear 1s infinite;
              `
            : css`
                width: 13.5em;
              `}
          height: auto;

          ${alt === "공" &&
          css`
            width: 12.5em;
            transform: translate(-400px, 200px);
            // animation: ${bounce} 2.3s linear 1s infinite;
          `}

          ${alt === "화분" &&
          css`
            transform: translate(-400px, -250px);
            // animation: ${bounce} 2.5s linear 1s infinite;
          `}

          ${alt === "선물" &&
          css`
            transform: translate(400px, 250px);
            width: 19.5em;
            // animation: ${bounce} 2.7s linear 1s infinite;
          `}

          ${alt === "박스" &&
          css`
            transform: translate(400px, -200px);
            // animation: ${bounce} 2.9s linear 1s infinite;
          `}

          ${alt === "스크롤" &&
          css`
            top: 93%;
            width: 2.5em;
            height: auto;
            animation: ${scrollEffect} 2.1s linear 1s infinite;
          `}
        `}
        src={src}
        alt="메인 아이콘 이미지"
        ref={imageRef}
      />
    </>
  );
};

export const BackGroundImg = ({ src }: imgProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        padding: 0;
      `}
    >
      <Image
        src={src}
        alt="백그라운드 이미지"
        css={css`
          width: 100% !important;
          height: 100% !important;
          animation: ${fadeIn} 0.7s ease-in-out;
        `}
      />
      {/* <Icon src={box} />
      <Icon src={glass} />
      <Icon src={present} />
      <Icon src={ball} />
      <Icon src={space} /> */}
    </div>
  );
};

export const MainTitle = ({ text }: textProps) => {
  const topText = text.split("\n")[0];
  const bottomText = text.split("\n")[1];

  return (
    <>
      <div
        css={css`
          text-align: center;
          font-family: "Pretendard-Black";
          font-size: 55px;
          letter-spacing: -0.04em;
          color: #333d4b;
          z-index: 1;
          line-height: 1.3em;
        `}
      >
        {topText} <br />
        {bottomText}
      </div>
    </>
  );
};
