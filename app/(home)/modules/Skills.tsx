import React from "react";
import Image from "next/image";
import Section from "../components/Section";
import Container from "../components/Container";

const Skills = () => {
  return (
    <Section>
      <Container className="lg:max-w-6xl">
        <h2 className="text-green-500 text-center py-8 md:py-24">Skills</h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 items-center gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-4">
                <Image
                  src={skill.imageSrc}
                  alt={skill.name}
                  width={84}
                  height={84}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
      </Container>
    </Section>
  );
};

const skills = [
  {
    imageSrc: "/skills/js.png",
    name: "Java Script",
  },
  {
    imageSrc: "/skills/chatgpt.png",
    name: "chatgpt",
  },
  {
    imageSrc: "/skills/copilot.png",
    name: "copilot",
  },
  {
    imageSrc: "/skills/next.png",
    name: "next",
  },
  {
    imageSrc: "/skills/react.png",
    name: "react",
  },
  {
    imageSrc: "/skills/ts.png",
    name: "Type Script",
  },
];

export default Skills;
