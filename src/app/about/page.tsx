"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMicrosoftazure,
  SiMongodb,
  SiPowershell,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { config, withBasePath } from "@/data/config";
import { cvProfile } from "@/data/cv";

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
    icon: <SiPython size={"50px"} color="#3776AB" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={"50px"} color="#05998B" />,
  },
  {
    name: "React",
    icon: <SiReact size={"50px"} color="#61DAFB" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={"50px"} color="#F7DF1E" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={"50px"} color="#4db33d" />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={"50px"} color="#2496ed" />,
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure size={"50px"} color="#0078D4" />,
  },
  {
    name: "Terraform",
    icon: <SiTerraform size={"50px"} color="#844FBA" />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes size={"50px"} color="#326CE5" />,
  },
  {
    name: "Git",
    icon: <SiGit size={"50px"} color="#F05032" />,
  },
  {
    name: "PowerShell",
    icon: <SiPowershell size={"50px"} color="#5391FE" />,
  },
  {
    name: "Linux",
    icon: <SiLinux size={"50px"} color="#FCC624" />,
  },
  {
    name: "Terminal",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 pb-20 pt-20 text-zinc-300 md:px-[50px] xl:px-[160px]">
      <div className="flex flex-col gap-5 lg:flex-row">
        <aside className="w-full md:basis-1/4">
          <div
            className="rounded-2xl border-[.5px] border-zinc-600 p-4 md:p-8 lg:p-10"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="flex flex-row items-center lg:flex-col">
              <div className="flex items-center justify-center rounded-xl bg-zinc-800 lg:mb-5 lg:w-full lg:aspect-square">
                <img
                  className="aspect-square w-[100px] rounded-full bg-zinc-800 p-4 md:w-[150px] lg:w-[200px] lg:p-10"
                  alt="me"
                  src={withBasePath("/assets/me.jpg")}
                />
              </div>
              <div className="ml-10 flex flex-col gap-3 md:ml-20 lg:ml-0 lg:items-center">
                <p className="text-center text-xl">{config.author}</p>
                <div className="w-fit rounded-full bg-zinc-700 px-3 py-1 text-xs">
                  Python Software Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex h-12 w-full items-center gap-3 rounded-md border-[.5px] border-zinc-700 bg-zinc-800 px-3 hover:border-zinc-600"
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

        <main className="min-w-0 basis-3/4">
          <div
            className="rounded-md border-[.5px] border-zinc-600 p-6 md:p-10"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <section>
              <h1 className="mb-3 text-3xl md:text-4xl">About me</h1>
              <p className="mb-5 text-sm uppercase tracking-[0.24em] text-zinc-500">
                {cvProfile.headline}
              </p>
              <p className="mb-6 leading-8 text-zinc-300">
                {cvProfile.summary}
              </p>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-4 text-sm leading-7 text-zinc-400">
                <span className="font-semibold text-zinc-200">
                  Work authorization:
                </span>{" "}
                {cvProfile.workAuthorization}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-5 text-2xl">What I build</h2>
              <div className="flex flex-wrap gap-2">
                {cvProfile.primarySpecializations.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-5">
                <h2 className="mb-4 text-2xl">How I work</h2>
                <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                  {cvProfile.professionalStrengths.map((item) => (
                    <li key={item} className="border-b border-zinc-800 pb-3 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-5">
                <h2 className="mb-4 text-2xl">Current focus</h2>
                <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                  {cvProfile.currentFocus.map((item) => (
                    <li key={item} className="border-b border-zinc-800 pb-3 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-5 text-2xl">Certifications</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cvProfile.certifications.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-4 text-sm leading-7 text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-5 text-2xl">Education</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cvProfile.education.map((item) => (
                  <div
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-5"
                  >
                    <div className="text-lg text-zinc-200">{item.degree}</div>
                    <div className="mt-2 text-sm text-zinc-400">
                      {item.institution} · {item.country}
                    </div>
                    <div className="mt-2 text-sm text-zinc-500">
                      {item.classification} · {item.graduationYear}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-5 text-2xl">Selected skill areas</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cvProfile.skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-5"
                  >
                    <h3 className="mb-4 text-lg text-zinc-200">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <div
                          key={`${group.title}-${item}`}
                          className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-400"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-5 text-2xl">Stuff I use</h2>
              {!toolsLoaded ? (
                <p className="h-[100px]" />
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
                    gap: "1rem",
                    breakpoints: {
                      640: {
                        perPage: 3,
                      },
                    },
                  }}
                  aria-label="Technologies I use"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="w-fit rounded-md border-[.5px] border-zinc-600 p-2">
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
