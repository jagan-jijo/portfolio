"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project, projectSectionNote } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-20">
      <SectionHeader id='projects' title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-3xl px-4 text-sm leading-relaxed text-muted-foreground">
        {projectSectionNote.copy}{" "}
        <Link
          href={projectSectionNote.href}
          target="_blank"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {projectSectionNote.title}
        </Link>
        .
      </div>
    </SectionWrapper>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full p-0">
          <div className="w-full h-full min-h-[175px] rounded-xl border border-border/80 bg-card/60 backdrop-blur-md p-6 text-left shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                {project.category}
              </div>
              <div className="text-lg font-bold text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
                {project.title}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-secondary/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                Explore Details
              </div>
              {project.live && (
                <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              )}
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-3 border-t border-border/60">
            <button className="px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg text-sm transition-colors font-medium">
              Close
            </button>
            {project.live ? (
              <Link href={project.live} target="_blank">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
                  {project.linkLabel ?? "Visit"}
                </button>
              </Link>
            ) : (
              <div className="rounded-lg border border-border px-3 py-1.5 text-center text-xs text-muted-foreground">
                Private / Gitea-managed
              </div>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      {(project.skills.frontend?.length > 0 ||
        project.skills.backend?.length > 0) && (
        <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
          {project.skills.frontend?.length > 0 && (
            <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                Frontend
              </p>
              <FloatingDock items={project.skills.frontend} />
            </div>
          )}
          {project.skills.backend?.length > 0 && (
            <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                Backend
              </p>
              <FloatingDock items={project.skills.backend} />
            </div>
          )}
        </div>
      )}
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
