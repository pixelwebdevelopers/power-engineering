import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — PES" },
      {
        name: "description",
        content:
          "Talk to Power Engineering Services SMC PVT LTD. Headquarters in Hyderabad, Pakistan. Phone +92 333 7151155 · info@powereng.com.pk",
      },
      { property: "og:title", content: "Contact — PES" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Send us the scope. <span className="text-primary">We'll come back with a plan.</span>
          </>
        }
        description="Whether it's a single weld inspection or a full turnaround, our team responds within one business day."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Headquarters",
                lines: ["Mezzanine Floor G -1059/78, Wishan Nagar", "Phuleli Road, Haydrabad, Pakistan"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+92 333 7151155"],
                href: "tel:+923337151155",
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@powereng.com.pk"],
                href: "mailto:info@powereng.com.pk",
              },
              {
                icon: Clock,
                title: "Working Hours",
                lines: ["Monday — Saturday", "08:00 — 18:00 PKT"],
              },
            ].map(({ icon: Icon, title, lines, href }) => {
              const content = (
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {title}
                    </div>
                    <div className="mt-2 text-foreground">
                      {lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
              return href ? (
                <a key={title} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={title}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 sm:p-10"
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — Request a proposal
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Tell us about the project.</h2>

            {sent ? (
              <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
                <div className="text-lg font-bold text-primary">Message received.</div>
                <p className="mt-2 text-sm text-foreground/80">
                  Thanks — a member of the PES team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Your name" />
                  <Field label="Company" name="company" placeholder="Company name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Phone" name="phone" placeholder="+92…" />
                </div>
                <Field
                  label="Site / Location"
                  name="site"
                  placeholder="Zarghun, Sinjhoro, Karachi…"
                />
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Scope of work
                  </label>
                  <textarea
                    name="scope"
                    rows={5}
                    placeholder="Fabrication, turnaround, NDT, pipeline erection…"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                >
                  Send inquiry
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}
