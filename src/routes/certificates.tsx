import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageHero } from "@/components/page-hero";
import {
  Award,
  Building2,
  FileCheck2,
  Leaf,
  HardHat,
  Download,
  Eye,
  X,
  FileText,
  ExternalLink,
} from "lucide-react";

// PDF Asset Imports
import pecPdf from "@/assets/certificates/PEC-PVT-LTD_2026.pdf";
import iso14001Pdf from "@/assets/certificates/POWER ENGINEERING - ISO 14001-.pdf";
import iso45001Pdf from "@/assets/certificates/POWER ENGINEERING - ISO 45001-.pdf";
import iso9001Pdf from "@/assets/certificates/POWER ENGINEERING - ISO 9001-.pdf";
import secpPdf from "@/assets/certificates/SECP_PES.pdf";

export const Route = createFileRoute("/certificates")({
  component: Certificates,
  head: () => ({
    meta: [
      { title: "Certifications & Registrations — PES" },
      {
        name: "description",
        content:
          "Official corporate registrations, ISO standards certifications (9001, 14001, 45001), and regulatory compliance (PEC, SECP) for Power Engineering Services.",
      },
      { property: "og:title", content: "Certifications & Registrations — PES" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
});

interface Certificate {
  id: string;
  title: string;
  authority: string;
  category: "corporate" | "iso";
  categoryLabel: string;
  desc: string;
  fileUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  regNo?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "pec",
    title: "PEC Registration Certificate",
    authority: "Pakistan Engineering Council",
    category: "corporate",
    categoryLabel: "Corporate & Regulatory",
    desc: "Active operator and constructor license to execute engineering works and projects under the PEC statutory framework in Pakistan.",
    fileUrl: pecPdf,
    icon: Award,
    regNo: "Licence No: 40994",
  },
  {
    id: "secp",
    title: "SECP Certificate of Incorporation",
    authority: "Securities and Exchange Commission of Pakistan",
    category: "corporate",
    categoryLabel: "Corporate & Regulatory",
    desc: "Official corporate incorporation document registering Power Engineering Services as a Private Limited company.",
    fileUrl: secpPdf,
    icon: Building2,
    regNo: "Corporate Universal ID: 0153406",
  },
  {
    id: "iso9001",
    title: "ISO 9001:2015 Quality Management",
    authority: "Universal Registrars (Accredited by IAS)",
    category: "iso",
    categoryLabel: "ISO Standards",
    desc: "Certified Quality Management System verifying that our fabrication, welding, construction, maintenance, and EPC works meet international standards.",
    fileUrl: iso9001Pdf,
    icon: FileCheck2,
    regNo: "Certificate: Q-205022216",
  },
  {
    id: "iso14001",
    title: "ISO 14001:2015 Environmental",
    authority: "Universal Registrars (Accredited by IAS)",
    category: "iso",
    categoryLabel: "ISO Standards",
    desc: "Certified Environmental Management System validating our operational procedures for waste reduction, energy efficiency, and eco-safety.",
    fileUrl: iso14001Pdf,
    icon: Leaf,
    regNo: "Certificate: E-205022216",
  },
  {
    id: "iso45001",
    title: "ISO 45001:2018 Health & Safety",
    authority: "Universal Registrars (Accredited by IAS)",
    category: "iso",
    categoryLabel: "ISO Standards",
    desc: "Certified Occupational Health and Safety Management System validating our zero-harm policies, risk assessments, and site welfare compliance.",
    fileUrl: iso45001Pdf,
    icon: HardHat,
    regNo: "Certificate: O-205022216",
  },
];

const TABS = [
  { id: "all", label: "All Credentials" },
  { id: "corporate", label: "Corporate & Regulatory" },
  { id: "iso", label: "ISO Standards" },
] as const;

function Certificates() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const filteredCertificates = CERTIFICATES.filter(
    (c) => activeTab === "all" || c.category === activeTab,
  );

  // Lock body scroll when PDF modal is open
  useEffect(() => {
    if (previewPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [previewPdf]);

  return (
    <>
      <PageHero
        eyebrow="Compliance & Standards"
        title={
          <>
            Certified quality, safety and <span className="text-primary">regulatory</span>{" "}
            compliance.
          </>
        }
        description="Power Engineering Services SMC PVT LTD maintains full corporate registrations and global ISO standards, delivering absolute certainty and accountability to our clients."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 -mx-6 px-6 gap-2 border-b border-border scrollbar-none no-scrollbar whitespace-nowrap md:mx-0 md:px-0 md:flex-wrap md:whitespace-normal">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-block rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/40 text-foreground/75 hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-rise">
          {filteredCertificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {cert.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono font-medium text-muted-foreground/80">
                    {cert.authority}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.desc}</p>
                </div>

                <div className="mt-8 pt-5 border-t border-border/50 flex flex-col gap-4">
                  {cert.regNo && (
                    <div className="font-mono text-[10px] text-muted-foreground/75 tracking-wider">
                      {cert.regNo}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        // On mobile/tablet, open PDF directly in a new tab for a better native experience
                        if (window.innerWidth < 768) {
                          window.open(cert.fileUrl, "_blank");
                        } else {
                          setPreviewPdf(cert.fileUrl);
                          setPreviewTitle(cert.title);
                        }
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Document
                    </button>
                    <a
                      href={cert.fileUrl}
                      download={cert.title + ".pdf"}
                      className="inline-flex items-center justify-center rounded-xl border border-border p-2.5 text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                      title="Download PDF"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Subtle light background glow effect on hover */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/85 backdrop-blur-md">
          <div className="relative w-full max-w-5xl h-[85vh] flex flex-col rounded-3xl border border-border bg-card shadow-2xl overflow-hidden animate-rise">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-background/50 backdrop-blur-sm">
              <div className="max-w-[50%] sm:max-w-none">
                <h3 className="text-sm sm:text-lg font-bold text-foreground truncate">
                  {previewTitle}
                </h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
                  Power Engineering Services SMC PVT LTD
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={previewPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border px-2.5 py-2 sm:px-4 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                  title="Open in New Tab"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Open in New Tab</span>
                </a>
                <a
                  href={previewPdf}
                  download={previewTitle + ".pdf"}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-2.5 py-2 sm:px-4 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  title="Download"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Download</span>
                </a>
                <button
                  onClick={() => {
                    setPreviewPdf(null);
                    setPreviewTitle("");
                  }}
                  className="rounded-full p-1.5 sm:p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="flex-1 bg-ink/30 relative flex flex-col items-center justify-center">
              <iframe
                src={`${previewPdf}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none hidden md:block"
                title={previewTitle}
              />

              {/* Fallback & mobile notification */}
              <div className="p-8 text-center max-w-md md:hidden">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <FileText className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Mobile PDF Preview</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Mobile web browsers typically do not support embedding PDF files. You can open the
                  certificate in a new tab or download it directly to view it.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={previewPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open PDF in New Tab
                  </a>
                  <a
                    href={previewPdf}
                    download={previewTitle + ".pdf"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
