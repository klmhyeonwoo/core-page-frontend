/** @jsxImportSource @emotion/react */
import { catergoryProps, imgProps, textProps } from "@/@types/type";
import { css, keyframes } from "@emotion/react";
import { brandImgProps } from "@/@types/type";
import Image from "next/image";
import React, { forwardRef, useEffect, useRef } from "react";
import { fadeUp } from "@/styles/effect";

export const BrandingImage = forwardRef(
  ({ src, alt, scrollState }: brandImgProps, ref: any) => {
    const imageRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
      if (scrollState && imageRef.current) {
        imageRef.current.style.display = "flex";
      }
    }, [scrollState]);
    return (
      <div
        ref={ref}
        css={css`
          ${alt === "블록" &&
          css`
            margin-top: 1em;
            margin-right: 6em;
          `}
          ${alt === "책" &&
          css`
            margin-top: 2.5em;
            margin-left: auto;
          `}
          ${alt === "지구" &&
          css`
            margin-top: 2em;
            margin-left: auto;
          `}

          @media (max-width: 1100px) {
            position: absolute;
            z-index: 0;
            display: flex;
            display: none;

            width: 100%;
            margin: 0;
            justify-content: right;
            align-items: center;
          }
        `}
      >
        <Image
          src={src}
          css={css`
            display: none;
            width: auto;
            height: 26em;

            justify-content: center;
            align-items: center;
            ${alt === "블록" &&
            css`
              height: 23em;
            `}
            ${alt === "책" &&
            css`
              height: 24em;
            `}
            animation: ${fadeUp} 1.4s ease-in-out;
          `}
          alt={alt}
          ref={imageRef}
        />
      </div>
    );
  }
);

BrandingImage.displayName = "BrandingImage";
