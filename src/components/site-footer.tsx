import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoUrl from "@/assets/pes-logo.png";
import pixelLogoUrl from "@/assets/pixel-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-ink">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoUrl} alt="PES" className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineering, Procurement and Construction for Pakistan's power, energy and oil & gas
              sector. Delivering capital efficiency and project certainty since 2010.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 animate-glow rounded-full bg-primary" />
              Operating in all provinces
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/services", "Services"],
                ["/projects", "Projects"],
                ["/team", "Team"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-foreground/70 transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>Fabrication & Welding</li>
              <li>Maintenance & Turnaround</li>
              <li>Construction & Engineering</li>
              <li>Non-Destructive Testing</li>
              <li>Chemical Cleaning</li>
              <li>Manpower Supply</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Headquarters
            </h4>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Mezzanine Floor G -1059/78, Wishan Nagar,
                  <br />
                  Phuleli Road, Haydrabad, Pakistan
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+923337151155" className="hover:text-primary">
                  +92 333 7151155
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@powereng.com.pk" className="hover:text-primary">
                  info@powereng.com.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Power Engineering Services (SMC) Pvt Ltd.</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground/80">Developed by</span>
            <a
              href="https://pixelwebdevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-[#000000] dark:text-[#3399ff] hover:opacity-85 transition-opacity"
            >
              <img
                src={pixelLogoUrl}
                alt="Pixel Web Developers"
                className="h-4 w-auto object-contain"
              />
              <span>Pixel Web Developers</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
