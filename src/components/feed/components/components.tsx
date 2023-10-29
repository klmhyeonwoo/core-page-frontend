/** @jsxImportSource @emotion/react */
import { feedProps, textProps } from "@/@types/type";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import axios from "axios";
import loading from "../../../../images/feed/loading.gif";

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
  if (date < 10) {
    date = "0" + String(date);
  }
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
          {month}월 {date}일 피드 소식
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
  const [data, setData] = useState<feedProps[]>([]);
  useEffect(() => {
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
          });
        });

        if (feed.length >= 1) {
          setData(feed);
        }
      });
  }, []);
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
          grid-template-columns: 1fr 1fr;
        }
      `}
    >
      {data.length >= 1 &&
        data.map((item: feedProps) => {
          return (
            <>
              <Item
                title={item.title}
                link={item.link}
                date={item.date}
                key={item.link}
              />
            </>
          );
        })}
      {data.length == 0 && (
        <Image
          src={loading}
          alt="피드 로딩 이미지"
          width={0}
          height={0}
          css={css`
            width: 4rem;
            height: 4rem;
            position: absolute;
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
          margin-bottom: 0.7rem;

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
        {props.date}
      </span>
    </div>
  );
}
