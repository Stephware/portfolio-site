export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript / TypeScript", "Python", "C", "C++", "C#", "SQL"],
  },
  {
    category: "Frontend & Mobile",
    items: ["Android · Jetpack Compose", "HTML / CSS", "React.js", "React Native"],
  },
  {
    category: "Backend & Databases",
    items: ["ASP.NET Core", "PostgreSQL", "MySQL", "SQL Server (MSSQL)", "MongoDB", "Supabase"],
  },
  {
    category: "Architecture & DevOps",
    items: ["REST APIs", "JWT Authentication", "Offline-first Sync Design"],
  },
  {
    category: "Tools & Methodologies",
    items: ["Git / GitHub", "Agile Development"],
  },
];
