export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  imageLabel: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Your flagship project",
    description:
      "Reserve this slot for the project that best represents how you solve real problems. We’ll replace this copy with the problem, your contribution, technical decisions, and measurable result.",
    tags: ["ROLE", "PRIMARY STACK", "YEAR"],
    featured: true,
    imageLabel: "FEATURED PROJECT VISUAL",
  },
  {
    number: "02",
    title: "Second project",
    description:
      "A strong supporting project can show a different side of your engineering work — web, mobile, systems, AI, or a particularly difficult technical challenge.",
    tags: ["TECH", "TECH", "YEAR"],
    imageLabel: "PROJECT VISUAL",
  },
  {
    number: "03",
    title: "Third project",
    description:
      "This space is ready for another substantial build without turning the homepage into a wall of cards. Additional work can later live on a dedicated projects page.",
    tags: ["TECH", "TECH", "YEAR"],
    imageLabel: "PROJECT VISUAL",
  },
];
