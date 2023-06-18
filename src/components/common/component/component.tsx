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
import category1 from "../../../../images/category/category1.png";
import category2 from "../../../../images/category/category2.png";
import category3 from "../../../../images/category/category3.png";
import category4 from "../../../../images/category/category4.png";
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { TextfadeUp, fadeIn, fadeUp } from "@/styles/effect";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/src/app/store";
import { url } from "inspector";

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
            font-size: 1.43em;
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
            font-size: 35px;
            margin-top: 0.5em;
            line-height: 1.3em;
            margin-bottom: 1.6em;
            animation: ${TextfadeUp} 1.3s ease-in-out;

            @media (max-width: 481px) {
              font-size: 22px;
            }
            @media (min-width: 481px) and (max-width: 767px) {
              font-size: 27px;
            }
            @media (min-width: 768px) and (max-width: 1099px) {
              font-size: 32px;
            }
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
            font-size: 1.1em;
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
            font-size: 1.68em;
            // height: 16.2em;
            height: 100%;
            border-radius: 2.3rem;
            box-shadow: 5px 5px 15px 10px rgb(0, 0, 0, 0.16);
            text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            padding: 2.5em;

            color: white;
            font-family: "Pretendard-ExtraBold";
            letter-spacing: -0.03em;
            background: url(${src.src});
            background-position: 60% 40%;
            object-fit: cover; /* 아래에서 다룰 속성값 */

            flex-direction: column;
            align-items: center;
            animation: ${fadeUp} 1.7s ease-in-out;
            transition: 0.4s all;

            &:hover {
              transform: translateY(-5%);
            }
          `}
          ref={categoryRef}
        >
          <span
            css={css`
              float: left;
              margin-right: auto;
              text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.2);
            `}
          >
            {topText} <br />
            {bottomText}
          </span>
          {/* <Image
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
          /> */}
          <span
            css={css`
              font-size: 16px;
              margin-top: 2em;
              font-family: "Pretendard-Medium";
              text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.2);
              margin-right: auto;
              line-height: 1.4em;

              @media (max-width: 481px) {
                font-size: 15px;
              }
              @media (min-width: 481px) and (max-width: 767px) {
                font-size: 16px;
              }
              @media (min-width: 768px) and (max-width: 1099px) {
                font-size: 16px;
              }
            `}
          >
            {alt}
          </span>
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
        max-width: 62.5em;
        width: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-box: box-sizing;
        row-gap: 4em;
        column-gap: 4em;
        margin-top: 4em;

        @media (max-width: 1000px) {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <ItemOfCategory
        text={`학생들의 코딩 입문을 위해 \n 온 · 오프라인 학습을 지원해요`}
        src={category1}
        alt="멋쟁이사자처럼의 온라인 강의 플랫폼 `테킷`을 통해 초급자를 위한 다양한 VOD 강의를 무료로 제공해요"
        ref={studyRef}
        scrollState={studyState}
      />
      <ItemOfCategory
        text={`서비스 빌딩을 위한 \n 입체적인 교육을 진행해요`}
        src={category2}
        alt="멋쟁이사자처럼에서는 웹 개발 교육 뿐만 아니라 서비스 기획, UI / UX 디자인 등 자신의 서비스를 빌딩하기 위한 다양한 역량을 배울 수 있답니다"
        ref={educationRef}
        scrollState={educationState}
      />
      <ItemOfCategory
        text={`아이디어 빌딩을 위한 \n 아이디어 톤을 진행해요`}
        src={category3}
        alt="전국의 멋쟁이사자처럼 학생들이 모여 아이디어를 공유하는 네트워킹의 장 아이디어 톤을 진행하고, 이 아이디어를 실현시키는 과정을 경험해요"
        ref={ideaRef}
        scrollState={ideaState}
      />
      <ItemOfCategory
        text={`혁신적인 서비스 개발을 위한 \n 해커톤을 진행해요`}
        src={category4}
        alt="실제 아이디어를 구현하고 서비스 플로우를 경험할 수 있는 과정을 경험하는 축제의 장, 멋쟁이사자처럼의 꽃인 해커톤을 진행해요"
        ref={hackertonRef}
        scrollState={hackertonState}
      />
    </article>
  );
}

// 소개 페이지의 공통적인 헤더를 나타내주는 컴포넌트
export const Header = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);
  const [openingState, setOpeningState] = useState<boolean>(false);
  const openingScroll = useSelector(
    (state: RootState) => state.scroll.openingScroll
  );

  console.log(openingScroll);

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
      setOpeningState(false);
    } else {
      setScrollState(false);
    }

    if (window.scrollY > openingScroll) {
      console.log(window.scrollY, openingScroll);
      setOpeningState(true);
      setScrollState(false);
    } else {
      setOpeningState(false);
    }
  };

  // useMemo(() => {}, [window.scrollY || document.documentElement.scrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, [openingScroll]);

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
          padding-top: 0.5em;
          padding-bottom: 0.5em;

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

          ${openingState &&
          css`
            border: solid;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1;
            border-color: #e6e8ea;
            border-width: 1px;
            background-color: white;
            transition: 0.5s all;
            color: #4e5968;

            a {
              color: #4e5968;
            }
          `}

          ${scrollState &&
          css`
            // border: solid;
            // border-top: 0;
            // border-left: 0;
            // border-right: 0;
            // border-bottom: 1;
            // border-color: #e6e8ea;
            // border-width: 1px;
            background-color: rgb(47, 53, 62, 0.7);
            transition: 0.5s all;

            a {
              color: white;
            }
          `}
        `}
      >
        {openingState ? (
          <Image
            alt="로고"
            src={logo}
            css={css`
              height: auto;
              width: 155px;
              transition: 0.4s all;
              &:hover {
                opacity: 70%;
              }
              text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
            `}
          />
        ) : (
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
        )}

        <nav
          css={css`
            height: 100%;
            display: flex;
            column-gap: 1.3em;
            transition: 0.4s all;

            a {
              border: none;
              box-sizing: border-box;
              padding: 0.9em;
              border-radius: 0.5em;
              transition: 0.5s all;
            }

            ${openingState
              ? css`
                  a:hover {
                    background-color: rgba(2, 32, 71, 0.05);
                  }
                `
              : css`
                  a {
                    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
                  }

                  a:hover {
                    background-color: rgba(217, 217, 255, 0.11);
                  }
                `}
          `}
        >
          <Link href="/" tabIndex={-1}>
            조직 소개
          </Link>
          <Link href="/procedure" tabIndex={-1}>
            합류 여정
          </Link>
          <Link href="/faq" tabIndex={-1}>
            자주 묻는 질문
          </Link>
        </nav>
      </div>
    </>
  );
};

