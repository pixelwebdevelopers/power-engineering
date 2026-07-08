import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
