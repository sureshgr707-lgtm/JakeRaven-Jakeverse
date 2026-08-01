import type { Metadata } from "next";
import { site, skills, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="animate-fade-up font-mono text-sm text-accent">About</p>
      <h1
        className="animate-fade-up mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
        style={{ animationDelay: "80ms" }}
      >
        Hi, I&apos;m {site.name}.
      </h1>
      <p
        className="animate-fade-up mt-6 text-lg leading-8 text-muted"
        style={{ animationDelay: "160ms" }}
      >
        I&apos;m a {site.role.toLowerCase()} who cares about the details most
        people skip — the transition that feels a beat too slow, the copy
        that almost makes sense. {site.location}. I like building things end
        to end: from the first sketch to the shipped product.
      </p>
      <p
        className="animate-fade-up mt-4 text-lg leading-8 text-muted"
        style={{ animationDelay: "200ms" }}
      >
        Outside of client work, I spend my time exploring new tools, writing
        about product craft, and looking for the next hard problem worth
        solving.
      </p>

      <div className="mt-16">
        <h2 className="text-sm font-mono text-accent">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border/60 px-4 py-1.5 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-sm font-mono text-accent">Experience</h2>
        <ol className="mt-6 space-y-8 border-l border-border/60 pl-6">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{item.year}</p>
              <h3 className="mt-1 font-medium">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
