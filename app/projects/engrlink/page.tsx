import type { Metadata } from "next";
import { SimpleProjectPage } from "@/components/SimpleProjectPage";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.title === "ENGRLINK")!;

export const metadata: Metadata = {
  title: "ENGRLINK | Stephen Pinacate",
  description: project.description,
};

export default function EngrlinkPage() {
  return (
    <SimpleProjectPage
      number={project.number}
      eyebrow={project.imageLabel}
      title={project.title}
      description={project.description}
      ownership={project.ownership}
      role={project.role}
      scope={project.scope ?? ""}
      contribution={project.contribution}
      technologies={project.tags}
      repository={project.repository}
      highlights={[
        "Role-based desktop portal for AUF CEA academic workflows",
        "Student, faculty, enrollment, schedule, grade, and balance data",
        "Supabase-backed persistence for shared academic records",
      ]}
      proofs={[
        {
          src: "/engrlink-1.png",
          alt: "ENGRLINK desktop dashboard for the AUF College of Engineering and Architecture",
          caption: "Desktop portal — role-based navigation for faculty, students, announcements, and enrollment workflows.",
        },
      ]}
    />
  );
}
