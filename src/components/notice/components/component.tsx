/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { buttonProps, inputProps } from "@/@types/type";

export function Title() {
  return (
    <div
      css={css`
        font-size: 1.6rem;
        font-weight: 700;
        color: #404040;
        text-align: center;
        width: 100%;
      `}
    >
      멋쟁이사자처럼 다음 기수 모집 알림을 받고싶으신가요?
    </div>
  );
}

export function SubTitle() {
  return (
    <div
      css={css`
        font-size: 0.9rem;
        font-weight: 400;
        color: #404040;
        width: 100%;
        opacity: 70%;
        text-align: center;
      `}
    >
      지원자분의 이름과 이메일을 기재해주시면 모집 시즌에 기재해주신 이메일로
      모집 알림을 드려요
    </div>
  );
}

export default function Input({
  placeholder,
  value,
  onChange,
  name,
}: inputProps) {
  return (
    <input
      placeholder={placeholder}
      alt="사용자 정보 입력란"
      css={css`
        width: 100%;
        max-width: 45rem;
        height: 4rem;
        border-radius: 0.7rem;
        padding-left: 1.4rem;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 400;
        color: #404040;
        border: none;
        box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
        transition: 0.4s all;

        &:hover {
          box-shadow: inset 0 0 0 2px #90c2ff;
        }

        &:focus {
          box-shadow: inset 0 0 0 2px #90c2ff;
          outline: none;
        }

        ::placeholder {
          font-weight: 300;
        }
      `}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export function Button({ onClick, text, state }: buttonProps) {
  return (
    <button
      type="submit"
      css={css`
        width: 100%;
        height: 4rem;
        max-width: 45rem;
        border-radius: 0.7rem;
        padding-left: 1rem;
        font-size: 1.1rem;
        font-weight: 400;
        color: white;
        background-color: #3182f6;
        border: none;
        transition: 0.4s all;
        cursor: ${!state ? `auto` : `pointer`};
        filter: ${!state ? `grayscale(100%)` : `grayscale(0%)`};

        &:hover {
          opacity: ${!state ? `100%` : `80%`};
        }
      `}
      onClick={onClick}
      disabled={!state}
    >
      {text}
    </button>
  );
}
