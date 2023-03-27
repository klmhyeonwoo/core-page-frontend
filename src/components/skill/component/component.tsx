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
import { forwardRef, useEffect, useRef } from "react";
import { TextfadeUp } from "@/styles/effect";

export const SkillSection = forwardRef(
  ({ skill, scrollState }: skillProps, ref: any) => {
    const skillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollState && skillRef.current) {
        skillRef.current.style.display = "block";
        console.log(scrollState);
      }
    }, [scrollState]);

    return (
      <div ref={ref}>
        {skill === "백엔드" && (
          <div
            ref={skillRef}
            css={css`
              display: none;
              animation: ${TextfadeUp} 1.5s ease-in-out;
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
              display: none;
              animation: ${TextfadeUp} 1.5s ease-in-out;
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
              display: none;
              animation: ${TextfadeUp} 1.5s ease-in-out;
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
    <>
      <span
        css={css`
          display: block;
          color: #333d4b;
          font-family: "Pretendard-Bold";
          letter-spacing: -0.03em;
          font-size: 23px;
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
    </>
  );
};

const DesignSkill = () => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 2em;
        margin-top: 1.5em;
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
        column-gap: 2em;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
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
  );
};

const BackendSkill = () => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 2em;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
      `}
    >
      <SkillImage src={aws} alt={"aws"} />
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
  );
};

const SkillImage = ({ src, alt }: imgProps) => {
  return (
    <Image
      src={src}
      css={css`
        width: 3.37em;
        height: auto;
      `}
      alt={`${alt}`}
    />
  );
};
