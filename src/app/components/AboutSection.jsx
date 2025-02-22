"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      
      <ul className="list-disc pl-2">
        <li>Angular</li>
        <li>SpringBoot</li>
        <li>React</li>
        <li>NodeJs</li>
        <li>React</li>
        <li>Symfony</li>
        <li>MySql</li>
        <li>JavaFX</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>php</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Currently at the  4th class at Esprit,Tunisia</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an engineering student specializing in financial computing, with a passion for developing interactive and responsive web and desktop applications. I have experience working with technologies such as JavaScript, HTML, CSS, PHP, Symfony, JavaFX, SpringBoot, Angular, and Git. I also have a strong background in working with ORM  tools. Currently, I am focused on developing financial technology solutions, including budgeting tools, virtual account management, and integrated payment and investment systems. My recent projects, such as Ibudget, aim to democratize access to financial services in Tunisia. I am constantly seeking to expand my skills in both software development and financial engineering. I am a team player, eager to collaborate with others to create innovative and impactful applications in the financial sector.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
