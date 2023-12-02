/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function Input() {
  return (
    <div
      css={css`
        width: 15em;
        height: 1em;
        border: solid;
        padding: 1em;
        border-radius: 0.5em;
        fony-family: "Pretendard-Variable";
      `}
    >
      안녕하세요
    </div>
  );
}
