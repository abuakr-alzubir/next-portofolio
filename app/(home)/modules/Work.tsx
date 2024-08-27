import React from "react";
import Image from "next/image";

import Section from "../components/Section";
import Container from "../components/Container";

export const Work = () => {
  return (
    <Section>
      <Container>
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-green-500 mb-4 md:mb-8">Work</h2>
          <p>My recent work I am most proud of</p>
        </div>
        {work.map((workItem, i) =>{
            const isSecondItem = i === 1;
            return(
                <div key={workItem.title} className="grid grid-cols-1 items-center shadow-lg bg-neutral-50 md:grid-cols-2 p4 gap-4 md:gap-8">
            <div className={`${isSecondItem && "md:order-2"}`}>
              <Image
                src={workItem.image}
                alt="work item"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounde"
              />
            </div>

            <div className="mb-4 md:mb-8">
                <h4>{workItem.title}</h4>
                <p>{workItem.description}</p>
            </div>
          </div>
            )
        })}
      </Container>
    </Section>
  );
};

const work = [
  {
    image: "/stachy.png",
    title: "Stachy Codes",
    description: (
      <>
        Web Development Agency that crafts performant and unique websites.
        <br />
        <br />
        Using modern technologies and best practices to deliver the best
        possible product.
      </>
    ),
    techUsed: [
      "TypeScript",
      "React",
      "NextJS",
      "i18n",
      "TailwindCSS",
      "Resend",
      "Analytics",
    ],
    link: "https://stachycodes.com",
  },

  {
    image: "/colonbroom.png",
    title: "Colonbroom",
    description: (
      <>
        An international gut health product sales funnel that is built to
        convert.
        <br />
        <br />
        From vanilla JavaScript to modern TypeScript and React, and to GatsbyJS,
        and finally to NextJS.
      </>
    ),
    techUsed: [
      "TypeScript",
      "React",
      "NextJS",
      "i18n",
      "styled-components",
      "Internal API",
      "Jest",
      "Analytics",
      "A/B Testing",
    ],
    link: "https://colonbroom.com",
  },
];
