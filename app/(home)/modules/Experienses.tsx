import React from "react";
import Image from "next/image";
import Section from "../components/Section";
import Container from "../components/Container";

export const Experienses = () => {
  return (
    <Section className="bg-neutral-950">
      <Container className="lg:max-w-6xl">
        <div className="text-white text-center mb-4 md:mb-8">
          <h2 className="text-green-500 mb-4">Experienses</h2>
          <p>Here is a quick summary of my most recent experiences</p>
        </div>
        {experiences.map((exp) => (
          <div key={exp.title} className="p-4 border-8 border-green-500 rounded grid grid-cols-1 md:grid-cols-[30%_50%_20%] bg-white gap-4 mb-8 md:mb-16 md:gap-8 md:items-center">
            <div>
                <Image
                src={exp.image}
                alt="experienses"
                width={0}
                height={0}
                layout="responsive"
                className="w-full max-h-32"
                />
            </div>

            <div>
                <h4>{exp.title}</h4>
                <ol className="md:list-disc md:p-8">
                    {exp.bulletList.map(bullet => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ol>
            </div>

            <div className="text-neutral-500">
                {exp.date}
            </div>

          </div>
        ))}
      </Container>
    </Section>
  );
};

const experiences = [
  {
    image: "/yt.png",
    title: "Youtube Creator",
    bulletList: [
      "Educating people about programming through creating production level projects.",
      "Creating shorts about programming news, tips and tricks.",
      "Making courses about modern tech.",
    ],
    date: "2024 - present",
  },

  {
    image: "/kilo.jpeg",
    title: "Frontend Engineer",
    bulletList: [
      "Building new products and maintaining them.",
      "Creating internal tools.",
      "Crafting custom solutions.",
      "Taking care of A/B testing and analytics implementation.",
    ],
    date: "2021 - 2024",
  },
];
