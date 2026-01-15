"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiKubernetes,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiPostgresql,
  SiPowershell,
  SiPytest,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";
import { config, withBasePath } from "@/data/config";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: config.email,
    href: `mailto:${config.email}`,
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: config.phone,
    href: `tel:${config.phone.replace(/\s+/g, "")}`,
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    content: "/jagan-jijo",
    icon: <FaLinkedin height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Backend development, automation, and security tooling",
    icon: <SiPython size={"50px"} color="#3776AB" />,
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    content: "High-performance API development with async support",
    icon: <SiFastapi size={"50px"} color="#05998B" />,
    color: "#05998B",
  },
  {
    name: "React",
    content: "Modern UI development with component-driven workflows",
    icon: <SiReact size={"50px"} color="#61DAFB" />,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    content: "Typed JavaScript for reliable front-end systems",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "PostgreSQL",
    content: "Relational data modeling and query optimization",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "Document storage for flexible data pipelines",
    icon: <SiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Docker",
    content: "Containerization for consistent deployments",
    icon: <SiDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Azure",
    content: "Cloud services for monitoring and deployment",
    icon: <SiMicrosoftazure size={"50px"} color="#0078D4" />,
    color: "#0078D4",
  },
  {
    name: "Terraform",
    content: "Infrastructure as code and reproducible stacks",
    icon: <SiTerraform size={"50px"} color="#844FBA" />,
    color: "#844FBA",
  },
  {
    name: "Kubernetes",
    content: "Container orchestration and scaling",
    icon: <SiKubernetes size={"50px"} color="#326CE5" />,
    color: "#326CE5",
  },
  {
    name: "Git",
    content: "Version control and collaborative workflows",
    icon: <SiGit size={"50px"} color="#F05032" />,
    color: "#F05032",
  },
  {
    name: "PowerShell",
    content: "Automation and system scripting",
    icon: <SiPowershell size={"50px"} color="#5391FE" />,
    color: "#5391FE",
  },
  {
    name: "PyTest",
    content: "Unit and integration testing for Python",
    icon: <SiPytest size={"50px"} color="#0A9EDC" />,
    color: "#0A9EDC",
  },
  {
    name: "VS Code",
    content: "Daily development environment",
    icon: <SiVisualstudiocode size={"50px"} color="#007ACC" />,
    color: "#007ACC",
  },
  {
    name: "Linux",
    content: "Development in Linux environments",
    icon: <SiLinux size={"50px"} color="#FCC624" />,
    color: "#FCC624",
  },
  {
    name: "Terminal",
    content: "Command-line workflows and automation",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src={withBasePath("/assets/me.jpg")}
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">{config.author}</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Software Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              I&apos;m Jagan, a software developer and cybersecurity professional
              with a focus on Python backend engineering, FastAPI, and secure
              system design. I build scalable APIs, alert-handling workflows,
              and data pipelines that integrate with SIEM platforms for real-
              time monitoring.
            </p>
            <p className="mb-10">
              I&apos;m expanding into full-stack development with React,
              TypeScript, and PostgreSQL, while upskilling in Azure, Terraform,
              and Kubernetes. I hold Microsoft Certified: Security Operations
              Analyst Associate and CCNA credentials, and I&apos;m based in
              Birmingham with flexibility for hybrid or remote roles across
              Birmingham and London.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
