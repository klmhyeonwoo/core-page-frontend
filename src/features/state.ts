import { atom } from "recoil";

export interface IcontentTypes {
  name: string;
  status: boolean;
  message: string;
}

// export const contentState = atom<IcontentTypes>({
//   key: "content",
//   default: {
//     name: "sample",
//     status: true,
//     message: "테스트 메세지",
//   },
// });

export const modalState = atom({
  key: "modal",
  default: {
    title: "모달 제목",
    type: "타입",
    status: false,
    message: "모달 메세지",
  },
});
