import { SideHeader } from "@/src/components/common/component/component";
import Main from "@/src/components/main/Main";
import { ProcedureContent } from "@/src/components/procedure/component/component";
import Head from "next/head";
import React from "react";

export default function procedure() {
  return (
    <>
      <Head>
        <title> 멋쟁이사자처럼 합류 여정</title>
      </Head>
      <ProcedureContent />
    </>
  );
}
