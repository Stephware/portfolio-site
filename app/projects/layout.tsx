import type { ReactNode } from "react";
import { CaseStudyNav } from "@/components/CaseStudyNav";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div id="top" />
      <CaseStudyNav />
      {children}
    </>
  );
}
