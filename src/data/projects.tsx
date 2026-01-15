import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { withBasePath } from "@/data/config";
import { ReactNode } from "react";
import {
  SiDocker,
  SiFastapi,
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
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "software-engineer-wrap",
    category: "Product",
    title: "Software Engineer Wrap 2025",
    src: withBasePath("/assets/projects-screenshots/portfolio/landing.png"),
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [],
    },
    live: "https://jagan-jijo.github.io/softdev-wrapped/",
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
    src: withBasePath("/assets/projects-screenshots/portfolio/landing.png"),
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.fastapi],
    },
    live: "https://www.linkedin.com/in/jagan-jijo/",
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
        </div>
      );
    },
  },
  {
    id: "pqc-research",
    category: "Security Research",
    title: "Post-Quantum Cryptography Research",
    src: withBasePath("/assets/projects-screenshots/portfolio/skills.png"),
    screenshots: ["skills.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    live: "https://www.linkedin.com/in/jagan-jijo/",
    get content() {
      return (
        <div>
          <TypographyP>
            Research focused on lattice-based cryptography and NIST standards
            for post-quantum readiness.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Focus Areas</TypographyH3>
          <TypographyP>
            Evaluated algorithm strengths, transition considerations, and
            security implications for modern systems.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "smart-home",
    category: "IoT + ML",
    title: "Smart Home Automation Platform",
    src: withBasePath("/assets/projects-screenshots/portfolio/projects.png"),
    screenshots: ["projects.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://www.linkedin.com/in/jagan-jijo/",
    get content() {
      return (
        <div>
          <TypographyP>
            Built a Raspberry Pi-based smart home system integrating IoT sensors
            and ML automations to improve security and energy efficiency.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <TypographyP>
            Automated device orchestration, sensor-driven alerts, and adaptive
            routines for convenience and safety.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "digital-forensics",
    category: "Digital Forensics",
    title: "Borderless Cybercrime Investigation",
    src: withBasePath("/assets/projects-screenshots/portfolio/project.png"),
    screenshots: ["project.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.docker],
    },
    live: "https://www.linkedin.com/in/jagan-jijo/",
    get content() {
      return (
        <div>
          <TypographyP>
            Comprehensive study on storage media and email investigations,
            mapping modern challenges in digital forensics across jurisdictions.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Outcome</TypographyH3>
          <TypographyP>
            Documented investigation workflows, evidence handling, and
            operational constraints for cross-border cases.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "iot-blockchain",
    category: "IoT Security",
    title: "Securing IoT Networks with Blockchain",
    src: withBasePath("/assets/projects-screenshots/portfolio/navbar.png"),
    screenshots: ["navbar.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.docker, PROJECT_SKILLS.azure],
    },
    live: "https://www.linkedin.com/in/jagan-jijo/",
    get content() {
      return (
        <div>
          <TypographyP>
            Designed a decentralized approach for IoT data integrity and
            confidentiality using blockchain-based verification.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <TypographyP>
            Emphasized secure device communication, tamper-evident logging, and
            scalable trust models.
          </TypographyP>
        </div>
      );
    },
  },
];

export default projects;
