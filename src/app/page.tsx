import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionSkills from "./components/SectionSkills";
import SectionContact from "./components/SectionContact";

export default function Page() {
  return (
    <main>
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionSkills />
      <SectionContact />
    </main>
  );
}