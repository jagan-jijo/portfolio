"use client";

import Link from "next/link";
import React from "react";
import projects, { projectSectionNote } from "@/data/projects";

function Page() {
  return (
    <div className="container mx-auto h-full px-4 pb-20 pt-24 text-zinc-300 md:px-[50px] xl:px-[150px]">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl">Projects</h1>
        <p className="mb-12 text-sm leading-relaxed text-zinc-400">
          {projectSectionNote.copy}{" "}
          <Link
            href={projectSectionNote.href}
            target="_blank"
            className="underline underline-offset-4 transition-colors hover:text-zinc-200"
          >
            {projectSectionNote.title}
          </Link>
          .
        </p>
      </div>

      <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            className="min-h-[260px] rounded-md border-[.5px] border-zinc-600"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="flex h-full flex-col p-5 text-zinc-300">
              <div className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {project.category}
              </div>
              <h2 className="mt-3 text-xl">{project.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-zinc-600 px-3 py-1 text-xs transition-colors hover:border-zinc-400 hover:text-zinc-100"
                  >
                    {project.linkLabel ?? "View project"}
                  </Link>
                ) : (
                  <div className="inline-flex items-center rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-500">
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
