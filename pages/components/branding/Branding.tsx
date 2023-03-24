/** @jsxImportSource @emotion/react */
import { imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import React from "react";
import {
  Description,
  TitleOfBlack,
  TitleOfBlue,
} from "../common/component/component";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import book from "../../../images/book.png";
import { BrandingImage } from "./component/component";
import Join from "./component/Join";
import Think from "./component/Think";
import Network from "./component/Network";

export default function Branding() {
  const [blueTitleRef, blueTitleState] = useInView();
  const [blackTitleRef, blackTitleState] = useInView();
  const [describeRef, describeState] = useInView();
  const [brandingImageRef, brandingImageState] = useInView();

  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 10em;
        padding-bottom: 10em;
        background-color: #f9fafb;
        row-gap: 7em;
      `}
    >
      <Join />
      <Think />
      <Network />
    </section>
  );
}
