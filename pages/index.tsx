import Branding from "./components/branding/Branding";
import Introduce from "./components/introduce/Introduce";
import Main from "./components/main/Main";
import Skill from "./components/skill/Skill";

export default function Home() {
  return (
    <>
      <Main />
      <Introduce />
      <Branding />
      <Skill />
    </>
  );
}
