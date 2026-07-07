import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import serviceWelding from "@/assets/service-welding.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Power Engineering Services Company" },
      {
        name: "description",
        content:
          "PESC is Pakistan's leading EPC and maintenance company for oil, gas and power operators. Founded 2010, headquartered in Hyderabad.",
      },
      { property: "og:title", content: "About PESC" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const CLIENTS = [
  "OGDCL",
  "Mari Petroleum",
  "MPCL",
  "Engro Corp",
  "PARCO",
  "Joint Engineering Services",
];

const PRINCIPLES = [
  {
    n: "01",
    t: "Welding & Fabrication",
    d: "Structural, pressure and pipeline welding executed to international codes with in-house QA/QC.",
  },
  {
    n: "02",
    t: "Maintenance Services",
    d: "Planned and emergency maintenance for production-critical equipment across gas condensate and refinery assets.",
  },
  {
    n: "03",
    t: "24/7 Field Support",
    d: "A dedicated call centre and mobilisation team on standby for turnaround and outage response.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            One partner for engineering,{" "}
            <span className="text-primary">procurement</span> and{" "}
            <span className="text-primary">construction</span>.
          </>
        }
        description="PESC is a service provider to Pakistan's oil, gas and power industry. We design, build, operate and maintain oil & gas facilities with a reputation for commitment, delivery and operational excellence."
      />

      {/* Company overview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — Company Overview
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
              Total engineering solutions for the power and hydrocarbon
              sector.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Power Engineering Services Company is an engineering,
                procurement and construction company providing total solutions
                to the Power, Energy and Oil & Gas sector. Our scope covers
                engineering, procurement, project management, fabrication,
                installation and commissioning for project owners and
                operators.
              </p>
              <p>
                PESC was established in 2010 and is owned by Abdul Khalique
                Mohsin. It is headquartered in Hyderabad and operates all
                across Pakistan.
              </p>
              <p>
                Our teams design and build oil & gas infrastructure, operate
                and maintain live assets, and train personnel to competency
                and assurance frameworks agreed with each client.
              </p>
            </div>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6 border-b border-border pb-10">
              {[
                ["2010", "Established"],
                ["54", "Employees"],
                ["50+", "Projects"],
                ["6", "Core disciplines"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-5xl font-bold">{k}</div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
              >
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <div>
                  <h3 className="text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={serviceMaintenance}
          alt="Gas processing at dusk"
          loading="lazy"
          width={1200}
          height={1400}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="max-w-3xl text-balance text-3xl font-bold leading-[1.15] sm:text-5xl">
              “We respond to each client's needs — helping them transform the
              value of their assets across the oil and gas life cycle.”
            </p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — Our Clients
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
              A track record with the operators who move Pakistan's energy.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              National oil & gas majors, upstream operators, EPC integrators
              and refiners — long-term partners who return contract after
              contract.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center bg-card px-6 py-12 text-center font-display text-lg font-bold text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="absolute inset-0">
            <img
              src={serviceWelding}
              alt=""
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/60" />
          </div>
          <div className="relative grid gap-10 p-10 sm:p-16 lg:grid-cols-2">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                — How we operate
              </div>
              <h3 className="mt-4 text-3xl font-bold sm:text-4xl text-white">
                Delivery-first. Safety non-negotiable.
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Zero-harm HSE culture across every site and every shift.",
                "In-house engineering, QA/QC and NDT — no hand-offs.",
                "Codes: ASME, API, AWS, ASTM — applied and audited.",
                "Cost, schedule and quality reported weekly to the client.",
              ].map((v) => (
                <li key={v} className="flex gap-3 text-white/95">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}