/** @jsxImportSource @emotion/react */
import { feedProps, textProps } from "@/@types/type";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import axios from "axios";
import loading from "../../../../images/feed/loading.gif";
import { useQuery } from "react-query";

export default function components() {
  return <div>components</div>;
}

export function Title({ text }: textProps) {
  return (
    <div
      css={css`
        font-family: "Pretendard-Bold";
      `}
    >
      {text}
    </div>
  );
}

export function Calendar() {
  const dateObj = new Date();
  const month = dateObj.getMonth() + 1;
  let date: string | number = dateObj.getDate();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1em;
        margin-bottom: 4rem;
      `}
    >
      <Image
        src={`https://www.kakaocorp.com/page/calendar/light/ico_date${date}.gif`}
        priority
        placeholder="blur"
        blurDataURL="data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
        alt="캘린더"
        css={css`
          width: 5.3rem;
          height: auto;
        `}
        width={0}
        height={0}
        unoptimized={true}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 0.55em;

          span {
            font-family: "Pretendard";
          }
        `}
      >
        <span
          css={css`
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          {month}월 {(date as number) < 10 ? "0" + String(date) : date}일 피드
          소식
        </span>
        <span
          css={css`
            font-size: 1.1rem;
          `}
        >
          멋쟁이사자처럼 구성원들의 피드 소식을 전해드려요
        </span>
      </div>
    </div>
  );
}

export function List() {
  const [list, setList] = useState<feedProps[]>([]);

  const CACHE_TIME = 1000 * 60 * 60; // 60m
  const STALE_TIME = 1000 * 60 * 60; // 60m

  const { isLoading, error, data } = useQuery({
    queryKey: ["feedData"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/klmhyeonwoo/klmhyeonwoo/main/data/feed.json"
        )
        .then((res) => {
          let feed: feedProps[] = [];

          Object.keys(res.data).forEach((i) => {
            feed.push({
              date: res.data[i].date,
              title: res.data[i].title,
              link: res.data[i].link,
              writer: res.data[i].writer,
            });
          });

          return feed;
        }),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1.3rem;
        line-height: 1.4rem;
        row-gap: 2rem;

        @media (max-width: 1024px) {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
      `}
    >
      {data &&
        data.length >= 1 &&
        data.map((item: feedProps) => {
          return (
            <>
              <Item
                title={item.title}
                link={item.link}
                date={item.date}
                writer={item.writer}
                key={item.link}
              />
            </>
          );
        })}
      {isLoading && (
        <Image
          priority
          placeholder="blur"
          blurDataURL="data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
          src={loading}
          alt="피드 로딩 이미지"
          width={0}
          height={0}
          css={css`
            width: 10rem;
            height: 10rem;
            position: absolute;
            border-radius: 50rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
        />
      )}
    </div>
  );
}

export function Item({ ...props }) {
  return (
    <div
      onClick={() => {
        window.open(props.link);
      }}
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 0.3rem;

        padding: 1.5rem;
        border-radius: 0.7rem;
        box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
        background-color: #fff;
        border: none;
        transition: 0.4s all;
        cursor: pointer;

        span {
          font-family: "Pretendard";
        }

        &:hover {
          transform: translateY(-5%);
          background-color: rgb(0, 83, 255, 0.8);
          color: white;
        }
      `}
    >
      <span
        css={css`
          font-weight: 650;
          width: 100%;
          height: 4rem;
          font-size: 1rem;
          margin-bottom: 1.6rem;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        `}
      >
        {props.title}
      </span>
      <span
        css={css`
          font-size: 0.9rem;
        `}
      >
        {props.writer}
      </span>
      <span
        css={css`
          font-size: 0.9rem;
        `}
      >
        {props.date}
      </span>
    </div>
  );
}
