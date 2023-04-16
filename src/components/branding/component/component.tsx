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
            margin-top: 5em;
            margin-right: 4em;
            @media all and (min-width: 0px) and (max-width: 1099px) {
              margin: auto;
              margin-bottom: 5em;
              margin-top: 5em;
            }
          `}
          ${alt === "책" &&
          css`
            margin-top: 6em;
            margin-left: auto;
            margin-right: -7em;
            @media all and (min-width: 0px) and (max-width: 1099px) {
              margin: auto;
              margin-top: 5em;
              margin-right: 5em;
            }
            @media all and (min-width: 0px) and (max-width: 600px) {
              margin: auto;
              margin-top: 5em;
              margin-left: 7em;
            }
          `}
          ${alt === "지구" &&
          css`
            margin-top: 6.5em;
            margin-left: auto;
            @media all and (min-width: 0px) and (max-width: 1099px) {
              margin: auto;
              margin-top: 5em;
            }
          `}
        `}
      >
        <Image
          src={src}
          css={css`
            display: none;
            width: auto;
            height: 14.5em;
            ${alt === "블록" &&
            css`
              height: 13.5em;
            `}
            ${alt === "책" &&
            css`
              height: 15.5em;
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
