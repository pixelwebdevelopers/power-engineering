import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — PESC" },
      {
        name: "description",
        content:
          "Completed EPC, fabrication and turnaround projects delivered by Power Engineering Services Company for OGDCL, MPCL, Mari Petroleum and Joint Engineering Services.",
      },
      { property: "og:title", content: "Projects — PESC" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

type Project = {
  no: string;
  client: string;
  name: string;
  desc: string;
  tag: "Turnaround" | "Fabrication" | "Pipeline" | "Construction";
};

const PROJECTS: Project[] = [
  { no: "01", client: "OGDCL, Sinjhoro", name: "Plant Outage", desc: "PESC successfully completed Sinjhoro ATA 2015 covering maintenance and up-gradation of aged plant equipment.", tag: "Turnaround" },
  { no: "02", client: "OGDCL, Sinjhoro", name: "Plant Outage 2016", desc: "Served as mechanical contractor for Annual Turn Around 2016 at Sinjhoro Gas Condensate Field, OGDCL.", tag: "Turnaround" },
  { no: "03", client: "OGDCL, Bobi Oil Complex", name: "Plant Outage 2016", desc: "Mechanical contractor for maintenance of plant during Annual Turn Around 2016 at Bobi Oil Complex.", tag: "Turnaround" },
  { no: "04", client: "OGDCL, Sinjhoro", name: "Membrane Unit Installation", desc: "Installation of Membrane Skid, Coalescer Filter and Fin Fan Cooler. Fabrication, welding & erection of 2\", 4\", 6\", 8\" and 10\" pipelines including hydro, flashing, air blowing and radiography.", tag: "Fabrication" },
  { no: "05", client: "Mari Petroleum Company", name: "Plant Outage 2017", desc: "Mechanical contractor during ATA 2017 at Sujawal Gas Condensate Field with Joint Engineering Services (Pvt) Ltd.", tag: "Turnaround" },
  { no: "06", client: "Mari Petroleum Company", name: "Warehouse Shed Construction", desc: "Construction of 52' × 140' warehouse shed at Mari Petroleum Company Limited, Zarghun.", tag: "Construction" },
  { no: "07", client: "OGDCL, Sinjhoro", name: "Jhakro Flareline", desc: "Fabrication, welding & erection of Jhakro Flareline 4\" and 6\" including hydro testing, flashing, air blowing and radiography at Sinjhoro Gas Condensate Field.", tag: "Fabrication" },
  { no: "08", client: "OGDCL, Sinjhoro", name: "Plant Outage 2019", desc: "Sinjhoro ATA 2019 covering maintenance and up-gradation of aged plant equipment.", tag: "Turnaround" },
  { no: "09", client: "Joint Engineering Services", name: "Sinjhoro Piping Works", desc: "Fabrication, construction & erection of plant piping across dehydration, amine sweetening, LPG bullets, HCDPU, metering skids, hot oil heater, KO drum and flare stack systems at Sinjhoro Gas Condensate Field.", tag: "Pipeline" },
  { no: "10", client: "Joint Engineering Services", name: "Well Head Pipeline (ZS1, ZS2)", desc: "Fabrication and erection of 2\", 6\" and 8\" duplex (2205) pipeline for wellheads at Zarghun Gas Field, MPCL.", tag: "Pipeline" },
  { no: "11", client: "Joint Engineering Services", name: "Zarghun Pipeline", desc: "Fabrication, welding & erection of 2\"–16\" dia pipeline at Zarghun Gas Field, MPCL.", tag: "Pipeline" },
  { no: "12", client: "Joint Engineering Services", name: "Support Sheds", desc: "Loading gantry shed, generator room shed, control room shed and fire water pump shed.", tag: "Construction" },
  { no: "13", client: "Joint Engineering Services", name: "Sajjal Well Head Assembly", desc: "Fabrication and welding of Sajjal wellhead 2\", 6\" and 8\" duplex (2205) pipeline at Sajjal Well, Sajawal Gas Field, MPCL.", tag: "Fabrication" },
  { no: "14", client: "Joint Engineering Services", name: "Well Head ZS3 Pipeline", desc: "Fabrication, welding and erection of 2\", 4\", 6\" and 8\" pipeline of Well Head ZS3 and separator at Zarghun Gas Field, MPCL.", tag: "Pipeline" },
];

const TAGS = ["All", "Turnaround", "Fabrication", "Pipeline", "Construction"] as const;

function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<(typeof TAGS)[number]>("All");

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => {
        if (tag !== "All" && p.tag !== tag) return false;
        if (!q) return true;
        const t = q.toLowerCase();
        return (
          p.client.toLowerCase().includes(t) ||
          p.name.toLowerCase().includes(t) ||
          p.desc.toLowerCase().includes(t)
        );
      }),
    [q, tag],
  );

  return (
    <>
      <PageHero
        eyebrow="Completed Projects"
        title={
          <>
            50+ projects delivered for Pakistan's{" "}
            <span className="text-primary">energy operators</span>.
          </>
        }
        description="A selection of turnaround, fabrication, pipeline and construction works delivered across gas condensate fields, oil complexes and refinery assets."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 border-b border-border pb-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  tag === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects, clients, scope…"
              className="w-full min-w-[280px] rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 divide-y divide-border">
          {filtered.map((p) => (
            <article
              key={p.no}
              className="group grid gap-6 py-8 transition-colors lg:grid-cols-[80px_1fr_1fr_2fr_120px] lg:items-start"
            >
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                No. {p.no}
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.client}
              </div>
              <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="flex justify-start lg:justify-end">
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  {p.tag}
                </span>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No projects match — try another keyword or category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}