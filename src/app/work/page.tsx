import type { Metadata } from "next";
import Link from "next/link";
import { projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
};

export default function Work() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="animate-fade-up font-mono text-sm text-accent">Work</p>
      <h1
        className="animate-fade-up mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
        style={{ animationDelay: "80ms" }}
      >
        Selected projects
      </h1>
      <p
        className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-muted"
        style={{ animationDelay: "160ms" }}
      >
        A few things I&apos;ve designed and built over the years.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={project.href ?? "#"}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noopener noreferrer" : undefined}
            className="animate-fade-up group rounded-2xl border border-border/60 p-6 transition-colors hover:border-foreground/30"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <span className="font-mono text-xs text-muted">
                {project.year}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-block text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
              View project →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border/60 p-10 text-center">
        <h2 className="text-xl font-medium">Have a project in mind?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          I&apos;m always open to hearing about new ideas and collaborations.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
