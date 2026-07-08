import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Wrench,
  HardHat,
  Radar,
  Sparkles,
  Users,
  Paintbrush,
  Cog,
  ArrowUpRight,
  Zap,
  Fuel,
  Factory,
  Leaf,
  FlaskConical,
  Package,
  Building2,
  Cpu,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import serviceWelding from "@/assets/service-welding.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceConstructionNew from "@/assets/service-construction-new.png";
import serviceBlasting from "@/assets/service-blasting.jpg";
import serviceNdt from "@/assets/service-ndt.jpg";
import serviceManpower from "@/assets/service-manpower.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — PES" },
      {
        name: "description",
        content:
          "Fabrication, welding, construction, mechanical engineering, chemical cleaning, NDT and manpower supply for Pakistan's power and hydrocarbon sector.",
      },
      { property: "og:title", content: "Services — PES" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const SERVICES = [
  {
    icon: Flame,
    title: "Fabrication & Welding",
    body: "Structural, pipeline and pressure vessel welding — from small skids to full modular units. In-house welders qualified to ASME IX.",
    image: serviceWelding,
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairing",
    body: "Planned, preventive and emergency maintenance for rotating and static equipment on live production sites.",
    image: serviceMaintenance,
  },
  {
    icon: Paintbrush,
    title: "Blasting & Painting",
    body: "Surface preparation and industrial coating for pipelines, tanks and structural steel — offshore-grade finishes.",
    image: serviceBlasting,
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    body: "Civil and mechanical construction of processing units, warehouses, control rooms and utility buildings.",
    image: serviceConstructionNew,
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    body: "Design, retrofit and commissioning of mechanical equipment — including membrane skids, coalescer filters and fin-fan coolers.",
    image: serviceConstruction,
  },
  {
    icon: Sparkles,
    title: "Chemical Cleaning & Hydro Jetting",
    body: "High-pressure water jetting and chemical decontamination of pipes, heat exchangers and process vessels.",
    image: serviceBlasting,
  },
  {
    icon: Radar,
    title: "Non-Destructive Testing",
    body: "Radiography, ultrasonic, MPI, DPI and hydro testing to certify every weld, joint and pressurised assembly.",
    image: serviceNdt,
  },
  {
    icon: Users,
    title: "Skilled Manpower Supply",
    body: "Welders, fitters, riggers, technicians and site engineers — mobilised nationally within 48 hours.",
    image: serviceManpower,
  },
  {
    icon: Building2,
    title: "Civil Construction & Works",
    body: "Foundations, structural concrete, industrial warehousing, control rooms, and heavy equipment civil pads.",
    image: serviceConstructionNew,
  },
  {
    icon: Zap,
    title: "Electrical Works",
    body: "Industrial cabling, earthing, substation installation, power distribution networks, and commissioning.",
    image: serviceMaintenance,
  },
  {
    icon: Cpu,
    title: "Instrumentation & Testing",
    body: "Calibration, installation and loop testing of transmitters, control valves, automation systems, and safety interlocks.",
    image: serviceNdt,
  },
];

const INDUSTRIES = [
  { icon: Zap, name: "Power Plants", d: "Boilers, turbines, condensers and BOP support." },
  { icon: Fuel, name: "Oil & Gas", d: "Upstream, midstream and processing works." },
  { icon: Factory, name: "Fertilizer", d: "Urea, ammonia and utility plants." },
  { icon: Leaf, name: "Energy", d: "Renewables, cogeneration and grid infrastructure." },
  {
    icon: FlaskConical,
    name: "Coatings & Plating",
    d: "Corrosion, chemical and abrasion protection.",
  },
  { icon: Cpu, name: "Plastics & Composites", d: "Process piping and structural composite work." },
  { icon: Package, name: "Packaging & Plastics", d: "Utility, cleanroom and support services." },
  { icon: Building2, name: "Construction", d: "Industrial civil, warehousing and shed erection." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Comprehensive <span className="text-primary">EPC</span> services for clients across
            diverse industries.
          </>
        }
        description="Power Engineering Services Company delivers capital efficiency and project certainty across the full asset life cycle — from concept through commissioning through the next turnaround."
      />

      {/* Main services grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — Scope of Activities
            </div>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
              Every discipline, one accountable partner.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, body, image }, i) => (
            <article
              key={title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60 ${
                i % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i % 5 === 0 ? "aspect-[16/10]" : "aspect-[5/4]"
                }`}
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/80 text-primary backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-border bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                — Industries Served
              </div>
              <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
                Wherever heavy industry lives.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                From upstream gas condensate fields to downstream fertilizer plants, we bring the
                same engineering rigour to every site.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {INDUSTRIES.map(({ icon: Icon, name, d }) => (
                <div key={name} className="group bg-card p-8 transition-colors hover:bg-secondary">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 text-lg font-bold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-navy to-ink p-10 sm:p-14 lg:flex-row lg:items-center">
          <h3 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Scope in mind? Send us the spec — we'll come back with a plan.
          </h3>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground"
          >
            Request a quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </>
  );
}
