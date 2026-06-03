export type Service = {
  id: string;
  title: string;
  description: string;
};

export const stack = [
  "Vue",
  "Vite+",
  "JavaScript",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Oracle DB",
  "Git",
  "GitHub",
  "AWS",
] as const;

export type StackItem = (typeof stack)[number];
export type ProjectStatus = "in_progress" | "coming_soon";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  statusLabel: "In Progress" | "Coming Soon";
  description: string;
  stack: StackItem[];
};

export const profile = {
  brand: "Daiki",
  name: "Adrian Melgar",
  title: "Junior Full-Stack Developer",
  location: "Based in Peru",
  availability: "Available remotely",
  headline: "JUNIOR FULL-STACK DEVELOPER",
  intro:
    "I build practical web applications with Vue, Python, FastAPI, and databases, focusing on clean interfaces and reliable foundations.",
  about:
    "I am a junior full-stack developer growing through hands-on projects, consistent practice, and curiosity. I focus on building useful, maintainable software while improving my judgment across frontend, backend, databases, and deployment workflows.",
};

export const links = {
  email: "adrian.melgar.t@gmail.com",
  github: "https://github.com/DaikiMT",
  linkedin: "https://www.linkedin.com/in/adrianmelgart/",
};

export const services: Service[] = [
  {
    id: "frontend-interfaces",
    title: "Frontend Interfaces",
    description:
      "Responsive Vue interfaces built with attention to structure, usability, and maintainable components.",
  },
  {
    id: "backend-apis",
    title: "Backend APIs",
    description:
      "Practical API foundations using Python and FastAPI for clear data flow and application logic.",
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Relational data modeling and querying with PostgreSQL and Oracle DB for application-backed features.",
  },
  {
    id: "deployment-tools",
    title: "Deployment & Tools",
    description:
      "Project setup, Git workflows, GitHub collaboration, and deployment basics with AWS-aware tooling.",
  },
];

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    status: "in_progress",
    statusLabel: "In Progress",
    description:
      "A personal portfolio built to present my skills, services, and learning path as a junior developer.",
    stack: ["Vue", "Vite+", "TypeScript"],
  },
  {
    id: "full-stack-dashboard",
    title: "Full-Stack Dashboard",
    status: "coming_soon",
    statusLabel: "Coming Soon",
    description:
      "A planned dashboard project for practicing authenticated UI, API design, and database-backed workflows.",
    stack: ["Vue", "FastAPI", "PostgreSQL"],
  },
  {
    id: "automation-tool",
    title: "Automation Tool",
    status: "coming_soon",
    statusLabel: "Coming Soon",
    description:
      "A planned utility for exploring Python automation, repeatable workflows, and practical developer tooling.",
    stack: ["Python", "GitHub", "AWS"],
  },
];
