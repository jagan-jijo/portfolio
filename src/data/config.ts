import { cvProfile } from "@/data/cv";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) => `${basePath}${path}`;

const config = {
  title: "Jagan Jijo | Python Software Engineer",
  headline: cvProfile.headline,
  description: {
    long: cvProfile.summary,
    short:
      "Portfolio of Jagan Jijo, a Python software engineer focused on backend systems, AI workflows, security platforms, and modern infrastructure.",
  },
  keywords: Array.from(new Set(["Jagan Jijo", "portfolio", ...cvProfile.recruiterKeywords])),
  author: cvProfile.fullName,
  email: cvProfile.contact.email,
  phone: cvProfile.contact.phone,
  location: cvProfile.location,
  site: cvProfile.contact.linkedin,
  resume: cvProfile.contact.linkedin,

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return withBasePath("/assets/seo/og-image.png");
  },
  social: {
    twitter: "",
    linkedin: cvProfile.contact.linkedin,
    instagram: "",
    facebook: "",
    github: cvProfile.contact.github,
  },
};
export { config, basePath, withBasePath };
