import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { cvProfile } from "@/data/cv";
import { withBasePath } from "@/data/config";
import { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiFastapi,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  typescript: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  azure: {
    title: "Azure",
    bg: "black",
    fg: "white",
    icon: <SiMicrosoftazure />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live?: string;
  linkLabel?: string;
};

export const projectSectionNote = {
  title: cvProfile.article.title,
  href: cvProfile.article.href,
  copy:
    "Some current client and home-lab work is intentionally kept off public GitHub. I use Gitea for active private repos and publish public write-ups when it helps provide context.",
};

const projects: Project[] = [
  {
    id: "software-engineer-wrap",
    category: "Frontend Product",
    title: "Software Engineer Wrap 2025",
    description:
      "A browser-only year-in-code card generator with live preview, local storage, and PNG export.",
    src: withBasePath("/assets/projects-screenshots/portfolio/landing.png"),
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [],
    },
    live: "https://jagan-jijo.github.io/softdev-wrapped/",
    linkLabel: "Open live demo",
    get content() {
      return (
        <div>
          <TypographyP>
            A Spotify Wrapped-style “year in code” card generator for developers.
            It runs 100% in your browser—no backend, no uploads, just your data
            on your device.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What it does</TypographyH3>
          <TypographyP>
            Build a tall 9:16 story card with your yearly stats, preview changes
            live while you edit, and export a crisp PNG for sharing.
          </TypographyP>
          <TypographyP>
            Themes include 2 dark + 2 light options, plus custom badges, apps,
            and language highlights. Local storage keeps everything saved
            automatically.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Notes</TypographyH3>
          <TypographyP>
            Everything is client-side, nothing is uploaded, and it works offline
            once loaded.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "adf-converter",
    category: "Developer Tooling",
    title: "HTML to Atlassian Document Format Converter",
    description:
      "A Python utility that converts HTML into Atlassian Document Format for JiraPSA incident workflows.",
    src: withBasePath("/assets/projects-screenshots/portfolio/project.png"),
    screenshots: ["project.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.fastapi],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Built a regex-driven Python module that converts HTML into Atlassian
            Document Format (ADF) for JiraPSA workflows.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <TypographyP>
            Focused on reliable parsing, clean formatting output, and seamless
            integration with PSA tooling for incident ticketing.
          </TypographyP>
          <TypographyP>
            This is part of the practical tooling work I use to reduce manual
            formatting and speed up backend operational flows.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "agentic-ai-platform",
    category: "Private Home Lab",
    title: "Agentic AI Platform at Home",
    description:
      "A local-first AI workspace for agentic workflows, document processing, code analysis, and multimodal generation across self-hosted tools.",
    src: withBasePath("/assets/projects-screenshots/portfolio/skills.png"),
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP>
            Built a private home-lab AI platform for experimenting with
            agentic workflows, local model orchestration, and retrieval over
            personal project data.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What it includes</TypographyH3>
          <TypographyP>
            The stack centers around Python services and self-hosted tooling
            such as Ollama, Open WebUI, Dify, LangChain, LangGraph, LiteLLM,
            and vector-backed RAG experiments.
          </TypographyP>
          <TypographyP>
            Beyond text workflows, it also covers Docker container management,
            intelligent document processing, code analysis, image generation,
            and audio-generation integrations.
          </TypographyP>
          <TypographyP>
            This project is intentionally private and tracked in Gitea rather
            than mirrored to public GitHub.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "notes-app",
    category: "Full-Stack Product",
    title: "Notes Application",
    description:
      "A full-stack notes app with guest mode, JWT authentication, and a clean single-page workflow.",
    src: withBasePath("/assets/projects-screenshots/portfolio/projects.png"),
    screenshots: ["projects.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.java],
    },
    github: "https://github.com/jagan-jijo/notes-app",
    live: "https://github.com/jagan-jijo/notes-app",
    linkLabel: "View GitHub repo",
    get content() {
      return (
        <div>
          <TypographyP>
            Built a full-stack notes application with a React 19 + Vite
            frontend and a Spring Boot backend backed by JPA.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <TypographyP>
            The app supports JWT authentication, user-specific notes storage,
            guest-mode notes in local storage, and a clean CRUD workflow.
          </TypographyP>
          <TypographyP>
            It uses an H2 relational database and is designed to be easy to run
            locally with Docker or a single startup script, which keeps it
            practical for demos and quick testing.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "web-pentest",
    category: "Cyber Security",
    title: "Web Penetration Testing Toolkit",
    description:
      "A FastAPI-based browser toolkit for reconnaissance, vulnerability discovery, and live-streamed security testing.",
    src: withBasePath("/assets/projects-screenshots/portfolio/navbar.png"),
    screenshots: ["navbar.png"],
    skills: {
      frontend: [PROJECT_SKILLS.javascript],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    github: "https://github.com/jagan-jijo/web-pentest",
    live: "https://github.com/jagan-jijo/web-pentest",
    linkLabel: "View GitHub repo",
    get content() {
      return (
        <div>
          <TypographyP>
            Built a browser-based security testing toolkit that brings together
            reconnaissance, WHOIS, DNS intelligence, file analysis, and web
            server vulnerability checks in one interface.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <TypographyP>
            FastAPI handles the backend services while the UI uses lightweight
            server-rendered pages and live Server-Sent Events to stream results
            without page reloads.
          </TypographyP>
          <TypographyP>
            The project is positioned as an educational and authorized-testing
            toolkit, with a strong focus on visibility into what each check is
            doing.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "code-graph-builder",
    category: "AI Developer Tooling",
    title: "Local-First AI Code Analysis Platform",
    description:
      "A local-first code analysis platform for Python and PHP repositories using FastAPI, React, embeddings, and vector search.",
    src: withBasePath("/assets/projects-screenshots/portfolio/landing.png"),
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    github: "https://github.com/jagan-jijo/code-graph-python-php",
    live: "https://github.com/jagan-jijo/code-graph-python-php",
    linkLabel: "View GitHub repo",
    get content() {
      return (
        <div>
          <TypographyP>
            Built a local-first code analysis platform with a FastAPI backend
            and React frontend that indexes repositories into a navigable code
            graph.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <TypographyP>
            The app integrates locally hosted language models through Ollama and
            Open WebUI, along with embedding models and vector search, to make
            Python and PHP repositories easier to analyse.
          </TypographyP>
          <TypographyP>
            It is designed around local execution and privacy, while still
            supporting model-assisted graph refinement on a developer machine.
          </TypographyP>
        </div>
      );
    },
  },
];

export default projects;
