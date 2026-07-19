import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Wrench,
  Shield,
  Layers,
  Scissors,
  Hammer,
  Puzzle,
  ClipboardCheck,
  Paintbrush,
  Monitor,
  Droplet,
  Leaf,
  Activity,
  Zap,
  Cpu,
  ArrowUpRight,
  Settings,
  ShieldCheck,
  Building2,
  Phone,
} from "lucide-react";

// Import custom generated images
import mfgExcellenceHero from "@/assets/mfg-excellence-hero.png";
import mfgWelderSparks from "@/assets/mfg-welder-sparks.png";
import mfgPressureVessel from "@/assets/mfg-pressure-vessel.png";
import mfgStorageTanks from "@/assets/mfg-storage-tanks.png";
import mfgSteelStructure from "@/assets/mfg-steel-structure.png";
import mfgIndustrialPiping from "@/assets/mfg-industrial-piping.png";
import mfgBoilerWorkshop from "@/assets/mfg-boiler-workshop.png";
import mfgAfbcBoiler from "@/assets/mfg-afbc-boiler.png";

export const Route = createFileRoute("/manufacturing")({
  component: Manufacturing,
  head: () => ({
    meta: [
      { title: "Manufacturing Excellence — PES" },
      {
        name: "description",
        content:
          "Power Engineering Services delivers integrated manufacturing solutions including structural steel fabrication, pipe spool fabrication, pressure vessels, storage tanks, and industrial boilers.",
      },
      { property: "og:title", content: "Manufacturing Excellence — PES" },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
});

// Custom inline SVG icons for specific structural steel/piping visual representations
function IBeamIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 4h14M5 20h14M12 4v16M8 8h8M8 16h8" />
    </svg>
  );
}

function PipingIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 12h8m4 0h6M11 6v12m4-12v12M7 6v12M17 6v12" />
    </svg>
  );
}

function BoilerIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M8.5 8.5l2.5 2.5M15.5 15.5l-2.5-2.5" />
    </svg>
  );
}

