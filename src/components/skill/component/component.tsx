/** @jsxImportSource @emotion/react */
import { WrapperProps, imgProps, skillProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import Image from "next/image";
import java from "../../../../images/skill/java.png";
import aws from "../../../../images/skill/aws.png";
import spring from "../../../../images/skill/spring.png";
import gradle from "../../../../images/skill/gradle.png";
import mysql from "../../../../images/skill/mysql.png";
import gcp from "../../../../images/skill/gcp.png";
import linux from "../../../../images/skill/linux.png";
import github from "../../../../images/skill/github.png";
import git from "../../../../images/skill/git.png";
import maven from "../../../../images/skill/maven.png";
import postman from "../../../../images/skill/postman.png";
import inteliJ from "../../../../images/skill/inteliJ.png";

import html from "../../../../images/skill/html.png";
import css2 from "../../../../images/skill/css.png";
import javascript from "../../../../images/skill/javascript.png";
import react from "../../../../images/skill/react.png";
import next from "../../../../images/skill/next.png";
import typescript from "../../../../images/skill/typescript.png";
import redux from "../../../../images/skill/redux.png";
import emotion from "../../../../images/skill/emotion.png";
import styled from "../../../../images/skill/styled.png";
import sass from "../../../../images/skill/sass.png";

import xd from "../../../../images/skill/xd.png";
import figma from "../../../../images/skill/figma.png";
import { forwardRef, useEffect, useRef, useState } from "react";
import { TextfadeUp, cloneflow, flow } from "@/styles/effect";

export const SkillSection = forwardRef(
  ({ skill, scrollState }: skillProps, ref: any) => {
    const skillRef = useRef<HTMLDivElement>(null);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      if (scrollState && skillRef.current) {
        skillRef.current.style.visibility = "visible";
        setChecked(true);
      }
    }, [scrollState]);

    return (
      <div
        ref={ref}
        css={css`
          width: auto;
          display: flex;
          flex-direction: column;
          row-gap: 5em;

          // @media (max-width: 1100px) {
          //   padding-left: 3em;
          //   padding-right: 3em;
          //   box-sizing: border-box;
          // }
        `}
      >
        {skill === "백엔드" && (
          <div
            ref={skillRef}
            css={css`
              width: auto;
              display: block;
              visibility: hidden;
              // padding: 10em;
              // box-sizing: border-box;
              ${checked &&
              css`
                animation: ${TextfadeUp} 1.5s ease-in-out;
              `}
            `}
          >
            <SkillTitle text="백엔드" />
            <BackendSkill />
          </div>
        )}
        {skill === "프론트엔드" && (
          <div
            ref={skillRef}
            css={css`
              display: block;
              visibility: hidden;
              ${checked &&
              css`
                animation: ${TextfadeUp} 1.5s ease-in-out;
              `}
            `}
          >
            {" "}
            <SkillTitle text="프론트엔드" />
            <FrontendSkill />
          </div>
        )}
        {skill === "디자인" && (
          <div
            ref={skillRef}
            css={css`
              display: block;
              visibility: hidden;
              ${checked &&
              css`
                animation: ${TextfadeUp} 1.5s ease-in-out;
              `}
            `}
          >
            {" "}
            <SkillTitle text="디자인" />
            <DesignSkill />
          </div>
        )}
      </div>
    );
  }
);

SkillSection.displayName = "SkillSection";

export const SkillTitle = ({ text }: textProps) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <span
        css={css`
          display: block;
          color: #333d4b;
          font-family: "Pretendard-Bold";
          letter-spacing: -0.03em;
          font-size: 1.43em;
        `}
      >
        {text}
      </span>
      <hr
        css={css`
          background-color: #4f85e8;
          height: 4px;
          border: none;
          border-radius: 50px;
          margin-top: 1em;
        `}
      />
    </div>
  );
};

