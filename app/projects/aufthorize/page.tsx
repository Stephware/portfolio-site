import type { Metadata } from "next";
import { SimpleProjectPage } from "@/components/SimpleProjectPage";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.title === "AUFTHORIZE")!;

export const metadata: Metadata = {
  title: "AUFTHORIZE | Stephen Pinacate",
  description: project.description,
};

export default function AufthorizePage() {
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
        "Role-based request submission and multi-stage approval workflows",
        "Budget, venue, liquidation, reimbursement, and material request handling",
        "Generated signed PDF e-copies using document-generation tooling",
        "Automated email notifications for request status and next-step updates",
      ]}
      proofs={[
        {
          src: "/aufthorize-1.png",
          alt: "AUFTHORIZE project workflow screenshot 1",
          contain: true,
        },
        {
          src: "/aufthorize-2.png",
          alt: "AUFTHORIZE project workflow screenshot 2",
          contain: true,
        },
        {
          src: "/aufthorize-3.png",
          alt: "AUFTHORIZE project workflow screenshot 3",
          contain: true,
        },
        {
          src: "/aufthorize-4.png",
          alt: "AUFTHORIZE project workflow screenshot 4",
          contain: true,
        },
        {
          src: "/aufthorize-5.png",
          alt: "AUFTHORIZE project workflow screenshot 5",
          contain: true,
        },
        {
          src: "/aufthorize-6.png",
          alt: "AUFTHORIZE project workflow screenshot 6",
          contain: true,
        },
        {
          src: "/aufthorize-7.png",
          alt: "AUFTHORIZE project workflow screenshot 7",
          contain: true,
        },
        {
          src: "/aufthorize-8.png",
          alt: "AUFTHORIZE project workflow screenshot 8",
          contain: true,
        },
        {
          src: "/aufthorize-9.png",
          alt: "AUFTHORIZE project workflow screenshot 9",
          contain: true,
        },
      ]}
    />
  );
}
