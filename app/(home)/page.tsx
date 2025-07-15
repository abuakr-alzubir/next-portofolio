"server side"
import AboutMe from "./modules/AboutMe";
import { Experienses } from "./modules/Experienses";
import Hero from "./modules/Hero";

import Skills from "./modules/Skills";
import { Work } from "./modules/Work";
import { Contact } from "./modules/Contact";

export default function Home() {
  const maintinance= false
  return (
    <main>
      {maintinance ? (
        <>
          <Hero />
          <AboutMe />
          <Skills />
          <Experienses />
          <Work />
          <Contact />
        </>
      ) : (
        <h1>under maintinance at this time</h1>
      )}
    </main>
  );
}
