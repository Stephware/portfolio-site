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
          src: "/aufthorize-5.png",
          alt: "AUFTHORIZE officer dashboard with submission and approval summaries",
          caption: "Officer dashboard — request creation, submission tracking, and approval summaries.",
        },
        {
          src: "/aufthorize-9.png",
          alt: "AUFTHORIZE reviewer page for approving or rejecting a budget request",
          caption: "Reviewer workflow — request details, budget breakdown, approval progress, and decision controls.",
        },
        {
          src: "/aufthorize-1.png",
          alt: "Generated AUF liquidation report PDF with approval signature fields",
          caption: "Generated PDF output — structured liquidation report with financial summary and signature fields.",
          contain: true,
        },
        {
          src: "/aufthorize-2.png",
          alt: "AUFTHORIZE automated email notifying a requester that budget is available",
          caption: "Email automation — request-status notification sent with relevant request details.",
          contain: true,
        },
      ]}
    />
  );
}
