/** @jsxImportSource @emotion/react */
import { AppLayoutProps } from "@/@types/type";
import { css } from "@emotion/react";
import React from "react";

export default function Section({ children }: AppLayoutProps) {
  return (
    <section
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    >
      {children}
    </section>
  );
}
