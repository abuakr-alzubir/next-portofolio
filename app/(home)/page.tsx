import AboutMe from "./modules/AboutMe";
import {Experienses} from "./modules/Experienses";
import Hero from "./modules/Hero";
import Skills from "./modules/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experienses />
    </main>
  );
}
