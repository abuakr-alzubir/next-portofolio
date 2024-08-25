import React from "react";

import Image from "next/image";
import Section from "../components/Section";
import Container from "../components/Container";
import SocialMediaLinks from "../components/SocialMediaLinks";

const AboutMe = () => {
  return (
    <Section>
      <Container className="bg-neutral-950 text-white">
        <h2 className="py-8 text-green-500 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center max-w-6xl">
          <div className="relative">
            <div className="absolute top-4 left-4 z-0 hidden lg:block w-full h-full rounded-lg bg-green-500"></div>
            <Image
              src="/about.jpg"
              alt="about Me"
              width={0}
              height={0}
              layout="responsive"
              priority
              className="border-8 border-white rounded-lg relative z-10"
            />
          </div>

          <div className="pb-24">
            <h4 className="mb-4">Get some insights into my life</h4>
                <p>
                <b>Programming is a big part of my life for past 4+ years.</b> I
                strongly lean into Frontend engineering, but backend is not new to
                me.
                <br />
                <br />
                While living abroad I learned norwegian language on my own.
                <br />
                <br />
                This helped me realize that I can catch up with new things pretty
                fast.
                <br />
                <br />
                As a result, the next thing I learned was
                <b>Frontend engineering and React</b>.
                <br />
                <br />
                In the picture you can see 201cm of me and
                <b>love of my life</b>.
                <br />
                <br />
                <b>I enjoy crafting my YouTube community</b>, running, playing
                paddel, snowboarding or waking, and just enjoying time together
                with my love.
                </p>

                <div className="flex items-center gap-x-4 py-8">
                    <SocialMediaLinks src="linkedin" href="#" hasBackground/>
                    <SocialMediaLinks src="youtube" href="#" hasBackground/>
                    <SocialMediaLinks src="github" href="#" hasBackground/>
                </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutMe;
