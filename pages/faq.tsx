import { SideHeader } from "@/src/components/common/component/component";
import { FAQContent } from "@/src/components/faq/component/component";
import Head from "next/head";
import React from "react";

export default function faq() {
  return (
    <>
      <Head>
        <title> 멋쟁이사자처럼 FAQ</title>
      </Head>
      <FAQContent />
    </>
  );
}
