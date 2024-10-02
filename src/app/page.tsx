import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";

export default function Page() {
  return (
    <main>
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
    </main>
  );
}