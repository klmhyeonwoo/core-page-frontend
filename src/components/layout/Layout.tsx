import { AppLayoutProps } from "@/@types/type";
import React from "react";
import { Header } from "../common/component/component";

export default function Layout({ children }: AppLayoutProps) {
  return {
    props: {
      layout: "test",
    },
    component: {
      layout: (
        <>
          <Header />
          <p> test</p>
        </>
      ),
    },
  };
}
