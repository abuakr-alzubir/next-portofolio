import AboutMe from "./modules/AboutMe";
import {Experienses} from "./modules/Experienses";
import Hero from "./modules/Hero";
import Skills from "./modules/Skills";
import { Work } from "./modules/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experienses />
      <Work/>
    </main>
  );
}
