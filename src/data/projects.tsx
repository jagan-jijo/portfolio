import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { cvProfile } from "@/data/cv";
import { withBasePath } from "@/data/config";
import { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiAdobepremierepro,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
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
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
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
  premiere: {
    title: "Premiere Pro",
    bg: "black",
    fg: "white",
    icon: <SiAdobepremierepro />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit />,
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
    "Some current client, tool, and home-lab projects are intentionally hosted on my personal Gitea server (www.git.jaganjijo.space). While many repositories remain private, select projects and architecture write-ups are public.",
};

const projects: Project[] = [
  {
    id: "modelscout",
    category: "Local AI & Developer Tools",
    title: "ModelScout: Local AI Model Compatibility Scanner",
    description:
      "Check which local AI models fit your machine before downloading the weights. Memory and speed estimates, with a terminal scanner and local web dashboard.",
    src: withBasePath("/assets/projects-screenshots/portfolio/project.png"),
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.javascript],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi, PROJECT_SKILLS.sqlite],
    },
    github: "https://github.com/jagan-jijo/modelscout",
    live: "https://github.com/jagan-jijo/modelscout",
    linkLabel: "View GitHub repo",
    get content() {
      return (
        <div>
          <TypographyP>
            ModelScout checks your hardware and gives you a shortlist
            before you download the weights. You can scan your own machine or
            supply a different GPU and memory size to see what might fit.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Run it when you need it</TypographyH3>
          <TypographyP>
            The launcher sets up the Python environment and installs missing
            packages. Run it in the terminal, or start the local web dashboard
            to compare recommendations. I&rsquo;m focusing on macOS and Linux
            first; Windows support is still basic.
          </TypographyP>
          <TypographyP>
            Memory estimates account for the weights and context cache.
            Speed ranges come from hardware bandwidth estimates. These help
            narrow down the options, but the real result depends on your
            inference runtime. The bundled benchmark scores are provisional
            and still need checking against their original sources.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "sidestreamer",
    category: "macOS & Creative Workflow",
    title: "Sidestreamer for Adobe Premiere Pro",
    description:
      "A native Adobe Premiere Pro CEP extension + macOS companion daemon for in-editor YouTube/Instagram search, scrub preview, and direct timeline drag-and-drop.",
    src: withBasePath("/assets/projects-screenshots/portfolio/navbar.png"),
    screenshots: ["navbar.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript, PROJECT_SKILLS.premiere],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi, PROJECT_SKILLS.sqlite],
    },
    live: "https://www.jaganjijo.com/sidestreamer/",
    linkLabel: "Visit website / Download",
    get content() {
      return (
        <div>
          <TypographyP>
            Sidestreamer connects video editors directly to streaming media
            sources without ever leaving the Adobe Premiere Pro timeline.
            Because let&rsquo;s be honest: alt-tabbing to shady downloader
            websites, dodging popups, waiting for files in Downloads, and
            manually dragging them into bins is a workflow from 2020.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What It Does</TypographyH3>
          <TypographyP>
            <strong>Integrated YouTube Search & Player:</strong> Search
            YouTube, preview with scrub controls unmuted (no surprise blaring
            volume), and queue downloads up to 4K or lossless audio extraction
            when you just need that one sound effect right now.
          </TypographyP>
          <TypographyP>
            <strong>Embedded Instagram Browsing:</strong> Browse Feed, Explore,
            Saved reels, and direct messages with native login and one-click
            media resolution.
          </TypographyP>
          <TypographyP>
            <strong>Direct Timeline Drag & Drop:</strong> Drag downloaded media
            straight from the panel onto active sequence tracks, with automated
            project bin sorting via ExtendScript JSX.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Architecture & Security</TypographyH3>
          <TypographyP>
            Built as a lean Adobe CEP panel communicating with a high-speed
            Python + FastAPI macOS companion daemon. Core extraction engines are
            Cythonized with Apple Silicon arm64 optimizations. Everything runs
            strictly on authenticated loopback (127.0.0.1) with per-session
            token handshakes and encrypted session storage — your credentials
            and files stay strictly on your machine.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "jagskills",
    category: "AI Engineering & Agentic Tooling",
    title: "Jagskills: AI Coding Skills Framework",
    description:
      "An engineering framework and context management system that cures AI coding agents of vibe-coded slop by enforcing TDD, verification gates, and durable project memory.",
    src: withBasePath("/assets/projects-screenshots/portfolio/skills.png"),
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.git],
    },
    github: "https://github.com/jagan-jijo/jagskills",
    live: "https://github.com/jagan-jijo/jagskills",
    linkLabel: "View GitHub repo",
    get content() {
      return (
        <div>
          <TypographyP>
            AI coding agents are ridiculously fast. But fast code generation
            isn&rsquo;t the same as good software engineering. Without structure,
            agents (Codex, Claude Code, Antigravity, OpenCode, Cursor,
            Copilot — I&rsquo;ve tried them all😂) tend to produce vibe-coded
            slop: hallucinating dependencies, skipping tests, forgetting rules,
            burning tokens rediscovering things they knew five minutes ago, and
            confidently declaring work done without running a single check.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Why Jagskills</TypographyH3>
          <TypographyP>
            Jagskills is my attempt to fix that (didn&rsquo;t spend months
            brainstorming the name, ngl). Instead of re-explaining how you want
            agents to work every single session, Jagskills equips them with
            reusable engineering workflows and memory patterns that live with
            the repository — not whichever AI vendor you&rsquo;re using this
            month.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">The Engineering Flow</TypographyH3>
          <TypographyP>
            • <strong>New Features:</strong> Clarify Intent → Design Spec → TDD
            (Red/Green) → Implementation → Verification → Code Review
            <br />
            • <strong>Bug Fixes:</strong> Root Cause Analysis → Regression Test
            → Fix → Verification → Review
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Memory & 30+ Reusable Skills</TypographyH3>
          <TypographyP>
            Adds structured project memory (.memory/, .context/) so agents retain
            architecture conventions and past decisions instead of rediscovering
            the codebase from scratch. Features 30+ modular skills covering TDD,
            debugging, API design, verification gates, parallel agent teams,
            frontend work, and token reduction.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "docmaker",
    category: "Backend & Document Engineering",
    title: "DocMaker: Structured Document Platform",
    description:
      "A local-first document engine built with Django, Playwright, and SQLite turning structured data and reusable clauses into pixel-perfect PDFs in minutes — ending the pain of Photoshop PSD invoices and designer bottlenecks.",
    src: withBasePath("/assets/projects-screenshots/portfolio/project.png"),
    screenshots: ["project.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.django,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.git,
      ],
    },
    github: "https://git.jaganjijo.space/jagan/docmaker",
    live: "https://git.jaganjijo.space/jagan/docmaker.git",
    linkLabel: "View Git Repo",
    get content() {
      return (
        <div>
          <TypographyP>
            Several friends who run their own businesses came to me complaining
            about a persistent operational pain point: they were drowning in a
            mountain of Photoshop <code>.psd</code> templates and Word documents
            just to draft everyday client invoices, agreements, and proposals.
            Every time a line item, client name, or clause changed, they had to
            either pixel-nudge layers in Photoshop or wait days for a graphic
            designer to do a simple turnaround.
          </TypographyP>
          <TypographyP>
            To make matters even more relatable, during weekends when I switch
            into my photographer &amp; content-creator alter-ego, I kept running
            into the exact same headache — needing to shoot out a clean invoice
            or client agreement in two minutes without opening heavy design
            software.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">The Solution: Minutes Instead of Days</TypographyH3>
          <TypographyP>
            DocMaker solves this once and for all: a clean, local-first platform
            where anyone can generate high-quality, professional PDFs directly
            in their standard web browser. Designs are defined once as
            maintainable, modular templates, cutting document creation time from
            days of designer back-and-forth to literally two minutes.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Core Philosophy: Data as Source of Truth</TypographyH3>
          <TypographyP>
            Instead of fragile visual files or bloated word processors, DocMaker
            separates data from presentation:
          </TypographyP>
          <TypographyP>
            <code className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
              Custom Template + Structured JSON Data + Modular Clauses → HTML Live Preview → Pixel-Perfect PDF / DOCX
            </code>
          </TypographyP>
          <TypographyP>
            Contracts, NDAs, proposals, invoices, and scopes of work stay
            100% inside your organization—no third-party cloud leaks, no
            broken font alignments.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Why Django Was the Backbone</TypographyH3>
          <TypographyP>
            DocMaker is built from the ground up on <strong>Django</strong>, taking full advantage of the framework&rsquo;s robustness, security, and developer ergonomics:
          </TypographyP>
          <TypographyP>
            • <strong>Multi-Tenant Workspace Engine:</strong> Django middleware and route dispatchers provide clean customer isolation (<code>active_customer</code>). Each tenant gets dedicated schema defaults, customized branding (logos, color palettes, tax rates, signatory details), and isolated document archives.
            <br />
            • <strong>High-Performance Template Compilation:</strong> Django&rsquo;s templating engine dynamically merges JSON data, conditional legal clauses, and CSS print media stylesheets to assemble documents before passing them to a headless Playwright Chromium worker for sub-second vector PDF generation.
            <br />
            • <strong>Modular Reusable Library:</strong> Leverages Django&rsquo;s service layer to manage reusable legal clauses and branded boilerplate blocks (stored in structured YAML catalogs), letting users mix and match terms with zero duplication.
            <br />
            • <strong>Immutable Version Audit Trail:</strong> Every document draft and compile cycle creates an immutable version snapshot (<code>v1</code>, <code>v2</code>, &hellip;) with exact PDF, DOCX, JPG preview, and JSON payload retention for compliance.
            <br />
            • <strong>REST API &amp; Agentic Automation:</strong> Django API views with OpenAPI 3.0 schemas and telemetry beacons make DocMaker directly accessible to command-line tools (CLI guide) and autonomous AI coding agents (Hermes).
            <br />
            • <strong>Comprehensive Test Suite:</strong> 78 automated Django unit tests enforcing rate limiting, upload validation, pricing calculations, and document cloning with 100% pass rates.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Public Open-Source Repository</TypographyH3>
          <TypographyP>
            The project repository has been made public on my self-hosted Gitea forge. You can inspect the architecture, Django service layer, and Playwright rendering pipeline directly at{" "}
            <a
              href="https://git.jaganjijo.space/jagan/docmaker.git"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 underline underline-offset-4 hover:text-purple-300 font-medium"
            >
              git.jaganjijo.space/jagan/docmaker.git
            </a>
            .
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "software-engineer-wrap",
    category: "Frontend Product",
    title: "Software Engineer Wrap 2025",
    description:
      "A Spotify Wrapped-style year-in-code card generator with live preview, local storage, and PNG export — 100% browser-only.",
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
            A Spotify Wrapped-style &ldquo;year in code&rdquo; card generator for
            developers. It runs 100% in your browser — zero backend, zero
            tracking, and no servers to crash when everyone shares their stats at
            once.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What it does</TypographyH3>
          <TypographyP>
            Build a tall 9:16 story card with your yearly coding stats, preview
            changes live while you edit, and export a crisp PNG ready to flex on
            social media (or quietly keep to yourself).
          </TypographyP>
          <TypographyP>
            Themes include 2 dark + 2 light options (sunglasses recommended),
            plus custom badges, apps, and language highlights. Local storage
            keeps everything saved automatically.
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
      "A Python utility that converts HTML into Atlassian Document Format for JiraPSA incident workflows without mangling formatting.",
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
            A regex-driven Python module that converts messy HTML into clean
            Atlassian Document Format (ADF) for JiraPSA ticketing workflows.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Why it exists</TypographyH3>
          <TypographyP>
            Anyone who has ever tried copy-pasting rich formatted text into Jira
            and watched the formatting explode into modern abstract art knows the
            pain. This tool automates the transformation reliably behind the
            scenes during incident automation flows.
          </TypographyP>
          <TypographyP>
            Built for speed, rock-solid edge-case parsing, and saving developers
            from manual formatting purgatory.
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
      "A self-hosted, local-first AI workspace for agentic workflows, document processing, code analysis, and multimodal generation.",
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
    live: "https://www.git.jaganjijo.space",
    linkLabel: "View on Gitea",
    get content() {
      return (
        <div>
          <TypographyP>
            A private home-lab platform for running agentic workflows, local
            model orchestration, and retrieval over personal project data —
            without sending every keystroke to third-party cloud providers or
            racking up surprise API bills.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">What it includes</TypographyH3>
          <TypographyP>
            The stack centers around Python services and self-hosted tooling
            including Ollama, Open WebUI, Dify, LangChain, LangGraph, LiteLLM,
            and vector-backed RAG pipelines.
          </TypographyP>
          <TypographyP>
            Handles container orchestration, intelligent document processing,
            code analysis, and multimodal generation across local GPUs.
            Maintained privately on a self-hosted Gitea instance.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "notes-app",
    category: "Full-Stack Product",
    title: "Notes Application using Spring Boot + React",
    description:
      "A full-stack notes app with guest mode, JWT authentication, and Spring Boot + React — the classic rite of passage, built properly.",
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
            A full-stack notes application built with React 19, Vite, and Java
            Spring Boot backed by JPA and an H2 database.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <TypographyP>
            The classic software engineer rite of passage, built with proper
            production patterns: JWT authentication, isolated user note
            stores, local storage guest mode, and clean RESTful CRUD workflows.
          </TypographyP>
          <TypographyP>
            Containerized with Docker for simple one-command local startup and
            demo runs.
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
      "A FastAPI browser toolkit for reconnaissance, DNS intel, and live-streamed security scans (strictly for authorized testing).",
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
            A browser-based security testing toolkit bringing together DNS
            intelligence, WHOIS reconnaissance, file analysis, and web server
            vulnerability checks in one unified interface.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Architecture & Live Streaming</TypographyH3>
          <TypographyP>
            FastAPI powers the backend services while Server-Sent Events stream
            live test output directly to the UI in real time — so you aren&rsquo;t
            left staring at a frozen spinner wondering if your network dropped.
          </TypographyP>
          <TypographyP>
            Designed for educational security research and authorized auditing,
            with full visibility into every check executed.
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
      "A local-first code analysis platform for Python and PHP repos using FastAPI, React, vector embeddings, and local LLMs.",
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
            A local-first code analysis platform that indexes Python and PHP
            repositories into interactive, navigable code graphs.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <TypographyP>
            Integrates locally hosted LLMs via Ollama and Open WebUI with vector
            embeddings to make large, complex, or legacy codebases
            understandable without sharing proprietary source code with external
            APIs.
          </TypographyP>
          <TypographyP>
            FastAPI backend with a snappy React frontend for exploring code
            dependencies, call hierarchies, and architectural patterns.
          </TypographyP>
        </div>
      );
    },
  },
];

export default projects;