const DesignSkill = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-top: 1.5em;
        overflow: auto;

        @media (max-width: 481px) {
          font-size: 4px;
        }
        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 6px;
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          font-size: 10px;
        }
      `}
    >
      <SkillImage src={xd} alt={"xd"} />
      <SkillImage src={figma} alt={"figma"} />
    </div>
  );
};

const FrontendSkill = () => {
  return (
    <div
      css={css`
        display: flex;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          animation: 33s linear 0s infinite normal forwards running ${flow};

          @media (max-width: 481px) {
            font-size: 4px;
          }
          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 6px;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 10px;
          }
        `}
      >
        <SkillImage src={html} alt={"html"} />
        <SkillImage src={css2} alt={"css"} />
        <SkillImage src={javascript} alt={"javascript"} />
        <SkillImage src={react} alt={"react"} />
        <SkillImage src={next} alt={"next"} />
        <SkillImage src={typescript} alt={"typescript"} />
        <SkillImage src={redux} alt={"redux"} />
        <SkillImage src={emotion} alt={"emotion"} />
        <SkillImage src={styled} alt={"styled"} />
        <SkillImage src={sass} alt={"sass"} />
        <SkillImage src={github} alt={"github"} />
        <SkillImage src={git} alt={"git"} />
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          animation: 33s linear 0s infinite normal forwards running ${cloneflow};

          @media (max-width: 481px) {
            font-size: 4px;
          }
          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 6px;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 10px;
          }
        `}
      >
        <SkillImage src={html} alt={"html"} />
        <SkillImage src={css2} alt={"css"} />
        <SkillImage src={javascript} alt={"javascript"} />
        <SkillImage src={react} alt={"react"} />
        <SkillImage src={next} alt={"next"} />
        <SkillImage src={typescript} alt={"typescript"} />
        <SkillImage src={redux} alt={"redux"} />
        <SkillImage src={emotion} alt={"emotion"} />
        <SkillImage src={styled} alt={"styled"} />
        <SkillImage src={sass} alt={"sass"} />
        <SkillImage src={github} alt={"github"} />
        <SkillImage src={git} alt={"git"} />
      </div>
    </div>
  );
};

const BackendSkill = () => {
  const backendRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (backendRef.current) {
  //     console.log("!!!!", backendRef);
  //     console.log("??", backendRef.current?.offsetWidth);
  //   }
  // });

  return (
    <article
      css={css`
        width: 100%;
        display: flex;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-top: 1.5em;
          margin-bottom: 1.5em;

          // overflow: auto;
          animation: 33s linear 0s infinite normal forwards running ${flow};

          @media (max-width: 481px) {
            font-size: 4px;
          }
          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 6px;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 10px;
          }
        `}
        ref={backendRef}
      >
        <SkillImage src={java} alt={"aws"} />
        <SkillImage src={spring} alt={"spring"} />
        <SkillImage src={gradle} alt={"gradle"} />
        <SkillImage src={mysql} alt={"mysql"} />
        <SkillImage src={aws} alt={"aws"} />
        <SkillImage src={gcp} alt={"gcp"} />
        <SkillImage src={linux} alt={"linux"} />
        <SkillImage src={github} alt={"github"} />
        <SkillImage src={git} alt={"git"} />
        <SkillImage src={maven} alt={"maven"} />
        <SkillImage src={postman} alt={"postman"} />
        <SkillImage src={inteliJ} alt={"inteliJ"} />
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 1.5em;

          margin-bottom: 1.5em;
          animation: 33s linear 0s infinite normal none running ${cloneflow};
          @media (max-width: 481px) {
            font-size: 4px;
          }
          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 6px;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 10px;
          }
        `}
        ref={backendRef}
      >
        <SkillImage src={java} alt={"aws"} />
        <SkillImage src={spring} alt={"spring"} />
        <SkillImage src={gradle} alt={"gradle"} />
        <SkillImage src={mysql} alt={"mysql"} />
        <SkillImage src={aws} alt={"aws"} />
        <SkillImage src={gcp} alt={"gcp"} />
        <SkillImage src={linux} alt={"linux"} />
        <SkillImage src={github} alt={"github"} />
        <SkillImage src={git} alt={"git"} />
        <SkillImage src={maven} alt={"maven"} />
        <SkillImage src={postman} alt={"postman"} />
        <SkillImage src={inteliJ} alt={"inteliJ"} />
      </div>
    </article>
  );
};

const SkillImage = ({ src, alt }: imgProps) => {
  return (
    <Image
      width={0}
      height={0}
      src={src}
      priority={false}
      placeholder="blur"
      css={css`
        width: 6em;
        height: auto;
        margin-left: 0em;
        margin-right: 1.3em;

        @media (max-width: 481px) {
          font-size: 9px;
        }
        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 13px;
        }
        @media (min-width: 768px) and (max-width: 1100px) {
          font-size: 16px;
        }
      `}
      alt={`${alt}`}
    />
  );
};
