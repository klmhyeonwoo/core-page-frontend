/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import idea from "../../../../images/idea.png";
import hackerton from "../../../../images/hackerton.png";
import study from "../../../../images/study.png";
import education from "../../../../images/education.png";
import Image from "next/image";
import logo from "../../../../images/logo.png";
import logo2 from "../../../../images/logo2.png";
import instagram from "../../../../images/footer/instagram.svg";
import facebook from "../../../../images/footer/facebook.svg";
import channelTalk from "../../../../images/footer/channelTalk.svg";
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { TextfadeUp, fadeIn, fadeUp } from "@/styles/effect";
import Link from "next/link";

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
            font-family: "Pretendard-ExtraBold";
            letter-spacing: -0.03em;
            font-size: 34px;
            margin-top: 0.5em;
            line-height: 1.3em;
            margin-bottom: 1.6em;
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
            line-height: 1.5em;
            animation: ${TextfadeUp} 1.5s ease-in-out;
          `}
          ref={descriptionRef}
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

            &:hover {
              filter: blur(20px);
            }
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

// 공통적인 헤더를 나타내주는 컴포넌트
export const IndexHeader = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  // useMemo(() => {}, [window.scrollY || document.documentElement.scrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <>
      <div
        css={css`
          position: fixed;
          z-index: 999;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1.2em;
          padding-bottom: 1.2em;
          @media (max-width: 1099px) {
            display: none;
          }
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 18px;
          }
          @media all and (min-width: 1100px) and (max-width: 2000px) {
            font-size: 18px;
          }
          column-gap: 30em;

          background-color: none;

          ${scrollState &&
          css`
            border: solid;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1;
            border-color: #e6e8ea;
            border-width: 1px;
          `}
          a {
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14.8px;
            }
            @media all and (min-width: 1100px) and (max-width: 2000px) {
              font-size: 14.8px;
            }
            color: white;
            font-family: "Pretendard-Regular";
            letter-spacing: -0.03em;
          }
        `}
      >
        <Image
          alt="로고"
          src={logo2}
          css={css`
            height: auto;
            width: 155px;
            transition: 0.4s all;
            &:hover {
              opacity: 70%;
            }
          `}
        />
        <nav
          css={css`
            height: 100%;
            display: flex;
            column-gap: 2.5em;
            transition: 0.4s all;
          `}
        >
          <Link
            href="https://ripe-launch-04b.notion.site/88de609dd84e4fcab616b1cf2cf491e2"
            target="_blank"
            tabIndex={-1}
          >
            조직 소개
          </Link>
          <Link
            href="https://ripe-launch-04b.notion.site/24b3c0a0d41d4162b1c458055fe86dd8"
            target="_blank"
            tabIndex={-1}
          >
            합류 여정
          </Link>
          <Link
            href="https://ripe-launch-04b.notion.site/2bde1551815e455ab4306ab5ca190519"
            target="_blank"
            tabIndex={-1}
          >
            강남멋사 조직도
          </Link>
        </nav>
      </div>
    </>
  );
};

// 푸터 컴포넌트
export const Footer = () => {
  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f9fafb;
        padding-top: 8em;
        padding-bottom: 8em;
      `}
    >
      <div
        css={css`
          // @media all and (min-width: 768px) and (max-width: 1099px) {
          //   font-size: 14px;
          //   span {
          //     font-size: 12px;
          //   }
          // }
          // @media all and (min-width: 1100px) and (max-width: 2000px) {
          //   font-size: 16px;
          // }
          width: 1000px;
          height: 100%;
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          margin-left: 0.4em;
          color: #8b95a1;
          text-align: left;
          display: flex;
          flex-direction: column;
          row-gap: 0.6em;
          font-size: 15px;
        `}
      >
        <span
          css={css`
            font-family: "Pretendard-Bold";
            color: #333d4b;
            // @media all and (min-width: 768px) and (max-width: 1099px) {
            //   font-size: 14.5px !important;
            // }
            // @media all and (min-width: 1100px) and (max-width: 2000px) {
            //   font-size: 15.7px !important;
            // }
            font-size: 17px;
            margin-bottom: 0.6em;
          `}
        >
          멋쟁이사자처럼 강남대학교 11기
        </span>
        <span>경기도 용인시 기흥구 강남로 40 강남대학교 이공관</span>
        <span>Copyright ⓒ 2023 likelion knu All rights reserved.</span>
        <FooterSNS />
      </div>
    </section>
  );
};

export const FooterSNS = () => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 0.4em;
      `}
    >
      <FooterIcon src={facebook} alt="페이스북" />
      <FooterIcon src={channelTalk} alt="채널톡" />
      <FooterIcon src={instagram} alt="인스타그램" />
    </div>
  );
};

export const FooterIcon = ({ src, alt }: imgProps) => {
  return (
    <Image
      src={src}
      alt={`${alt}`}
      css={css`
        width: 35px;
        height: auto;
      `}
    />
  );
};
