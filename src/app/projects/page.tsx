"use client";
import React from "react";

const PROJECTS = [
  {
    id: 1,
    name: "Software Engineer Wrap 2025",
    description:
      "A Spotify Wrapped-style “year in code” card generator. Runs entirely in-browser with live preview and export.",
    link: "https://jagan-jijo.github.io/softdev-wrapped/",
  },
  {
    id: 2,
    name: "HTML to Atlassian Document Format Converter",
    description:
      "Regex-driven Python module that converts HTML into ADF for JiraPSA workflows.",
    link: "https://www.linkedin.com/in/jagan-jijo/",
  },
  {
    id: 3,
    name: "Post-Quantum Cryptography Research",
    description:
      "Focused on lattice-based cryptography and NIST standards for PQC readiness.",
    link: "https://www.linkedin.com/in/jagan-jijo/",
  },
  {
    id: 4,
    name: "Smart Home Automation Platform",
    description:
      "IoT + ML system using Raspberry Pi to automate energy and security workflows.",
    link: "https://www.linkedin.com/in/jagan-jijo/",
  },
  {
    id: 5,
    name: "Borderless Cybercrime Investigation",
    description:
      "Digital forensics study covering storage media and email investigations.",
    link: "https://www.linkedin.com/in/jagan-jijo/",
  },
  {
    id: 6,
    name: "Securing IoT Networks with Blockchain",
    description:
      "Decentralized approach for IoT data integrity and confidentiality.",
    link: "https://www.linkedin.com/in/jagan-jijo/",
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[260px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-zinc-600 px-3 py-1 text-xs">
                  Software Developer
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
