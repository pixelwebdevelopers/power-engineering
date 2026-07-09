import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Flame,
  Wrench,
  HardHat,
  Radar,
  Sparkles,
  Users,
  Building2,
  Zap,
  Cpu,
  ArrowRight,
  Phone,
} from "lucide-react";
import heroRefinery from "@/assets/hero-refinery.jpg";
import serviceWelding from "@/assets/service-welding.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import projectOutage from "@/assets/project-outage.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectWellhead from "@/assets/project-wellhead.jpg";
import clientLogo2 from "@/assets/clients-logo/2.png";
import clientLogo3 from "@/assets/clients-logo/3.png";
import clientLogo4 from "@/assets/clients-logo/4.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PES — Engineering the backbone of Pakistan's energy sector" },
      {
        name: "description",
        content:
          "Power Engineering Services SMC PVT LTD delivers EPC, fabrication, welding, construction and maintenance for oil, gas and power operators across Pakistan.",
      },
      { property: "og:title", content: "PES — Engineering Pakistan's energy backbone" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const CAPABILITIES = [
  { icon: Flame, name: "Fabrication & Welding", href: "/services" },
  { icon: Wrench, name: "Maintenance & Turnaround", href: "/services" },
  { icon: HardHat, name: "Construction & Engineering", href: "/services" },
  { icon: Radar, name: "Non-Destructive Testing", href: "/services" },
  { icon: Sparkles, name: "Chemical Cleaning & Hydro Jetting", href: "/services" },
  { icon: Users, name: "Skilled Manpower Supply", href: "/services" },
  { icon: Building2, name: "Civil Construction & Works", href: "/services" },
  { icon: Zap, name: "Electrical Works", href: "/services" },
  { icon: Cpu, name: "Instrumentation & Testing", href: "/services" },
];

const CLIENT_LOGOS = [
  clientLogo2,
  clientLogo3,
  clientLogo4,
];

const FEATURED_PROJECTS = [
  {
    tag: "OGDCL",
    title: "Plant Outage — ATA 2019",
    body: "Successfully executed annual turn-around covering maintenance and up-gradation of aged equipment across the Sinjhoro Gas Condensate Field.",
    image: projectOutage,
  },
  {
    tag: "MPCL · Zarghun",
    title: "Well Head Pipeline Fabrication",
    body: 'Fabrication, welding and erection of 2", 6" and 8" Duplex (2205) pipeline for wellheads ZS1 and ZS2 at Zarghun Gas Field.',
    image: projectWellhead,
  },
  {
    tag: "MARI ENERGIES LIMITED",
    title: "Multi-Unit Piping Works",
    body: "Construction and erection of plant piping across Dehydration, Amine Sweetening, LPG Bullets, HCDPU, Metering Skids and Flare Stack systems.",
    image: projectPipeline,
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden lg:h-[calc(100vh-5rem)] lg:max-h-[calc(100vh-5rem)] lg:min-h-[580px]">
        <div className="absolute inset-0">
          <img
            src={heroRefinery}
            alt="Petrochemical refinery at blue hour"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative mx-auto flex min-h-[92vh] lg:min-h-0 lg:h-full max-w-7xl flex-col justify-end px-6 pt-40 pb-20 lg:pt-16 lg:pb-8 xl:pt-24 xl:pb-12">
          <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-primary animate-rise">
              <span className="inline-flex h-2 w-2 animate-glow rounded-full bg-primary" />
              Est. 2010 · Hyderabad · Pakistan
            </div>
            <h1
              className="mt-4 lg:mt-3 text-balance text-5xl font-bold leading-[1.0] tracking-tight sm:text-7xl lg:text-[2.8rem] xl:text-[3.8rem] 2xl:text-[4.5rem] xl:leading-[0.95] animate-rise"
              style={{ animationDelay: "80ms" }}
            >
              Power Engineering Services: <span className="text-primary">backbone</span> of
              Pakistan's energy.
            </h1>
            <p
              className="mt-6 lg:mt-2.5 xl:mt-4 text-lg lg:text-[13px] xl:text-[15px] 2xl:text-base xl:leading-relaxed text-foreground/80 animate-rise"
              style={{ animationDelay: "160ms" }}
            >
              PES is a full-scope EPC and maintenance contractor for oil, gas and power operators.
              We design, build, weld, inspect and turn around the assets that keep the grid running.
            </p>
            <div
              className="mt-6 lg:mt-3.5 xl:mt-4.5 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_oklch(0.78_0.17_65/0.4)]"
              >
                Explore our portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Our capabilities
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-6 xl:mt-8 grid grid-cols-2 gap-x-8 gap-y-4 xl:gap-y-6 border-t border-border pt-6 lg:pt-3.5 xl:pt-5 sm:grid-cols-4">
            {[
              ["2010", "Established"],
              ["200+", "Employees"],
              ["100+", "Projects"],
              ["24/7", "Field Support"],
            ].map(([k, v]) => (
              <div key={v} className="text-center">
                <div className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {k}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-y border-border bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                — Scope of Activities
              </div>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Nine disciplines. One contractor.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From a single weld to an entire annual turnaround — everything stays under one roof,
              one QA system, one point of accountability.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, name, href }) => (
              <Link
                key={name}
                to={href}
                className="group flex items-center justify-between gap-6 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition-colors group-hover:border-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-semibold">{name}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT INTRO */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="sticky top-32">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                — About PES
              </div>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
                A service provider to the oil, gas and power industry.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                PES is one of Pakistan's leading engineering, procurement, construction and
                maintenance companies. We work with clients across diverse industries around the
                country to design, build and maintain their capital projects.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Founded in 2010 by Abdul Khalique Mohsin and headquartered in Hyderabad, we operate
                throughout Pakistan with a reputation for commitment, delivery and operational
                excellence.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 border-b border-primary pb-1 font-mono text-xs uppercase tracking-[0.3em] text-primary transition-all hover:gap-4"
              >
                Our history <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={serviceWelding}
                alt="Welding sparks"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl sm:translate-y-16">
              <img
                src={serviceConstruction}
                alt="Engineers inspecting turbine"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={serviceMaintenance}
                alt="Gas processing plant at dusk"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl border border-border bg-card p-8 sm:translate-y-16">
              <div className="flex h-full flex-col justify-between">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Since 2010
                </div>
                <div>
                  <div className="font-display text-6xl font-bold text-foreground">15+</div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    Years serving GDCL, PARCO, MARI ENERGIES LIMITED across every province of Pakistan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <section className="border-y border-border bg-ink py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by Pakistan's energy operators
          </div>
        </div>
        <div className="relative mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-24 px-12">
            {[
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
              ...CLIENT_LOGOS,
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-14 md:h-18 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — Selected Work
            </div>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
              Executed at pressure. Delivered on schedule.
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            All 100+ projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {p.tag}
                </div>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ink via-steel to-navy p-10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                — Looking for a first-class EPC partner?
              </div>
              <h2 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-6xl">
                Let's build the next project together.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between rounded-full bg-primary px-7 py-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Start a conversation
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="tel:+923337151155"
                className="inline-flex items-center justify-between rounded-full border border-border bg-background/20 px-7 py-5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary"
              >
                Call +92 333 7151155
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
