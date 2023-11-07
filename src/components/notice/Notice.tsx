/** @jsxImportSource @emotion/react */
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";
import Input, { Button, SubTitle, Title } from "./components/component";
import notice from "../../../images/notice/notice.gif";
import Image from "next/image";
import { useMutation } from "react-query";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState } from "@/src/features/state";

export default function Notice() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkBtnState, setBtnState] = useState(false);
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const submitEmail = useMutation({
    mutationFn: () => {
      return axios.post("/user-service/api/v1/notification", {
        nickname: name,
        email: email,
      });
    },
    onSuccess: (res) => {
      setModal({
        title: "성공적으로 등록했어요",
        type: "notice",
        status: true,
        message: "모집 날이 다가오면 이메일로 발송을 도와드릴게요!",
      });
    },
    onError: (res) => {
      if (res?.response.status === 409) {
        setModal({
          title: "이미 신청된 정보로 조회되고 있어요",
          type: "fail",
          status: true,
          message: "등록된 정보로 모집 기간에 알림을 드릴게요!",
        });
      } else {
        setModal({
          title: "지금 현재 등록을 받고 있지 않아요",
          type: "fail",
          status: true,
          message: "조만간 운영진과 함께 찾아뵐 수 있도록 할게요!",
        });
      }
    },
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event?.target.name === "이름") {
      if (event.target.value.length >= 1) {
        setCheckName(true);
      } else {
        setCheckName(false);
      }
      setName(event.target.value);
    }

    if (event?.target.name === "이메일") {
      if (
        event.target.value.length >= 1 &&
        EMAIL_REGEX.test(event.target.value)
      ) {
        setCheckEmail(true);
      } else {
        setCheckEmail(false);
      }
      setEmail(event.target.value);
    }
  }

  function handleSubmit(event: MouseEventHandler<HTMLButtonElement>) {
    submitEmail.mutate();
    setName("");
    setEmail("");
    setCheckEmail(false);
    setCheckName(false);
  }

  const setModal = useSetRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  useEffect(() => {
    if (modal.status) {
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.pointerEvents = "";
    }
  }, [modal.status]);

  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 10em;
        padding-bottom: 10em;
      `}
    >
      <article
        css={css`
          width: 62.5em;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          row-gap: 1.5rem;

          @media (max-width: 1100px) {
            padding: 3em;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 0.7rem;
          `}
        >
          <Title />
          <SubTitle />
        </div>
        <Image
          src={notice}
          width={0}
          height={0}
          css={css`
            width: 9rem;
            height: 9rem;
          `}
          priority
          alt="궁금해하는 이모지"
        />
        <Input
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={handleChange}
          name="이름"
        />
        <Input
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleChange}
          name="이메일"
        />
        <Button
          state={checkName && checkEmail ? true : false}
          onClick={handleSubmit}
          text={submitEmail.isLoading ? "데이터를 전송 중이에요.." : "알림받기"}
        />
      </article>
    </section>
  );
}
