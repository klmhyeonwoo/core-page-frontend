/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Calendar, List, Title } from "./components";

export default function Feed() {
  const dateObj = new Date();
  const month = dateObj.getMonth() + 1;
  let date: string | number = dateObj.getDate();
  if (date < 10) {
    date = "0" + String(date);
  }

  return (
    <>
      <section
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 10rem;
          padding-bottom: 10rem;

          @media (max-width: 1100px) {
            padding: 1rem;
            box-sizing: border-box;
          }
        `}
      >
        <article
          css={css`
            width: 62.5em;

            @media (max-width: 1100px) {
              margin-top: 5rem;
            }
          `}
        >
          <Calendar />
          <List />
        </article>
      </section>
    </>
  );
}