function Manufacturing() {
  const pillars = [
    {
      icon: IBeamIcon,
      title: "STRUCTURAL FABRICATION",
      description:
        "Manufacture and fabrication of structural steel components for industrial facilities and projects.",
    },
    {
      icon: PipingIcon,
      title: "INDUSTRIAL PIPING",
      description:
        "Precision fabrication of piping systems and pipe spools for process and utility applications.",
    },
    {
      icon: Shield,
      title: "QUALITY MANUFACTURING",
      description:
        "Controlled production supported by qualified welding, inspection and quality assurance processes.",
    },
  ];

  const services = [
    {
      icon: IBeamIcon,
      title: "STRUCTURAL STEEL FABRICATION",
      description:
        "Manufacture and fabrication of structural steel components for industrial facilities and infrastructure.",
    },
    {
      icon: PipingIcon,
      title: "PIPE SPOOL FABRICATION",
      description:
        "Precision fabrication of pipe spools and assemblies in all material classes and sizes.",
    },
    {
      icon: Layers,
      title: "PRESSURE VESSELS",
      description:
        "Design support and fabrication of pressure vessels as per required codes and standards.",
    },
    {
      icon: Building2,
      title: "STORAGE TANKS",
      description:
        "Fabrication of storage tanks for liquids, chemicals and industrial applications.",
    },
    {
      icon: Settings,
      title: "MECHANICAL EQUIPMENT",
      description:
        "Manufacture and assembly of mechanical equipment for process and utility services.",
    },
    {
      icon: PipingIcon,
      title: "INDUSTRIAL PIPING",
      description:
        "Fabrication and installation of industrial piping systems for process and utility plants.",
    },
    // Custom added items for richer content
    {
      icon: Zap,
      title: "ELECTRICAL & INSTRUMENTATION SKIDS",
      description:
        "Assembly and integration of skid-mounted electrical control panels and instrumentation systems.",
    },
    {
      icon: ShieldCheck,
      title: "MODULAR SKID ASSEMBLIES",
      description:
        "Complete structural, piping, and electrical integration for ready-to-install process skids.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      icon: Monitor,
      title: "ENGINEERING",
      description: "Detailed engineering and planning to define scope and specifications.",
    },
    {
      num: "02",
      icon: Layers,
      title: "MATERIAL PREPARATION",
      description: "Material selection and preparation as per project requirements.",
    },
    {
      num: "03",
      icon: Scissors,
      title: "CUTTING",
      description: "Precision cutting using advanced equipment for accuracy and quality.",
    },
    {
      num: "04",
      icon: IBeamIcon,
      title: "FABRICATION",
      description: "Shaping and fabrication of components with skilled workmanship.",
    },
    {
      num: "05",
      icon: Flame,
      title: "WELDING",
      description: "Certified welding procedures ensure strength and structural integrity.",
    },
    {
      num: "06",
      icon: Puzzle,
      title: "ASSEMBLY",
      description: "Sub-assemblies and final assemblies prepared for inspection.",
    },
    {
      num: "07",
      icon: ClipboardCheck,
      title: "INSPECTION",
      description: "Rigorous inspection and testing to ensure compliance and quality.",
    },
    {
      num: "08",
      icon: Paintbrush,
      title: "SURFACE TREATMENT",
      description: "Surface preparation and protective coating for durability and performance.",
    },
    {
      num: "09",
      icon: Wrench,
      title: "INSTALLATION",
      description: "Safe and efficient installation at site by experienced teams.",
    },
  ];

  const boilerTypes = [
    {
      icon: BoilerIcon,
      title: "FIRE TUBE BOILERS",
      description: "Package type fire tube boilers for reliable steam generation.",
    },
    {
      icon: Activity,
      title: "WASTE HEAT RECOVERY BOILERS",
      description: "Waste heat recovery boilers for gas / HFO engines.",
    },
    {
      icon: Building2,
      title: "HEAT RECOVERY STEAM GENERATORS",
      description: "Heat recovery steam generators behind gas turbines.",
    },
    {
      icon: Droplet,
      title: "WATER TUBE BOILERS",
      description: "Direct fired water tube boilers for high efficiency and durability.",
    },
    {
      icon: Leaf,
      title: "BIOMASS & BAGASSE BOILERS",
      description: "Bagasse fired and biomass fired boilers for sustainable energy.",
    },
    {
      icon: Flame,
      title: "SPECIAL FUEL BOILERS",
      description: "Bagasse / biogas fired boilers and slop fired boilers.",
    },
    {
      icon: Cpu,
      title: "AFBC BOILERS",
      description: "Atmospheric fluidized bed combustion boilers for coal & biomass firing.",
    },
    {
      icon: ShieldCheck,
      title: "WASTE HEAT & WASTE FIRED BOILERS",
      description: "Cement waste heat recovery boilers and poultry waste fired boilers.",
    },
  ];

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* SECTION 1: MANUFACTURING EXCELLENCE (Hero) */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl uppercase">
              MANUFACTURING
              <br />
              <span className="text-primary">EXCELLENCE</span>
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-primary" />
              <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                Engineering Precision. Manufacturing Excellence.
              </p>
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Power Engineering Services delivers integrated manufacturing solutions that support
              industrial construction, plant maintenance and infrastructure projects across
              Pakistan. Backed by experienced fabrication teams, modern workshop capabilities and
              strict quality standards, we manufacture structural steel, piping systems, pressure
              equipment and custom-engineered assemblies for the oil & gas, petrochemical, power,
              fertilizer and industrial sectors.
            </p>
          </div>

          {/* Right hero image */}
          <div className="lg:col-span-6">
            <div className="aspect-[16/11] overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={mfgExcellenceHero}
                alt="Manufacturing Excellence Workshop"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
              />
            </div>
          </div>
        </div>

        {/* Three pillars below */}
        <div className="mt-20 grid gap-8 border-t border-border/80 pt-16 sm:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/80 text-primary border border-border/40">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold tracking-wider text-foreground uppercase">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom double image split layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <img
              src={mfgWelderSparks}
              alt="Welding Fabrication"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <img
              src={mfgSteelStructure}
              alt="Steel Grid Structure"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: FABRICATION & MANUFACTURING SERVICES */}
      <section className="border-t border-border/60 bg-ink/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-0.5 w-16 bg-primary" />
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl uppercase">
              FABRICATION & MANUFACTURING SERVICES
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left side list of services */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-secondary/20"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/80 text-primary border border-border/40 transition-colors group-hover:border-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold tracking-wider text-foreground uppercase group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right side images collage */}
            <div className="grid gap-6 lg:col-span-6">
              {/* Large top image */}
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border shadow-md">
                <img
                  src={mfgWelderSparks}
                  alt="Certified Welding"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>

              {/* 2x2 grid of smaller images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={mfgPressureVessel}
                    alt="Pressure Vessel Fabrication"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={mfgIndustrialPiping}
                    alt="Industrial Piping Spools"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={mfgStorageTanks}
                    alt="Storage Tanks Manufacturing"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <img
                    src={mfgSteelStructure}
                    alt="Steel Frame Construction"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKSHOP & MANUFACTURING PROCESS */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left side static image + text sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
              <div className="h-0.5 w-16 bg-primary" />
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl uppercase leading-[1.1]">
                WORKSHOP &
                <br />
                MANUFACTURING PROCESS
              </h2>
              <div className="mt-4 h-0.5 w-16 bg-primary" />

              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                A structured and disciplined manufacturing process ensures precision, quality and
                safety at every stage. From engineering to final installation, our workflow is built
                on proven methodology and strict quality control.
              </p>

              <div className="mt-12 aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-md">
                <img
                  src={mfgExcellenceHero}
                  alt="Process and Safety"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right side workflow timeline */}
            <div className="lg:col-span-7 relative pl-8 sm:pl-12">
              {/* Vertical line through timeline */}
              <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-border/80" />

              <div className="flex flex-col gap-10">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative flex gap-6 sm:gap-8 group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background text-[11px] font-mono font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow">
                        {step.num}
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/80 text-primary border border-border/40 shadow-sm transition-colors group-hover:border-primary">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-display text-base font-bold tracking-wider text-foreground uppercase group-hover:text-primary transition-colors flex items-center gap-2">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BOILER MANUFACTURING */}
      <section className="border-t border-border/60 bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left text */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                MANUFACTURING EXCELLENCE
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl uppercase">
                BOILER MANUFACTURING
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-3xl">
                PES manufactures a comprehensive range of high-performance boilers and heat recovery
                systems engineered for efficiency, reliability and long-term performance. Built with
                advanced design, quality materials and stringent manufacturing standards, our
                boilers serve diverse industries with safe, sustainable and cost-effective thermal
                solutions.
              </p>
            </div>

            {/* Right large image */}
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border/80 shadow-lg">
                <img
                  src={mfgBoilerWorkshop}
                  alt="Industrial Boiler Unit"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start border-t border-border/80 pt-16">
            {/* Column 1: Vertical Heading */}
            <div className="lg:col-span-4 border-l-2 border-primary pl-6 py-2">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground leading-[1.2]">
                ENGINEERED
                <br />
                FOR PERFORMANCE.
                <br />
                <span className="text-primary">BUILT TO LAST.</span>
              </h3>
              <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                ASME & National Standards Compliance
              </p>
            </div>

            {/* Column 2: 2-column list of boilers */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5">
              {boilerTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/80 text-primary border border-border/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold tracking-wider text-foreground uppercase">
                        {type.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 3: Secondary Boiler Image */}
            <div className="lg:col-span-3">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <img
                  src={mfgAfbcBoiler}
                  alt="AFBC Boiler Installation"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MANUFACTURING PROJECTS */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="h-0.5 w-16 bg-primary" />
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl uppercase">
                MANUFACTURING PROJECTS
              </h2>
              <p className="mt-4 text-base text-muted-foreground max-w-2xl">
                Delivering engineered manufacturing solutions with precision, quality and commitment
                across diverse industries.
              </p>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
            >
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          {/* Collage layout matching Screenshot 4 */}
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            {/* Large Grid Steel Frame (top right in screenshot, we'll place it as 8 cols right, and Welder as 4 cols left) */}
            <div className="relative group overflow-hidden rounded-3xl border border-border md:col-span-4 aspect-[4/3] md:aspect-auto md:h-[400px]">
              <img
                src={mfgWelderSparks}
                alt="Welding Erection"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Fabrication
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-white uppercase">
                  Precision Welded Components
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl border border-border md:col-span-8 aspect-[16/10] md:aspect-auto md:h-[400px]">
              <img
                src={mfgExcellenceHero}
                alt="Steel Frame Structures"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Structural
                </span>
                <h3 className="mt-1 font-display text-lg font-bold text-white uppercase">
                  Industrial Workshop Steel Framing
                </h3>
              </div>
            </div>

            {/* Bottom Row of 4 items */}
            <div className="relative group overflow-hidden rounded-2xl border border-border md:col-span-3 aspect-[4/3]">
              <img
                src={mfgPressureVessel}
                alt="Vessel Project"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-sm font-bold text-white uppercase">
                  Horizontal Pressure Vessel
                </h4>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-border md:col-span-3 aspect-[4/3]">
              <img
                src={mfgStorageTanks}
                alt="Tank Project"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-sm font-bold text-white uppercase">
                  Vertical Storage Reservoirs
                </h4>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-border md:col-span-3 aspect-[4/3]">
              <img
                src={mfgIndustrialPiping}
                alt="Piping Project"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-sm font-bold text-white uppercase">
                  Process Plant Utility Piping
                </h4>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-border md:col-span-3 aspect-[4/3]">
              <img
                src={mfgSteelStructure}
                alt="Construction Project"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-sm font-bold text-white uppercase">
                  On-site Steel Grid Erection
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-ink via-steel to-navy p-10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                LOOKING FOR A CLASS-ONE MANUFACTURING PARTNER?
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl uppercase">
                LET'S DISCUSS YOUR
                <br />
                FABRICATION NEEDS.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between rounded-full bg-primary px-7 py-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send Specifications
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="tel:+923337151155"
                className="inline-flex items-center justify-between rounded-full border border-border bg-background/20 px-7 py-5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary"
              >
                Call Support
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
