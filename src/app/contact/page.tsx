import type { Metadata } from "next";
import Link from "next/link";
import Glow from "@/components/Glow";
import { links, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

const channels = [
  { label: "Email", value: site.email, href: links.email },
  { label: "GitHub", value: "@jakeraven", href: links.github },
  { label: "LinkedIn", value: "/in/jakeraven", href: links.linkedin },
  { label: "X", value: "@jakeraven", href: links.twitter },
];

export default function Contact() {
  return (
    <div className="relative mx-auto max-w-3xl px-6 py-24">
      <Glow />
      <p className="animate-fade-up font-mono text-sm text-accent">Contact</p>
      <h1
        className="animate-fade-up mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
        style={{ animationDelay: "80ms" }}
      >
        Let&apos;s build something.
      </h1>
      <p
        className="animate-fade-up mt-6 max-w-xl text-lg leading-8 text-muted"
        style={{ animationDelay: "160ms" }}
      >
        Whether it&apos;s a project, a question, or just to say hi — my inbox
        is open.
      </p>

      <div
        className="animate-fade-up mt-12 grid gap-4 sm:grid-cols-2"
        style={{ animationDelay: "240ms" }}
      >
        {channels.map((channel) => (
          <Link
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={
              channel.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="group rounded-2xl border border-border/60 p-6 transition-colors hover:border-foreground/30"
          >
            <p className="font-mono text-xs text-muted">{channel.label}</p>
            <p className="mt-2 text-base font-medium group-hover:text-accent">
              {channel.value}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
