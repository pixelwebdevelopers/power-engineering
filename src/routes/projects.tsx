import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — PES" },
      {
        name: "description",
        content:
          "Completed EPC, fabrication and turnaround projects delivered by Power Engineering Services Company for OGDCL, MPCL, Mari Petroleum and PARCO.",
      },
      { property: "og:title", content: "Projects — PES" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

type Project = {
  no: string;
  client: string;
  year?: string;
  name: string;
  desc: string;
  tag: "Turnaround" | "Fabrication" | "Pipeline" | "Construction";
};

const PROJECTS: Project[] = [
  {
    no: "102",
    client: "",
    year: "2026",
    name: "Separator Piping Installation",
    desc: "Welding fabrication and installation services for Separator piping for Sahito-1 & Bitrism East-1 wells at Sinjhoro Gas Plant",
    tag: "Fabrication",
  },
  {
    no: "101",
    client: "",
    year: "2026",
    name: "Interconnecting Piping Services",
    desc: "Welding fabrication and installation services for interconnecting piping for integration of additional Membrane Bank and coalescer filter vessel Fc-2661 at Sinjhoro Gas Plant",
    tag: "Fabrication",
  },
  {
    no: "100",
    client: "",
    year: "2026",
    name: 'Pipeline Laying 6"x5 KM',
    desc: 'Pipeline Laying 6"x5 KM from Sahito-1 to Suleman Gathering Facility',
    tag: "Pipeline",
  },
  {
    no: "99",
    client: "PARCO",
    year: "2026",
    name: "Gantry Loading Services",
    desc: "Services required for gantry loading of pol & Asphalt products at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "98",
    client: "",
    year: "2026",
    name: "Manpower Services (Tando Alam)",
    desc: "Hiring Of Manpower Services for Tando Alam Complex at TOC Field",
    tag: "Turnaround",
  },
  {
    no: "97",
    client: "",
    year: "2026",
    name: "Manpower Services (Kunnar KPD)",
    desc: "Hiring Of Manpower Services for Kunnar KPD Tat Field",
    tag: "Turnaround",
  },
  {
    no: "96",
    client: "PARCO",
    year: "2025",
    name: "Gantry Loading Services",
    desc: "Services required for gantry loading of pol & Asphalt products at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "95",
    client: "",
    year: "2025",
    name: "Gun Barrel Tank Cleaning",
    desc: "Cleaning For Gun Barrel Tank # 1 (6000 BBLs capacity) at Lashari Center Facility Tando Alam Field",
    tag: "Turnaround",
  },
  {
    no: "93",
    client: "",
    year: "2025",
    name: "Permeate Header Capacity Enhancement",
    desc: "Services for permeate Header capacity Enhancement fabrication welding piping Sinjhoro field",
    tag: "Fabrication",
  },
  {
    no: "92",
    client: "MARI ENERGIES LIMITED",
    year: "2025",
    name: "Pipeline Relocation (zs-03)",
    desc: "Relocation of pipeline of zs-03 Zarghun Gas Field",
    tag: "Pipeline",
  },
  {
    no: "91",
    client: "PARCO",
    year: "2025",
    name: "Raw Water Tank Scaffolding",
    desc: "Services for scaffolding of Raw Water Tank 925 TKIA at Mehmood Kot Field",
    tag: "Construction",
  },
  {
    no: "90",
    client: "PARCO",
    year: "2025",
    name: "Utility Boiler Maintenance",
    desc: "Services required for Annual maintenance utility boiler 940 BIA at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "89",
    client: "PARCO",
    year: "2025",
    name: "Tank Internal Cleaning (945-TK 43)",
    desc: "Internal cleaning of Tank 945 -TK 43 at Mehmood Kot field",
    tag: "Turnaround",
  },
  {
    no: "88",
    client: "PARCO",
    year: "2024",
    name: "Tank Internal Cleaning (945-TK 83)",
    desc: "Internal cleaning of Tank 945 -TK 83 at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "87",
    client: "PARCO",
    year: "2024",
    name: "Tank Internal Cleaning (945-TK 1005)",
    desc: "Internal cleaning of Tank 945 -TK 1005 at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "86",
    client: "PARCO",
    year: "2024",
    name: "Tank Scaffolding & Painting",
    desc: "Services for painting and scaffolding of LPG tank 945 -TK 32 and Diesel Tank 945 -TK 23",
    tag: "Construction",
  },
  {
    no: "85",
    client: "PARCO",
    year: "2024",
    name: "Scaffolding & Cladding Services",
    desc: "Services for installation of scaffolding insulation cladding",
    tag: "Construction",
  },
  {
    no: "84",
    client: "PARCO",
    year: "2024",
    name: "Fall Arrest System Installation",
    desc: "Services for fabrication and installation of Fall Arrest system at Mehmood Kot field",
    tag: "Construction",
  },
  {
    no: "83",
    client: "PARCO",
    year: "2024",
    name: "Gantry Loading Services",
    desc: "Services required for gantry loading of pol & Asphalt products at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "82",
    client: "",
    year: "2024",
    name: "Pipeline Repair Job",
    desc: 'Welding fabrication plant repair job 6"pipeline at Sinjhoro Field',
    tag: "Pipeline",
  },
  {
    no: "81",
    client: "",
    year: "2024",
    name: "Tank Cleaning & Dismantling",
    desc: "Tank cleaning Dismantling Cutting Complete tank at Tando Alam TOC Field",
    tag: "Turnaround",
  },
  {
    no: "80",
    client: "",
    year: "2024",
    name: "Sandblasting & FRP Coating",
    desc: "Services for sand blasting and FRP coating tank at Tando Alam TOC Field",
    tag: "Fabrication",
  },
  {
    no: "79",
    client: "MPCL",
    year: "2024",
    name: "Produced Water Management Header",
    desc: "Mechanical civil work for produced water management/ drain header pipe line Mari Petroleum Company Limited Daharki Field",
    tag: "Construction",
  },
  {
    no: "78",
    client: "",
    year: "2024",
    name: "Zero Flare Line Installation",
    desc: "Welding fabrication and installation of zero flair line at Sinjhoro plant",
    tag: "Pipeline",
  },
  {
    no: "77",
    client: "",
    year: "2023",
    name: "Piping Spools Fabrication",
    desc: "Welding & Fabrication of Piping Spools For SINJHORO-BOBI Gas Transfer Project",
    tag: "Fabrication",
  },
  {
    no: "76",
    client: "",
    year: "2023",
    name: "Pipeline Laying 4inch x 11.7 km",
    desc: "Fabrication Welding & Installation of Remaining Pipeline, Well Head Assembly and Piping work for Sanghar X-1 at Singhoro Plant",
    tag: "Pipeline",
  },
  {
    no: "75",
    client: "Tando Alam Field",
    year: "2023",
    name: "Fire Tube Fabrication",
    desc: "Fabrication & Welding of Fire Tube-A, U-Type for Desalter Unit-B",
    tag: "Fabrication",
  },
  {
    no: "74",
    client: "",
    year: "2023",
    name: "Companion Flange Replacement",
    desc: "Replacement of Damaged Companion Flange of WHA L-Spool of Hakim Dhaio-02 well at sinjhoro Gas Filed",
    tag: "Fabrication",
  },
  {
    no: "73",
    client: "",
    year: "2023",
    name: "WHA Fabrication & Installation",
    desc: "Fabrication, Welding & Installation works for WHA of Chak Dim-5 South # 3 at Bobi Gas Filed",
    tag: "Fabrication",
  },
  {
    no: "72",
    client: "",
    year: "2023",
    name: "Well Line Piping Laying",
    desc: "Fabrication, Welding works for Laying of Chak Dim-5 South#3 at Bobi Gas Filed",
    tag: "Pipeline",
  },
  {
    no: "71",
    client: "",
    year: "2023",
    name: "Knockout Vessels Fabrication",
    desc: "Fabrication, Welding works for 04 Nos, Knockout Vessels for Upcoming wells at Sinjhoro Gas Field",
    tag: "Fabrication",
  },
  {
    no: "70",
    client: "PARCO",
    year: "2023",
    name: "Gantry Loading Services",
    desc: "Gantry Loading of POL & Asphalt Products at Mehmood Kot Field",
    tag: "Turnaround",
  },
  {
    no: "69",
    client: "PARCO",
    year: "2023",
    name: "LPG Sphere Scaffolding & Painting",
    desc: "Internal Scaffolding & Painting of LPG Sphere (945-TK30)",
    tag: "Construction",
  },
  {
    no: "68",
    client: "PARCO",
    year: "2023",
    name: "Tank Bottom Replacement",
    desc: "Bottom Replacement of Emulsion Breaking Tank (930-TK7)",
    tag: "Construction",
  },
  {
    no: "67",
    client: "PARCO",
    year: "2023",
    name: "Tank Sandblasting & Painting",
    desc: "Sandblasting & Painting of Emulsion Breaking Tank (930-TK7)",
    tag: "Construction",
  },
  {
    no: "66",
    client: "PARCO",
    year: "2023",
    name: "Officer Sports Club Paint Work",
    desc: "Paint Work at PARCO Officer Sports Club",
    tag: "Construction",
  },
  {
    no: "65",
    client: "PARCO",
    year: "2023",
    name: "AABU Reactor Maintenance",
    desc: "Maintenance & Cleaning of AABU Reactor (1020-R101)",
    tag: "Turnaround",
  },
  {
    no: "64",
    client: "PARCO",
    year: "2023",
    name: "Process Lines Repainting",
    desc: "Repainting of Process Lines at Offsite (U & OM)",
    tag: "Construction",
  },
  {
    no: "63",
    client: "PARCO",
    year: "2023",
    name: "LPG Sphere Internal Scaffolding",
    desc: "Internal Scaffolding of LPG Sphere (945-TK31)",
    tag: "Construction",
  },
  {
    no: "62",
    client: "PARCO",
    year: "2023",
    name: "Miscellaneous Civil Repair",
    desc: "Miscellaneous Civil Repair & Maintenance work in OM area",
    tag: "Construction",
  },
  {
    no: "61",
    client: "PARCO",
    year: "2023",
    name: "Shed Fabrication Erection",
    desc: "Shed Fabrication Erection at Mehmood Kot Field",
    tag: "Construction",
  },
  {
    no: "60",
    client: "PARCO",
    year: "2023",
    name: "Double Block & Bleed Installation",
    desc: "Fabrication and Installation of Double Block and Bleed Arrangement on MFM Line to (945-TK1005)",
    tag: "Fabrication",
  },
  {
    no: "59",
    client: "PARCO",
    year: "2023",
    name: "Heat Exchanger Preservation",
    desc: "Preservation of Heat Exchanger Test Ring",
    tag: "Turnaround",
  },
  {
    no: "58",
    client: "PARCO",
    year: "2023",
    name: "Miscellaneous Tank Activities",
    desc: "Miscellaneous activities to be Carried on MCR Tank",
    tag: "Turnaround",
  },
  {
    no: "57",
    client: "PARCO",
    year: "2023",
    name: "Utility Boiler Cleaning",
    desc: "Cleaning of Utility Boiler 940-B1C",
    tag: "Turnaround",
  },
  {
    no: "56",
    client: "PARCO",
    year: "2022-23",
    name: "AABU Reactor Maintenance",
    desc: "Maintenance & Cleaning of AABU Reactor (1020-R101)",
    tag: "Turnaround",
  },
  {
    no: "55",
    client: "PARCO",
    year: "2022-23",
    name: "Pyrometer Cable Laying",
    desc: "Cable laying of Pyrometer",
    tag: "Construction",
  },
  {
    no: "54",
    client: "PARCO",
    year: "2022-23",
    name: "Miscellaneous Tank Activities",
    desc: "Miscellaneous activities to be carried on MCR Tank",
    tag: "Turnaround",
  },
  {
    no: "53",
    client: "PARCO",
    year: "2022-23",
    name: "AABU Area Civil Repair",
    desc: "Civil Repair and Maintenance work in AABU Area",
    tag: "Construction",
  },
  {
    no: "52",
    client: "PARCO",
    year: "2022-23",
    name: "Utility Boiler Cleaning",
    desc: "Maintenance / Cleaning of utility Boiler (940-B1B)",
    tag: "Turnaround",
  },
  {
    no: "51",
    client: "",
    year: "2022",
    name: "Water Bath Heater Gas/Coil Fabrication",
    desc: "Fabrication of New Gas/Coil of Water Bath Heater",
    tag: "Fabrication",
  },
  {
    no: "50",
    client: "",
    year: "2022",
    name: "Water Bath Heater Welding & Repair",
    desc: "Gasket preparation, Installation and welding repair job of nozzle of Water Bath Heater",
    tag: "Fabrication",
  },
  {
    no: "49",
    client: "PARCO",
    year: "2022",
    name: "Heat Exchanger Preservation",
    desc: "Preservation of Heat Exchanger Test Ring",
    tag: "Turnaround",
  },
  {
    no: "48",
    client: "PARCO",
    year: "2022",
    name: "Fire Water Lines Painting",
    desc: "Painting of Fire Water Lines in Process Areas",
    tag: "Construction",
  },
  {
    no: "47",
    client: "PARCO",
    year: "2022",
    name: "Soot Blowers Preventive Maintenance",
    desc: "06 Months Preventive Maintenance of Soot Blowers",
    tag: "Turnaround",
  },
  {
    no: "46",
    client: "PARCO",
    year: "2022",
    name: "Tube Bundle Fabrication",
    desc: "Fabrication of Tube Bundle",
    tag: "Fabrication",
  },
  {
    no: "45",
    client: "PARCO",
    year: "2022",
    name: "LPG Sphere Maintenance",
    desc: "Internal Scaffolding, Sandblasting and Painting of LPG Sphere (945-TK31)",
    tag: "Construction",
  },
  {
    no: "44",
    client: "PARCO",
    year: "2022",
    name: "Utility Boiler Cleaning",
    desc: "Maintenance and Cleaning of Utility Boiler (940-B1A)",
    tag: "Turnaround",
  },
  {
    no: "43",
    client: "PARCO",
    year: "2022",
    name: "Valves Overhauling & Refurbishment",
    desc: "Valves Overhauling & Refurbishment",
    tag: "Turnaround",
  },
  {
    no: "42",
    client: "PARCO",
    year: "2022",
    name: "Patch Welding (100-H1)",
    desc: "Patch Welding on (100-H1)",
    tag: "Fabrication",
  },
  {
    no: "41",
    client: "PARCO",
    year: "2022",
    name: "Sanitary Water Discharge Line",
    desc: "Replacement of Treated Sanitary Water Discharge Line",
    tag: "Pipeline",
  },
  {
    no: "40",
    client: "PARCO",
    year: "2022",
    name: "Utility Boiler Maintenance",
    desc: "Annual Maintenance and Inspection of Utility Boiler (940-B1C)",
    tag: "Turnaround",
  },
  {
    no: "39",
    client: "PARCO",
    year: "2022",
    name: "Utility Boiler Maintenance",
    desc: "Maintenance and Inspection of Utility Boiler (940-B1B)",
    tag: "Turnaround",
  },
  {
    no: "38",
    client: "PARCO",
    year: "2022",
    name: "Utility Boiler Maintenance",
    desc: "Annual Maintenance & Inspection of Utility Boiler (940-B1C)",
    tag: "Turnaround",
  },
  {
    no: "37",
    client: "PARCO",
    year: "2022",
    name: "Miscellaneous Activities Assistance",
    desc: "Assistance required for Miscellaneous activities to be Carried",
    tag: "Turnaround",
  },
  {
    no: "36",
    client: "PARCO",
    year: "2022",
    name: "AABU Reactor Cleaning",
    desc: "Cleaning of AABU Reactor (1020R 101)",
    tag: "Turnaround",
  },
  {
    no: "35",
    client: "PARCO",
    year: "2022",
    name: "Utility Boiler Cleaning",
    desc: "Maintenance / Cleaning of Utility Boiler (940-BIB)",
    tag: "Turnaround",
  },
  {
    no: "34",
    client: "PARCO",
    year: "2022",
    name: "Valves Overhauling & Refurbishment Manpower",
    desc: "Manpower Supply for Services Valves Overhauling & Refurbishment",
    tag: "Turnaround",
  },
  {
    no: "33",
    client: "PARCO",
    year: "2022",
    name: "Patch Welding Manpower",
    desc: "Manpower Supply for Services Patch welding (100H1)",
    tag: "Fabrication",
  },
  {
    no: "32",
    client: "PARCO",
    year: "2022",
    name: "Sanitary Replacement Manpower",
    desc: "Manpower Supply for Services Replacement of Treated Sanitary",
    tag: "Pipeline",
  },
  {
    no: "31",
    client: "",
    year: "2022",
    name: "Flow Line Erection (Metharo #1)",
    desc: 'Fabrication, construction & Erection for preparation connection with existing flow line 6" Dia sch 80 of Metharo well # 1 for Chak dhim #5 at BOC field',
    tag: "Pipeline",
  },
  {
    no: "30",
    client: "",
    year: "2022",
    name: "Wellhead Assembly Connection (Lala Jamali #2)",
    desc: 'Fabrication construction erection for preparation connection wellhead assembly 4" Dia flow line Lala jamali #2 at sinjhoro field',
    tag: "Pipeline",
  },
  {
    no: "29",
    client: "",
    year: "2022",
    name: "Well Head Assembly Connection (Chak Dhim)",
    desc: 'Fabrication construction erection for preparation connection well head assembly 6" Dia flow line Chak dhim #2 and chack dhim #3 connected at BOC field OGDCL',
    tag: "Pipeline",
  },
  {
    no: "28",
    client: "",
    year: "2022",
    name: "Piping Hydrotesting & Erection",
    desc: "Cutting, welding, Fabrication, of 14-inch sch 80 pipe, Hydrotesting Erection/Installation of cold work Joints.",
    tag: "Pipeline",
  },
  {
    no: "08",
    client: "Sinjhoro",
    year: "2019",
    name: "Plant Outage 2019",
    desc: "Sinjhoro ATA 2019 covering maintenance and up-gradation of aged plant equipment.",
    tag: "Turnaround",
  },
  {
    no: "07",
    client: "Sinjhoro",
    year: "2019",
    name: "Jhakro Flareline",
    desc: 'Fabrication, welding & erection of Jhakro Flareline 4" and 6" including hydro testing, flashing, air blowing and radiography at Sinjhoro Gas Condensate Field.',
    tag: "Fabrication",
  },
  {
    no: "06",
    client: "Mari Petroleum Company",
    year: "2018",
    name: "Warehouse Shed Construction",
    desc: "Construction of 52' × 140' warehouse shed at Mari Petroleum Company Limited, Zarghun.",
    tag: "Construction",
  },
  {
    no: "05",
    client: "Mari Petroleum Company",
    year: "2017",
    name: "Plant Outage 2017",
    desc: "Mechanical contractor during ATA 2017 at Sujawal Gas Condensate Field.",
    tag: "Turnaround",
  },
  {
    no: "04",
    client: "Sinjhoro",
    year: "2016",
    name: "Membrane Unit Installation",
    desc: 'Installation of Membrane Skid, Coalescer Filter and Fin Fan Cooler. Fabrication, welding & erection of 2", 4", 6", 8" and 10" pipelines including hydro, flashing, air blowing and radiography.',
    tag: "Fabrication",
  },
  {
    no: "03",
    client: "Bobi Oil Complex",
    year: "2016",
    name: "Plant Outage 2016",
    desc: "Mechanical contractor for maintenance of plant during Annual Turn Around 2016 at Bobi Oil Complex.",
    tag: "Turnaround",
  },
  {
    no: "02",
    client: "Sinjhoro",
    year: "2016",
    name: "Plant Outage 2016",
    desc: "Served as mechanical contractor for Annual Turn Around 2016 at Sinjhoro Gas Condensate Field, OGDCL.",
    tag: "Turnaround",
  },
  {
    no: "01",
    client: "Sinjhoro",
    year: "2015",
    name: "Plant Outage",
    desc: "PES successfully completed Sinjhoro ATA 2015 covering maintenance and up-gradation of aged plant equipment.",
    tag: "Turnaround",
  },
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
          p.desc.toLowerCase().includes(t) ||
          (p.year && p.year.toLowerCase().includes(t))
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
            100+ projects delivered for Pakistan's{" "}
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
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground flex flex-col gap-1">
                <span>{p.client}</span>
                {p.year && <span className="text-[10px] text-primary/70">Year: {p.year}</span>}
              </div>
              <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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
