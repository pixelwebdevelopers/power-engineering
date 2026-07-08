import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import abdulKhaliq from "@/assets/team/abdul-khaliq.jpg";
import fazalYaseen from "@/assets/team/fazal-yaseen.jpeg";
import amjadAli from "@/assets/team/amjad-ali.jpeg";
import mehboobElahi from "@/assets/team/Mehboob-Elahi-Manager.jpeg";
import qasimJahangeer from "@/assets/team/Qasim-Jahangeer-Site-engineer.jpeg";
import irfanAli from "@/assets/team/Irfan-Ali.jpeg";

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({
    meta: [
      { title: "Team — PES" },
      {
        name: "description",
        content:
          "The management team leading Power Engineering Services Company — founder Abdul Khalique Mohsin and the site, engineering and administration leads.",
      },
      { property: "og:title", content: "Team — PES" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

const TEAM = [
  {
    name: "Abdul Khalique Mohsin",
    role: "Founder / CEO",
    featured: true,
    image: abdulKhaliq,
    desc: "Founded PES in 2010 with a mandate to bring international-standard EPC delivery to Pakistan's oil, gas and power operators. Leads strategy, client relationships and safety culture across the business.",
  },
  {
    name: "M. Fazal Yaseen",
    role: "Manager",
    image: fazalYaseen,
    desc: "Manages commercial contracts, logistics, and admin operations at Hyderabad headquarters since 2012.",
  },
  {
    name: "Amjad Ali",
    role: "Site Incharge",
    image: amjadAli,
    desc: "Oversees safety, schedule, and quality execution on active turnaround and maintenance sites.",
  },
  {
    name: "Mehboob Elahi",
    role: "Manager",
    image: mehboobElahi,
    desc: "Leads project estimation, cost controls, and procurement for EPC contracts across Pakistan.",
  },
  {
    name: "Qasim Jahangeer",
    role: "Site Engineer",
    image: qasimJahangeer,
    desc: "Responsible for piping fabrication engineering, ASME welding inspections, and QA/QC compliance.",
  },
  {
    name: "Irfan Ali",
    role: "Site Incharge Administrator",
    image: irfanAli,
    desc: "Coordinates site mobilization, field administrative controls, and local manpower logistics.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
}

function Team() {
  const [ceo, ...rest] = TEAM;
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            The management team behind every <span className="text-primary">weld</span>,{" "}
            <span className="text-primary">turnaround</span> and site.
          </>
        }
        description="Field-hardened engineers and managers who live between site and office. Every project is owned by a named lead from mobilisation to handover."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Founder */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy via-ink to-steel p-10 text-center sm:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" />
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-primary bg-primary shadow-lg">
            {ceo.image ? (
              <img
                src={ceo.image}
                alt={ceo.name}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="grid h-full w-full place-items-center font-display text-4xl font-bold text-primary-foreground">
                {initials(ceo.name)}
              </div>
            )}
          </div>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            — {ceo.role}
          </div>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{ceo.name}</h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">{ceo.desc}</p>
        </div>

        {/* Rest */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="h-20 w-20 overflow-hidden rounded-2xl bg-secondary border border-border">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center font-display text-2xl font-bold text-primary">
                    {initials(m.name)}
                  </div>
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold">{m.name}</h3>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {m.role}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
