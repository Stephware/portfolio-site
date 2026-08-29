export type Achievement = {
  year: string;
  eyebrow: string;
  title: string;
  description: string;
  earlier?: boolean;
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    eyebrow: "REGIONAL RECOGNITION",
    title: "Overall Champion — 9th Regional CpE Challenge",
    description: "Part of the delegation recognized as Overall Champion at the 9th Regional Computer Engineering Challenge.",
  },
  {
    year: "2026",
    eyebrow: "REGIONAL COMPETITION",
    title: "9th Regional CpE Challenge — 2nd Place",
    description: "Earned 2nd place in a competition category at the 9th Regional Computer Engineering Challenge.",
  },
  {
    year: "2024 — PRESENT",
    eyebrow: "ACADEMIC DISTINCTION · AUF",
    title: "University Scholar",
    description: "Recognized as a University Scholar at Angeles University Foundation with a 95 GWA.",
  },
  {
    year: "2023 — PRESENT",
    eyebrow: "SCHOLARSHIP",
    title: "DOST Scholar",
    description: "Scholarship recipient under the Department of Science and Technology (DOST).",
  },
  {
    year: "2023 — 2024",
    eyebrow: "ACADEMIC DISTINCTION · AUF",
    title: "College Scholar",
    description: "Recognized as a College Scholar at Angeles University Foundation with a 90 GWA.",
  },
  {
    year: "AUF",
    eyebrow: "STUDENT COUNCIL RECOGNITION",
    title: "Most Outstanding Student Council — 1st Place",
    description: "Contributed as part of the student council recognized with first-place distinction.",
  },
  {
    year: "AUF",
    eyebrow: "ORGANIZATION RECOGNITION",
    title: "Eureka Award",
    description: "Part of the organization recognized for outstanding academic excellence.",
  },
  {
    year: "2019 — 2020",
    eyebrow: "MATHEMATICS · CAMACHILES NATIONAL HIGH SCHOOL",
    title: "Merit Award — Philippine International Mathematical Olympiad (PhiMO)",
    description: "Received a Merit Award in the Philippine International Mathematical Olympiad.",
    earlier: true,
  },
  {
    year: "2018 — 2019",
    eyebrow: "MATHEMATICS · CAMACHILES NATIONAL HIGH SCHOOL",
    title: "Bronze Award — Thailand International Mathematics Olympiad (TIMO)",
    description: "Received a Bronze Award in the Thailand International Mathematics Olympiad.",
    earlier: true,
  },
];
