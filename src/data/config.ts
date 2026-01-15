const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) => `${basePath}${path}`;

const config = {
  title: "Jagan Jijo | Software Developer",
  description: {
    long: "Explore the portfolio of Jagan Jijo, a software developer and cybersecurity professional specializing in Python backend development, FastAPI, REST APIs, and SIEM integrations. Discover experience in alert monitoring platforms, secure systems, and full-stack work with React, TypeScript, and PostgreSQL.",
    short:
      "Discover the portfolio of Jagan Jijo, a software developer focused on Python, FastAPI, security, and modern web systems.",
  },
  keywords: [
    "Jagan Jijo",
    "portfolio",
    "software developer",
    "cybersecurity",
    "Python",
    "FastAPI",
    "REST APIs",
    "SIEM",
    "Microsoft Sentinel",
    "Splunk",
    "Wazuh",
    "Logpoint",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Azure",
    "Azure",
    "Terraform",
    "Kubernetes",
  ],
  author: "Jagan Jijo",
  email: "jaganjijo@gmail.com",
  phone: "07721 691643",
  location: "Birmingham, UK",
  site: "https://www.linkedin.com/in/jagan-jijo/",
  resume: "https://www.linkedin.com/in/jagan-jijo/",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return withBasePath("/assets/seo/og-image.png");
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/jagan-jijo/",
    instagram: "",
    facebook: "",
    github: "https://github.com/jagan-jijo",
  },
};
export { config, basePath, withBasePath };
