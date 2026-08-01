import Link from "next/link";
import Glow from "@/components/Glow";
import { projects, site } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <Glow />
        <div className="mx-auto max-w-3xl">
          <p className="animate-fade-up font-mono text-sm text-accent">
            {site.role}
          </p>
          <h1
            className="animate-fade-up mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.name}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-muted"
            style={{ animationDelay: "160ms" }}
          >
            {site.tagline}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <Link
              href="/work"
              className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={project.href ?? "/work"}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-border/60 p-6 transition-colors hover:border-foreground/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{project.title}</h3>
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
              </Link>
            ))}
          </div>

          <Link
            href="/work"
            className="mt-8 block text-sm text-muted transition-colors hover:text-foreground sm:hidden"
          >
            View all →
          </Link>
        </div>
      </section>
    </>
  );
}
