import type { Metadata } from "next";
import { SimpleProjectPage } from "@/components/SimpleProjectPage";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.title === "Pickleball Booking System")!;

export const metadata: Metadata = {
  title: "Pickleball Booking System | Stephen Pinacate",
  description: project.description,
};

export default function PickleballBookingPage() {
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
        "Reusable standalone venue deployments with five proposed brand themes, each designed for separate venue data and configuration",
        "Customer-facing date, court and time-slot selection with server-validated availability, pricing and temporary booking holds",
        "PostgreSQL exclusion constraints and transactional checks to prevent overlapping reservations",
        "Manual GCash/bank receipt submission, authenticated payment-proof review and owner/manager booking decisions — no automated payment gateway",
        "Role-aware staff dashboard for reservations, walk-ins, court blocks, pricing, hours and customer payment review",
        "Guest access tokens, secure server-only API gateway, CSRF protection, rate limiting and verified test workflows",
      ]}
      proofs={[]}
    />
  );
}
