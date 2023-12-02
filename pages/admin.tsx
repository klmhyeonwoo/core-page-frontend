import Input from "@/src/components/admin/components/Input";
import Section from "@/src/components/admin/components/Section";
import React from "react";

export const getStaticProps = () => {
  return {
    props: {
      layout: "admin",
    },
  };
};

export default function admin() {
  return (
    <Section>
      <Input />
    </Section>
  );
}
