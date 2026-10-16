import type { Metadata } from "next";
import { SimpleProjectPage } from "@/components/SimpleProjectPage";
import { projects } from "@/data/projects";

const project = projects.find((item) => item.title === "GAUSS BUSTERS")!;

export const metadata: Metadata = {
  title: "GAUSS BUSTERS | Stephen Pinacate",
  description: project.description,
};

export default function GaussBustersPage() {
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
        "Root-finding methods including Bisection, Newton-Raphson, and Secant",
        "Step-by-step numerical iteration output for traceable solutions",
        "Linear-system and regression workflows with plotted numerical results",
      ]}
      proofs={[
        {
          src: "/gaussbusters-1.png",
          alt: "GAUSS BUSTERS numerical solver showing Newton-Raphson inputs and solution steps",
          caption: "Numerical solver — Newton-Raphson input, iteration table, and computed approximate root.",
        },
      ]}
    />
  );
}
