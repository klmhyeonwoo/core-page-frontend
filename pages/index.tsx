import Ideal from "@/src/components/ideal/Ideal";
import Branding from "../src/components/branding/Branding";
import Introduce from "../src/components/introduce/Introduce";
import Main from "../src/components/main/Main";
import Skill from "../src/components/skill/Skill";

export default function Home() {
  return (
    <>
      <Main />
      <Introduce />
      <Branding />
      <Skill />
      <Ideal />
    </>
  );
}
