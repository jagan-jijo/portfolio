"use client";

import Link from "next/link";
import React from "react";
import projects, { projectSectionNote } from "@/data/projects";

function Page() {
  return (
    <div className="container mx-auto h-full px-4 pb-20 pt-28 text-zinc-300 md:px-[50px] xl:px-[150px]">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
          Projects
        </h1>
        <p className="mb-12 text-sm sm:text-base leading-relaxed text-zinc-400">
          {projectSectionNote.copy}{" "}
          <Link
            href={projectSectionNote.href}
            target="_blank"
            className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80 font-medium"
          >
            {projectSectionNote.title}
          </Link>
          .
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            className="group min-h-[280px] rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
            key={project.id}
          >
            <div className="flex h-full flex-col p-6 text-zinc-300">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                {project.category}
              </div>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-100 group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-sm"
                  >
                    {project.linkLabel ?? "View project"}
                  </Link>
                ) : (
                  <div className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-500">
                    Private / Gitea-managed
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