// 합류 여정, FAQ 페이지의 공통적인 헤더를 나타내주는 컴포넌트
export const SideHeader = () => {
  const [scrollState, setScrollState] = useState<boolean>(false);
  const [openingState, setOpeningState] = useState<boolean>(false);
  const openingScroll = useSelector(
    (state: RootState) => state.scroll.openingScroll
  );

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
  }, [openingScroll]);

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
          padding-top: 0.5em;
          padding-bottom: 0.5em;

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

          ${openingState &&
          css`
            border: solid;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1;
            border-color: #e6e8ea;
            border-width: 1px;
            background-color: white;
            transition: 0.5s all;

            a {
              color: #4e5968;
            }
          `}

          ${scrollState &&
          css`
            // border: solid;
            // border-top: 0;
            // border-left: 0;
            // border-right: 0;
            // border-bottom: 1;
            // border-color: #e6e8ea;
            // border-width: 1px;
            background-color: rgb(47, 53, 62, 0.7);
            transition: 0.5s all;
          `}

          a {
            color: #4e5968;
          }
        `}
      >
        <Image
          alt="로고"
          src={logo}
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
            column-gap: 1.3em;
            transition: 0.4s all;

            a {
              border: none;
              box-sizing: border-box;
              padding: 0.9em;
              border-radius: 0.5em;
              transition: 0.5s all;
            }
            a:hover {
              background-color: rgba(2, 32, 71, 0.05);
            }
          `}
        >
          <Link href="/" tabIndex={-1}>
            조직 소개
          </Link>
          <Link href="/procedure" tabIndex={-1}>
            합류 여정
          </Link>
          <Link href="/faq" tabIndex={-1}>
            자주 묻는 질문
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
        padding-top: 5em;
        padding-bottom: 5em;
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
          width: 62.5rem;
          height: 100%;
          font-family: "Pretendard-Regular";
          letter-spacing: -0.03em;
          margin-left: 0.4em;
          color: #8b95a1;
          text-align: left;
          display: flex;
          flex-direction: column;
          row-gap: 0.6em;
          font-size: 14px;

          @media (max-width: 1100px) {
            padding-left: 1.5em;
            padding-right: 1.5em;
            width: 100%;
          }
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
            font-size: 16px;
            margin-bottom: 0.6em;
          `}
        >
          멋쟁이사자처럼 강남대학교
        </span>
        {/* <span>경기도 용인시 기흥구 강남로 40 강남대학교 이공관</span> */}
        <span>
          실습실 : 경기도 용인시 기흥구 강남로 40 강남대학교 후생관 104호
        </span>
        <span>
          동아리실 : 경기도 용인시 기흥구 강남로 40 강남대학교 후생관
          멋쟁이사자처럼
        </span>
        <span> 프로젝트 개발 : 프로젝트 코어 TF</span>
        <span>
          Copyright ⓒ 2023 Kangnam Univ. Likelion All rights reserved.
        </span>
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
        column-gap: 0.7em;
      `}
    >
      <FooterIcon src={facebook} alt="페이스북" />
      <FooterIcon src={channelTalk} alt="채널톡" />
      <FooterIcon src={instagram} alt="인스타그램" />
    </div>
  );
};

export const FooterIcon = ({ src, alt }: imgProps) => {
  const url: { [key: string]: string } = {
    페이스북: "https://www.facebook.com/groups/1215037368599547",
    인스타그램: "https://www.instagram.com/likelion.knu/",
    채널톡: "https://knu-likelion.channel.io/lounge",
  };

  const select = alt ? url[alt] : "#";

  return (
    <Link href={select} target="_blank">
      <Image
        src={src}
        alt={`${alt}`}
        css={css`
          margin-top: 1em;
          width: 2.4em;
          height: auto;
          cursor: pointer;
          opacity: 60%;
          filter: brightness(90%);
          transition: 0.4s all;

          &:hover {
            opacity: 100%;
            filter: brightness(100%);
          }
        `}
      />
    </Link>
  );
};
