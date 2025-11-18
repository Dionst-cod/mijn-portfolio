// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  url?: string;       
  repo?: string;       
  image?: string;      
  publishAt?: string;  
};

export const projects: Project[] = [

{
    slug: "web-application-profiles",
    title: "Web Application — Gebruikersprofielen",
    summary:
      "Responsieve webapplicatie gebouwd met HTML, CSS en JavaScript om gebruikersprofielen en data overzichtelijk te tonen.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Dionst-cod/Web-application",
  },
  {
    slug: "student-behavior-tracker",
    title: "Student Behavior Tracker",
    summary:
      "Tool om studiegedrag te volgen en analyseren. Data wordt opgeslagen in SQLite en verwerkt met Python.",
    tech: ["Python", "SQLite"],
    repo: "https://github.com/Dionst-cod/Actiontypes",
  },
];